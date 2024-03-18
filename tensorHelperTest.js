const assert = require('assert');
const { getModel, convertBase64ToTensor, startPrediction } = require('./tensorhelper');

const tensorBase64 = '';
// TensorFlow model for testing
const tensorModel = {
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
  
    const tensor = await convertBase64ToTensor(tensorBase64);
    assert.ok(tensor instanceof tf.Tensor, 'Converted tensor should be an instance of tf.Tensor');
  });

  it('should start prediction with a TensorFlow model and tensor', async () => {
    const tensorVal = tf.tensor([1, 2, 3]); // testor testing values
    const predictions = await startPrediction(tensorModel, tensorVal);
    assert.deepStrictEqual(predictions, [1, 2, 3], 'Predictions should match the expected values');
  });

  it('should handle errors when loading the TensorFlow model', async () => {
    // getModel function to throw an error
    getModel = jest.fn().rejectedValue(new Error('Failed to load model'));

    try {
      await getModel();
    } catch (error) {
      assert.strictEqual(error.message, 'Failed to load model', 'Error message should match');
    }
  });

  
});
