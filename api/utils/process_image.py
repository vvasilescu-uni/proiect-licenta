from PIL import Image, ImageOps
from io import BytesIO
import base64
import numpy as np


def process_image(image_data):
    img = Image.open(BytesIO(base64.b64decode(image_data.split(",")[1]))).convert("L")
    img = ImageOps.pad(img, (28, 28))

    arr = np.array(img, dtype=np.float32)
    arr = np.reshape(arr, (1, arr.shape[0], arr.shape[1], 1))
    arr = 255 - arr

    return arr
