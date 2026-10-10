import sys
from PIL import Image

src, out, top, h = sys.argv[1], sys.argv[2], int(sys.argv[3]), int(sys.argv[4])
im = Image.open(src)
im = im.crop((0, top, im.width, min(top + h, im.height)))
im.thumbnail((1100, 10000))
im.save(out)
print(out, im.size)
