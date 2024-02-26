const assert = require('assert');
const { cropPicture } = require('./imagehelper');

// image data for testing
const imageData = {
  uri: '/Users/sahardeedahmed/Downloads/IMG_4045.jpg',
  width: 3024,
  height: 4032,
};

describe('Image Helper Functions', () => {
  it('should crop and resize an image', async () => {
    const maskDimension = 750;
    const croppedImage = await cropPicture(imageData, maskDimension);
    assert.ok(croppedImage.base64, 'Cropped image should have a base64 representation');
    assert.strictEqual(croppedImage.width, BITMAP_DIMENSION, 'Cropped image width should match BITMAP_DIMENSION');
    assert.strictEqual(croppedImage.height, BITMAP_DIMENSION, 'Cropped image height should match BITMAP_DIMENSION');
  });
  
it('should handle invalid mask dimensions', async () => {
    const maskDimension = -1; // invalid mask dimension
    const croppedImage = await cropPicture(imageData, maskDimension);
    assert.strictEqual(croppedImage, null, 'Cropped image should be null for invalid mask dimensions');
  });

  it('should handle missing image data', async () => {
    const maskDimension = 100; // valid mask dimension
    const croppedImage = await cropPicture(null, maskDimension);
    assert.strictEqual(croppedImage, null, 'Cropped image should be null for missing image data');
  });

  it('should handle missing mask dimension', async () => {
    const croppedImage = await cropPicture(imageData, null);
    assert.strictEqual(croppedImage, null, 'Cropped image should be null for missing mask dimension');
  });

  it('should handle missing image data and mask dimension', async () => {
    const croppedImage = await cropPicture(null, null);
    assert.strictEqual(croppedImage, null, 'Cropped image should be null for missing image data and mask dimension');
  });
});
