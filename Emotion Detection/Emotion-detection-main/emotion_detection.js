window.addEventListener('DOMContentLoaded', (event) => {
    const imageUpload = document.getElementById('imageUpload');
    const resultContainer = document.getElementById('resultContainer');
  
    // Load the TensorFlow.js model
    async function loadModel() {
      const model = await tf.loadLayersModel('best_model.h5');
      return model;
    }
  
    // Handle image selection and perform emotion detection
    async function handleImageUpload() {
      const image = imageUpload.files[0];
      const imgElement = document.createElement('img');
      const reader = new FileReader();
  
      reader.onloadend = function () {
        imgElement.src = reader.result;
      };
  
      if (image) {
        reader.readAsDataURL(image);
        imgElement.onload = async function () {
          const model = await loadModel();
          const tensor = tf.browser.fromPixels(imgElement).toFloat().div(255);
          const resized = tf.image.resizeBilinear(tensor, [224, 224]);
          const expanded = resized.expandDims();
          const prediction = model.predict(expanded);
          const result = await prediction.data();
          const emotionLabels = ['Angry', 'Disgust', 'Fear', 'Happy', 'Neutral', 'Sad'];
          const maxScoreIndex = result.indexOf(Math.max(...result));
          const detectedEmotion = emotionLabels[maxScoreIndex];
          
          // Display the detected emotion in the resultContainer
          resultContainer.innerText = `Detected Emotion: ${detectedEmotion}`;
        };
      }
    }
  
    // Call handleImageUpload function when an image is selected
    imageUpload.addEventListener('change', handleImageUpload);
  });