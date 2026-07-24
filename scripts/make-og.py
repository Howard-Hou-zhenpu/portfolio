"""Generate the OG cover PNG (1200x630) from an HTML template rendered by
headless Chrome, with @fontsource webfonts base64-embedded so the editorial
serif/mono typography renders faithfully. Temporary build helper.
"""
import base64
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
FONTS = ROOT / "node_modules" / "@fontsource"
OUT_DIR = ROOT / "public" / "images" / "og"
OUT_DIR.mkdir(parents=True, exist_ok=True)

def b64(rel):
    data = (FONTS / rel).read_bytes()
    return base64.b64encode(data).decode("ascii")

playfair_700 = b64("playfair-display/files/playfair-display-latin-700-normal.woff2")
playfair_400 = b64("playfair-display/files/playfair-display-latin-400-normal.woff2")
mono_400 = b64("jetbrains-mono/files/jetbrains-mono-latin-400-normal.woff2")

html = f"""<!doctype html>
<html><head><meta charset="utf-8"/>
<style>
@font-face {{ font-family:'Playfair Display'; font-weight:700; src:url(data:font/woff2;base64,{playfair_700}) format('woff2'); }}
@font-face {{ font-family:'Playfair Display'; font-weight:400; src:url(data:font/woff2;base64,{playfair_400}) format('woff2'); }}
@font-face {{ font-family:'JetBrains Mono'; font-weight:400; src:url(data:font/woff2;base64,{mono_400}) format('woff2'); }}
* {{ margin:0; padding:0; box-sizing:border-box; }}
html,body {{ width:1200px; height:630px; }}
.card {{ position:relative; width:1200px; height:630px; background:#FAF8F4; overflow:hidden; }}
.frame {{ position:absolute; left:48px; top:48px; width:1104px; height:534px; border:1.5px solid #E5DFD4; }}
.mono {{ font-family:'JetBrains Mono',monospace; }}
.serif {{ font-family:'Playfair Display',Georgia,serif; }}
.cjk {{ font-family:'Microsoft YaHei','PingFang SC',sans-serif; }}
.eyebrow {{ position:absolute; left:88px; top:96px; font-size:17px; letter-spacing:3px; color:#7A736A; }}
.eyebrow-line {{ position:absolute; left:88px; top:130px; width:112px; height:1.5px; background:#E5DFD4; }}
.langmark {{ position:absolute; right:88px; top:96px; font-size:17px; letter-spacing:3px; color:#7A736A; }}
.name {{ position:absolute; left:88px; top:158px; font-size:72px; font-weight:700; color:#1F1D1A; line-height:1; }}
.name-cjk {{ position:absolute; left:90px; top:250px; font-size:30px; color:#7A736A; letter-spacing:6px; }}
.tagline {{ position:absolute; left:88px; top:320px; font-size:40px; font-weight:400; color:#3A362F; line-height:1.35; }}
.divider {{ position:absolute; left:88px; top:492px; width:1024px; height:1.5px; background:#E5DFD4; }}
.tags {{ position:absolute; left:88px; top:520px; font-size:19px; letter-spacing:2px; }}
.tags .accent {{ color:#A65A3F; }}
.tags .dot {{ color:#7A736A; padding:0 14px; }}
.status {{ position:absolute; right:88px; top:522px; font-size:15px; letter-spacing:2px; color:#A39B91; }}
</style></head>
<body>
<div class="card">
  <div class="frame"></div>
  <div class="eyebrow mono">PORTFOLIO</div>
  <div class="eyebrow-line"></div>
  <div class="langmark mono">ZH / EN</div>
  <div class="name serif">Zhenpu Hou</div>
  <div class="name-cjk cjk">侯振埔</div>
  <div class="tagline serif">I build AI products from user needs,<br/>market signals, and messy decisions.</div>
  <div class="divider"></div>
  <div class="tags mono"><span class="accent">AI PRODUCT</span><span class="dot">·</span><span class="accent">GLOBAL GROWTH</span><span class="dot">·</span><span class="accent">PMM</span></div>
  <div class="status mono">OPEN TO WORK</div>
</div>
</body></html>"""

tmp_html = OUT_DIR / "_og-tmp.html"
tmp_html.write_text(html, encoding="utf-8")

chrome = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
out_png = OUT_DIR / "og-cover.png"

cmd = [
    chrome, "--headless", "--disable-gpu", "--hide-scrollbars",
    "--force-device-scale-factor=1",
    "--default-background-color=00000000",
    f"--window-size=1200,630",
    f"--screenshot={out_png}",
    tmp_html.as_uri(),
]
print("Running Chrome headless...")
r = subprocess.run(cmd, capture_output=True, text=True)
print(r.stdout)
print(r.stderr)

if out_png.exists():
    print(f"OK: {out_png} ({out_png.stat().st_size} bytes)")
    tmp_html.unlink(missing_ok=True)
else:
    print("FAILED: no PNG produced", file=sys.stderr)
    sys.exit(1)
