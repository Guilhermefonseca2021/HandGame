import * as tf from '@tensorflow/tfjs';
import * as handpose from '@tensorflow-models/handpose';

const runHandpose = async () => {
  const net = await handpose.load();
  console.log('Handpose model loaded.');
  // We'll use this 'net' object to make predictions
};

runHandpose();