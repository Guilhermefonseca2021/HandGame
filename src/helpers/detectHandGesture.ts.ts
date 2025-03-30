import * as fp from 'fingerpose';
import { RockGesture, victoryGesture, PaperGesture, ScissorsGesture } from './fingerPose';

//  This function continuously detects hands, estimates gestures, and logs the recognized gesture.
const detectHandGestures = async (net: any) => {
  const video = document.getElementById('webcam') as HTMLVideoElement | null;
  const canvas = document.getElementById('canvas') as HTMLCanvasElement | null;

  if (!video || !canvas) {
    console.error("Webcam or canvas not found!");
    return;
  }

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    console.error("Could not get canvas context");
    return;
  }

  const gesture = new fp.GestureEstimator([
    victoryGesture, RockGesture, PaperGesture, ScissorsGesture
  ]);

  const hands = await net.estimateHands(video);

  if (hands.length > 0) {
    const estimatedGestures = gesture.estimate(hands[0].landmarks, 8);
    if (estimatedGestures.gestures.length > 0) {
      const result = estimatedGestures.gestures.reduce((p, c) => 
        (p.score > c.score) ? p : c
      );
      console.log(result.name);
    }
  }

  // Desenha a mão
  drawHand(hands, ctx);

  // Chamar novamente no próximo frame
  requestAnimationFrame(() => detectHandGestures(net));
};
