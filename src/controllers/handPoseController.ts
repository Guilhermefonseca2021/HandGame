import * as handPoseDetection from "@tensorflow-models/hand-pose-detection";
import "@tensorflow/tfjs-backend-webgl";

async function loadHandPoseModel() {
  const model = handPoseDetection.SupportedModels.MediaPipeHands;
  const detector = await handPoseDetection.createDetector(model, {
    runtime: "tfjs",
    modelType: "full",
  });

  return detector;
}
