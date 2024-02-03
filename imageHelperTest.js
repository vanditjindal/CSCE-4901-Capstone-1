const assert = require('assert');
const { cropPicture } = require('./imagehelper');

// Mock image data for testing
const mockImageData = {
  uri: 'path/to/image.jpg',
  width: 800,
  height: 600,
};

describe('Image Helper Functions', () => {
  it('should crop and resize an image', async () => {
    const mockMaskDimension = 100; // valid mask dimension required
    const croppedImage = await cropPicture(mockImageData, mockMaskDimension);
    assert.ok(croppedImage.base64, 'Cropped image should have a base64 representation');
    assert.strictEqual(croppedImage.width, BITMAP_DIMENSION, 'Cropped image width should match BITMAP_DIMENSION');
    assert.strictEqual(croppedImage.height, BITMAP_DIMENSION, 'Cropped image height should match BITMAP_DIMENSION');
  });
});
