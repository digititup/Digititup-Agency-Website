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
    '--remote-debugging-port=9222',
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

async def capture():
    req = urllib.request.urlopen('http://127.0.0.1:9222/json')
    targets = json.loads(req.read().decode('utf-8'))
    ws_url = targets[0]['webSocketDebuggerUrl']

    async with websockets.connect(ws_url, max_size=20_000_000) as ws:
        # Navigate to index.html
        await cdp_call(ws, "Page.navigate", {"url": "http://localhost:3000/index.html"})
        await asyncio.sleep(2.0)

        # Force reveal visibility
        await cdp_call(ws, "Runtime.evaluate", {
            "expression": "document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));"
        })

        # 1. Hero
        await cdp_call(ws, "Runtime.evaluate", {"expression": "window.scrollTo(0, 0);"})
        await asyncio.sleep(0.5)
        res = await cdp_call(ws, "Page.captureScreenshot", {"format": "png"})
        with open("shot_vip_hero_cdp.png", "wb") as f:
            f.write(base64.b64decode(res["data"]))
        print("Captured hero!")

        # 2. Ventures
        await cdp_call(ws, "Runtime.evaluate", {
            "expression": "document.getElementById('ventures').scrollIntoView({block: 'start'});"
        })
        await asyncio.sleep(0.8)
        res = await cdp_call(ws, "Page.captureScreenshot", {"format": "png"})
        with open("shot_vip_ventures_cdp.png", "wb") as f:
            f.write(base64.b64decode(res["data"]))
        print("Captured ventures!")

        # 3. Founder
        await cdp_call(ws, "Runtime.evaluate", {
            "expression": "document.getElementById('founder').scrollIntoView({block: 'start'});"
        })
        await asyncio.sleep(0.8)
        res = await cdp_call(ws, "Page.captureScreenshot", {"format": "png"})
        with open("shot_vip_founder_cdp.png", "wb") as f:
            f.write(base64.b64decode(res["data"]))
        print("Captured founder!")

        # 4. Work With Us
        await cdp_call(ws, "Runtime.evaluate", {
            "expression": "document.getElementById('work-with-us').scrollIntoView({block: 'start'});"
        })
        await asyncio.sleep(0.8)
        res = await cdp_call(ws, "Page.captureScreenshot", {"format": "png"})
        with open("shot_vip_work_cdp.png", "wb") as f:
            f.write(base64.b64decode(res["data"]))
        print("Captured work with us!")

        # 5. Unicorns Page
        await cdp_call(ws, "Page.navigate", {"url": "http://localhost:3000/unicorns.html"})
        await asyncio.sleep(2.5)
        res = await cdp_call(ws, "Page.captureScreenshot", {"format": "png"})
        with open("shot_vip_unicorns_cdp.png", "wb") as f:
            f.write(base64.b64decode(res["data"]))
        print("Captured unicorns!")

try:
    asyncio.run(capture())
finally:
    proc.terminate()

print("All CDP screenshots captured successfully!")
