async function predictGesture(sourceElement, minimumScore) {
  
    // 1. find landmarks in input video
    const predictions = await handposeModel.estimateHands(
      sourceElement, false
    );
    
    if(predictions.length > 0) {
      
      // 2. estimate gestures based on 21 key points (landmarks)
      const gestureEstimations = gestureEstimator.estimate(
        predictions[0].landmarks, minimumScore
      );
      
      if(gestureEstimations.gestures.length > 0) {
        
        // 3. extract gesture with highest match score
        const gestureResult = gestureEstimations.gestures.reduce(
          (p, c) => { return (p.confidence > c.confidence) ? p : c; }
        );
  
        return gestureResult.name;
      }
    }
    
    return '';
  }