Orcastra built with CreateJS
=======
![ScreenShot](https://github.com/gskinnerTeam/Orcastra/blob/master/screenshots/Image1.png)
![ScreenShot](https://github.com/gskinnerTeam/Orcastra/blob/master/screenshots/Image2.png)
![ScreenShot](https://github.com/gskinnerTeam/Orcastra/blob/master/screenshots/Image3.png)

**[View this example online.](https://lab.gskinner.com/orcastra)**

Important notes:
- due to security restrictions on local content, you must run this example from a web server.

Demonstrates a variety of advanced concepts including:
- using Animate CC for asset creation and exporting ready to use JS
- dynamic instantiation using self contained classes from exported JS code
- extending EaselJS classes
- dispatching custom events from within custom classes and with Animate CC timeline
- chainning animation tweens
- using Web Audio API interfaces
    - AudioContext
        - interface represents an audio-processing graph built from audio modules linked together, each represented by an AudioNode.
    - createAnalyser()
        - method of the AudioContext interface creates an AnalyserNode, which can be used to expose audio time and frequency data and create data visualisations.
    - createMediaStreamSource(stream)
        - The createMediaStreamSource() method of the AudioContext Interface is used to create a new MediaStreamAudioSourceNode object, given a media stream (say, from a navigator.getUserMedia instance), the audio from which can then be played and manipulated.
    - AnalyserNode.frequencyBinCount
        - property of the AnalyserNode interface is an unsigned long value half that of the FFT size. This generally equates to the number of data values you will have to play with for the visualization.
    - AnalyserNode.getByteFrequencyData()
        - method of the AnalyserNode interface copies the current frequency data into a Uint8Array (unsigned byte array) passed into it.

**All art and graphics is copyright 2017 gskinner.com, inc. and cannot be used without permission.**
