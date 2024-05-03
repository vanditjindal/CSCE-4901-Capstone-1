const assert = require('assert');
const { getModel, convertBase64ToTensor, startPrediction } = require('./tensorhelper');

const tensorVal = tf.tensor([1, 2, 3]);
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
    
    const predictions = await startPrediction(tensorModel, tensorVal);
    assert.deepStrictEqual(predictions, [1, 2, 3], 'Predictions should match the expected values');
  });

  it('should handle errors when loading the TensorFlow model', async () => {
    // getModel function to throw an error
    getModel = jest.fn().rejectedVal(new Error('Failed to load model'));

  it('should handle edge cases in tensor prediction', async () => {
    // Test edge cases like empty tensor, null model, etc.
    const emptyTensor = tf.tensor([]);
    const nullModel = null;
    const predictions1 = await startPrediction(tensorModel, emptyTensor);
    const predictions2 = await startPrediction(nullModel, tensorVal);
    assert.deepStrictEqual(predictions1, [], 'Predictions should be empty for empty tensor');
    assert.strictEqual(predictions2, null, 'Predictions should be null for null model');
  });


    try {
      await getModel();
    } catch (error) {
      assert.strictEqual(error.message, 'Failed to load model', 'Error message should match');
    }
  });
   
  it('should handle errors when converting base64 to tensor', async () => {
    // convertBase64ToTensor function to throw an error
    convertBase64ToTensor = jest.fn().rejectedVal(new Error('Failed to convert base64 to tensor'));

    try {
      await convertBase64ToTensor(tensorBase64);
    } catch (error) {
      assert.strictEqual(error.message, 'Failed to convert base64 to tensor', 'Error message should match');
    }
  });

  it('should handle errors when starting prediction', async () => {
    // startPrediction function to throw an error
    startPrediction = jest.fn().rejectedVal(new Error('Failed to start prediction'));

    try {
      await startPrediction(tensorModel, tensorVal);
    } catch (error) {
      assert.strictEqual(error.message, 'Failed to start prediction', 'Error message should match');
    }
  });
});