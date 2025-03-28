import { Hands, HandsInterface } from "@mediapipe/hands";

const hands: HandsInterface = new Hands({
  locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
});

hands.setOptions({
  maxNumHands: 2,
  modelComplexity: 1,
  minDetectionConfidence: 0.5,
  minTrackingConfidence: 0.5,
});

hands.onResults((results) => {
  console.log(results);
});

import { GestureDescription, Finger, FingerCurl } from "fingerpose";

// Criação do gesto "rock" (pedra)
const RockGesture = new GestureDescription("rock");

// Todos os dedos (exceto o polegar) devem estar totalmente dobrados
[Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky].forEach((finger) => {
  RockGesture.addCurl(finger, FingerCurl.FullCurl);
});

// O polegar pode estar levemente dobrado ou estendido
RockGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl);
RockGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl);

// Criação do gesto "paper" (papel)
const PaperGesture = new GestureDescription("paper");

// Todos os dedos devem estar estendidos (sem curvatura)
[Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky, Finger.Thumb].forEach(
  (finger) => {
    PaperGesture.addCurl(finger, FingerCurl.NoCurl);
  }
);

// Criação do gesto "scissors" (tesoura)
const ScissorsGesture = new GestureDescription("scissors");

// Dedos indicador e médio devem estar estendidos
[Finger.Index, Finger.Middle].forEach((finger) => {
  ScissorsGesture.addCurl(finger, FingerCurl.NoCurl);
});

// Dedo anelar pode estar totalmente ou parcialmente dobrado
[Finger.Ring, Finger.Pinky].forEach((finger) => {
  ScissorsGesture.addCurl(finger, FingerCurl.FullCurl);
  ScissorsGesture.addCurl(finger, FingerCurl.HalfCurl);
});

export {
  RockGesture,
  PaperGesture,
  ScissorsGesture
}
