class P5Recorder {
  constructor({
      gifLength = 50,
      framerate = 30
  }) {
    this.gifLength = gifLength;
    this.framerate = framerate;
    this.draw_called = false;
    this.capturer = new CCapture({
      format: 'gif',
      framerate: this.framerate,
      workersPath: './include/',
      name: "spiro_"+Math.random().toString(20).substring(10),
    });
    this.capturer.start();
    this.createLog();
  }

  createLog() {
    var log = document.createElement('div');
    log.innerText = "";
    log.id = "log";
    log.style = "position:fixed;right:0;padding:5px 10px;background-color:green;color:#fff;";
    document.body.append(log);
  }

  updateLog(text) {
    window.document.getElementById("log").innerText = text;
  }

  capture(frameCount) {
    
    if (frameCount <= this.gifLength) {
      this.updateLog(`capturing: ${frameCount}/${this.gifLength}`);
      this.capturer.capture(document.getElementById('defaultCanvas0'));
    }
  }

  finish(){
    this.capturer.stop();
    this.capturer.save();
  }
}
