import { GestureDescription, Finger, FingerCurl } from "fingerpose";

// Criação do gesto "rock" (pedra)
const RockGesture = new GestureDescription("rock");

// Todos os dedos (exceto o polegar) devem estar totalmente dobrados
[Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky].forEach((finger) => {
  RockGesture.addCurl(finger, FingerCurl.FullCurl);
});

// Define a gesture (e.g., 'victory' sign)
const victoryGesture = new GestureDescription('victory');

// Describe the gesture
victoryGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
victoryGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
victoryGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
victoryGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);

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
  victoryGesture,
  RockGesture,
  PaperGesture,
  ScissorsGesture
}
