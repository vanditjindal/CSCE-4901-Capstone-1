const assert = require('assert');
const { getModel, convertBase64ToTensor, startPrediction } = require('./tensorhelper');

// TensorFlow model for testing
const mockModel = {
  predict: async (tensor) => {
   
    return tf.tensor([1, 2, 3]);
  },
};

describe('Tensor Helper Functions', () => {
  it('should load the TensorFlow model', async () => {
    const model = await getModel();
    assert.ok(model instanceof tf.LayersModel, 'Model should be an instance of tf.LayersModel');
  });

  it('should convert base64 to a TensorFlow tensor', async () => {
    const mockBase64 = '...'; // base64 string testing values
    const tensor = await convertBase64ToTensor(mockBase64);
    assert.ok(tensor instanceof tf.Tensor, 'Converted tensor should be an instance of tf.Tensor');
  });

  it('should start prediction with a TensorFlow model and tensor', async () => {
    const mockTensor = tf.tensor([1, 2, 3]); // testor testing values
    const predictions = await startPrediction(mockModel, mockTensor);
    assert.deepStrictEqual(predictions, [1, 2, 3], 'Predictions should match the expected values');
  });
});
