import init from "../game";
const { handposeModel, gestureEstimator} = await init();

async function predictGesture(sourceElement: HTMLVideoElement, minimumScore: number): Promise<string> {
  if (!handposeModel) {
    console.error("Modelo de detecção de mão não carregado.");
    return "";
  }

  // 1. Detectar mãos no vídeo de entrada
  const predictions = await handposeModel.estimateHands(sourceElement);
  
  if (predictions.length > 0) {
    // 2. Converter landmarks para o formato correto esperado pelo gestureEstimator
    const keypoints = predictions[0].keypoints.map(({ x, y, z }) => ({ x, y, z}));

    // 3. Estimar gestos com base nos keypoints
    const gestureEstimations = gestureEstimator.estimate(keypoints, minimumScore);

    if (gestureEstimations.gestures.length > 0) {
      // 4. Selecionar o gesto com maior confiança
      const gestureResult = gestureEstimations.gestures.reduce((prev, curr) =>
        prev.confidence > curr.confidence ? prev : curr
      );

      return gestureResult.name;
    }
  }

  return "";
}
