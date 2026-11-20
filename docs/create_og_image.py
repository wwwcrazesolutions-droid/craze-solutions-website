from PIL import Image, ImageDraw, ImageFont
import argparse
parser = argparse.ArgumentParser()
parser.add_argument("--brand", default="Craze Solutions")
args = parser.parse_args()
from pathlib import Path
from math import hypot
W,H=1200,630
im=Image.new('RGB',(W,H),(6,19,32))
p=im.load()
for y in range(H):
    for x in range(W):
        v=max(0, 1-hypot((x-990)/720,(y-220)/550))
        p[x,y]=(round(6+18*v), round(19+39*v), round(32+66*v))
d=ImageDraw.Draw(im, 'RGBA')
for x in range(0,W,45): d.line([(x,0),(x,H)], fill=(107,168,239,14))
for y in range(0,H,45): d.line([(0,y),(W,y)], fill=(107,168,239,14))
# Brand symbol
d.polygon([(92,62),(116,86),(92,110),(68,86)],outline=(111,170,251,255),width=4)
d.polygon([(92,75),(103,86),(92,97),(81,86)],fill=(111,170,251,255))
font_candidates=['/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf','/usr/share/fonts/truetype/liberation2/LiberationSans-Regular.ttf']
bold_candidates=['/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf','/usr/share/fonts/truetype/liberation2/LiberationSans-Bold.ttf']
fn=next(v for v in font_candidates if Path(v).exists())
fb=next(v for v in bold_candidates if Path(v).exists())
fontbrand=ImageFont.truetype(fb,26); fontsmall=ImageFont.truetype(fb,18); fonttitle=ImageFont.truetype(fb,65); fontbody=ImageFont.truetype(fn,25)
d.text((133,69), args.brand.upper(), font=fontbrand, fill=(243,247,255))
d.text((72,200),'SOFTWARE ENGINEERING  /  APPLIED AI',font=fontsmall,fill=(125,183,248))
d.text((72,251),'Building the software',font=fonttitle,fill=(255,255,255))
d.text((72,332),"behind what's next.",font=fonttitle,fill=(143,196,255))
d.text((73,460),'Custom software, SaaS platforms and practical AI solutions',font=fontbody,fill=(178,200,225))
d.rounded_rectangle((72,542,377,590),radius=12,fill=(47,113,231))
d.text((94,552),'LET\'S BUILD TOGETHER',font=fontsmall,fill=(255,255,255))
# circuit rings right
for r in [100,165,235]:
    d.ellipse((1020-r,340-r,1020+r,340+r),outline=(115,179,255,54),width=2)
for z in [(915,194),(1122,475)]: d.ellipse((z[0]-7,z[1]-7,z[0]+7,z[1]+7),fill=(106,188,251,255))
out = Path(__file__).resolve().parent.parent / "public" / "og-image.png"
out.parent.mkdir(parents=True, exist_ok=True)
im.save(out, optimize=True)
print(f"Wrote {out}")
