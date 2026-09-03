import subprocess

html = '''<!DOCTYPE html>
<html>
<head><title>Test Pin View</title></head>
<body>
<iframe id="app" src="http://localhost:3000/unicorns.html" style="width:1440px;height:900px;border:none;"></iframe>
<script>
const iframe = document.getElementById('app');
iframe.onload = () => {
  const doc = iframe.contentDocument;
  setTimeout(() => {
    // Click OpenAI to zoom in close to San Francisco
    const openaiItem = doc.querySelector('.unicorn-list-item[data-id="openai"]');
    if (openaiItem) openaiItem.click();
  }, 1200);
};
</script>
</body>
</html>'''

with open('test_pv.html', 'w') as f:
    f.write(html)

cmd = [
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '--headless',
    '--screenshot=shot_sf_pins_zoomed.png',
    '--window-size=1440,900',
    '--virtual-time-budget=5000',
    'http://localhost:3000/test_pv.html'
]
subprocess.run(cmd)
print('Screenshot captured!')
