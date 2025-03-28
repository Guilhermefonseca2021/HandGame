## GAME scissors, paper, rock

- [x] TFJS
- [ ] Player and opponent are shown next to each other
- [] The first round of the game is started by the press of a key or button
- [] A new round starts with a countdown, asking the player to get ready
- [] Player should show a hand gesture (rock, paper or scissors)
- [] Once a valid gesture is registered, it is compared to the computer gesture (which is still hidden at this point)
- [] Winner is awarded one point, score display gets updated

## Design thinking


![Image](https://github.com/user-attachments/assets/70f01d71-6e67-4fae-8667-d54ba8d42292)

1. the first step is to detect whether a hand is actually inside the camera picture.
2. if a hand is detected, we estimate the position of all finger joints to trace the hand skeleton.
3. Using the key points, we describe the curl and pointing direction for each detected finger.
4. Finally, we compare this description to a list of known hand gestures and check which one is the best match.

## TensorFlow.js implementation handPose library

The rock gesture is basically just you making a fist:
You bend your fingers into your palm, curling them under until the tip of each finger touches its corresponding base.
Then you bend the thumb down so that it falls across the top halves of the index and middle fingers.