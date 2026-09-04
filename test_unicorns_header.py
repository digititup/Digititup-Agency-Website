import asyncio
import base64
import json
import subprocess
import time
import urllib.request
import websockets

chrome_cmd = [
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '--headless',
    '--remote-debugging-port=9223',
    '--disable-gpu',
    '--window-size=1440,900',
    'about:blank'
]
proc = subprocess.Popen(chrome_cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
time.sleep(1.5)

async def cdp_call(ws, method, params=None):
    call_id = getattr(cdp_call, 'id', 0) + 1
    cdp_call.id = call_id
    msg = {"id": call_id, "method": method, "params": params or {}}
    await ws.send(json.dumps(msg))
    while True:
        resp = json.loads(await ws.recv())
        if resp.get("id") == call_id:
            return resp.get("result", {})

async def run():
    req = urllib.request.urlopen('http://127.0.0.1:9223/json')
    targets = json.loads(req.read().decode('utf-8'))
    ws_url = targets[0]['webSocketDebuggerUrl']

    async with websockets.connect(ws_url, max_size=25_000_000) as ws:
        # 1. Desktop 1440x900
        await cdp_call(ws, "Emulation.setDeviceMetricsOverride", {
            "width": 1440, "height": 900, "deviceScaleFactor": 1, "mobile": False
        })
        await cdp_call(ws, "Page.navigate", {"url": "http://localhost:3000/unicorns.html"})
        await asyncio.sleep(2.0)

        res1 = await cdp_call(ws, "Page.captureScreenshot", {"format": "png"})
        with open("shot_unicorns_desktop_verified.png", "wb") as f:
            f.write(base64.b64decode(res1["data"]))
        print("1. Desktop unicorns header captured!")

        # 2. Mobile 390x844 closed
        await cdp_call(ws, "Emulation.setDeviceMetricsOverride", {
            "width": 390, "height": 844, "deviceScaleFactor": 2, "mobile": True
        })
        await asyncio.sleep(0.5)
        res2 = await cdp_call(ws, "Page.captureScreenshot", {"format": "png"})
        with open("shot_unicorns_mobile_closed.png", "wb") as f:
            f.write(base64.b64decode(res2["data"]))
        print("2. Mobile unicorns header (closed) captured!")

        # 3. Mobile open drawer
        await cdp_call(ws, "Runtime.evaluate", {
            "expression": "document.getElementById('menuToggle').click();"
        })
        await asyncio.sleep(0.6)
        res3 = await cdp_call(ws, "Page.captureScreenshot", {"format": "png"})
        with open("shot_unicorns_mobile_opened.png", "wb") as f:
            f.write(base64.b64decode(res3["data"]))
        print("3. Mobile unicorns drawer (opened) captured!")

try:
    asyncio.run(run())
finally:
    proc.terminate()
