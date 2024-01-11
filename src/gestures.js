const { GestureDescription, Finger, FingerCurl, FingerDirection } = window.fp;
  
const rockGesture = new GestureDescription('rock'); // ✊️
const paperGesture = new GestureDescription('paper'); // 🖐
const scissorsGesture = new GestureDescription('scissors'); // ✌️
const dontGesture = new GestureDescription('dont'); // 🚫

  
// Rock
// -----------------------------------------------------------------------------
  
// thumb: half curled
// accept no curl with a bit lower confidence
rockGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
rockGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);

// all other fingers: curled
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
    rockGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
    rockGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}


// Paper
// -----------------------------------------------------------------------------
  
// no finger should be curled
for(let finger of Finger.all) {
    paperGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
}


// Scissors
//------------------------------------------------------------------------------
  
// index and middle finger: stretched out
scissorsGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
scissorsGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
  
// ring: curled
scissorsGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
scissorsGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);

// pinky: curled
scissorsGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
scissorsGesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9);

// Dont 🚫
//------------------------------------------------------------------------------
dontGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
dontGesture.addCurl(Finger.Middle, FingerCurl.HalfCurl, 0.8);
dontGesture.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
//dontGesture.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.);

// all other fingers: curled
for(let finger of [Finger.Index, Finger.Ring, Finger.Pinky]) {
  dontGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
  dontGesture.addCurl(finger, FingerCurl.HalfCurl, 1.0);
}


const gestures = [
  rockGesture, paperGesture, scissorsGesture, dontGesture
]

export {
    gestures
}