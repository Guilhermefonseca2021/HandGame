import * as handPoseDetection from "@tensorflow-models/hand-pose-detection";
import "@tensorflow/tfjs-backend-webgl";
import { PaperGesture, RockGesture, ScissorsGesture } from "./helpers/fingerPose";
import { GestureEstimator } from "fingerpose";


const drawHand = (predictions: any, ctx: any) => {
  if (predictions.length > 0) {
    predictions.forEach((prediction) => {
      const landmarks = prediction.landmarks;

      for (let i = 0; i < landmarks.length; i++) {
        const [x, y] = landmarks[i];
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 3 * Math.PI);
        ctx.fillStyle = 'indigo';
        ctx.fill();
      }
    });
  }
};

async function init() {
  // Inicializa o reconhecedor de gestos com os gestos conhecidos
  const gestures = [RockGesture, PaperGesture, ScissorsGesture];
  let gestureEstimator = new GestureEstimator(gestures);

  // Carrega o modelo MediaPipe Hands
  const model = handPoseDetection.SupportedModels.MediaPipeHands;
  let handposeModel = await handPoseDetection.createDetector(model, {
    runtime: "tfjs",
    modelType: "full",
  });

  return { handposeModel, gestureEstimator }
}

export {
  drawHand,
  init
} 