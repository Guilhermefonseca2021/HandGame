import * as handPoseDetection from "@tensorflow-models/hand-pose-detection";
import "@tensorflow/tfjs-backend-webgl";
import { PaperGesture, RockGesture, ScissorsGesture } from "./helpers/handPose";
import { GestureEstimator } from "fingerpose";

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

export default init;