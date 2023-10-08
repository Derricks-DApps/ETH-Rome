import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';

const CloudVisionUploader: React.FC = () => {
  const webcamRef = useRef<Webcam | null>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);

  const captureImage = () => {
    const imageSrc = webcamRef.current?.getScreenshot();
    setCapturedImage(imageSrc || null);
  };

  const uploadImageToVisionAPI = async () => {
    try {
      // Replace with your Google Cloud Vision API key and endpoint
      const apiKey = 'AIzaSyDDoDXKneixBALjMSV4t0EpUOHntdA55oY';
      const endpoint =
        'https://vision.googleapis.com/v1/images:annotate?key=' + apiKey;

      const requestData = {
        requests: [
          {
            image: {
              content: capturedImage?.split(',')[1] || '',
            },
            features: [
              {
                type: 'LABEL_DETECTION',
                maxResults: 5,
              },
            ],
          },
        ],
      };

      const response = await axios.post(endpoint, requestData);
      console.log('Vision API Response:', response.data);
    } catch (error) {
      console.error('Error uploading image to Vision API:', error);
    }
  };

  return (
    <div>
      <Webcam ref={webcamRef} />
      <button onClick={captureImage}>Capture Image</button>
      {capturedImage && (
        <div>
          <img src={capturedImage} alt="Captured" />
          <button onClick={uploadImageToVisionAPI}>Upload to Vision API</button>
        </div>
      )}
    </div>
  );
};

export default CloudVisionUploader;
