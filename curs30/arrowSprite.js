class ArrowSprite extends Sprite {
  constructor(options) {
    options.class = options.classes[0];
    super(options);
    this._classes = options.clasess;
    this._index = 0;
    this.pressKeyCallback = options.pressKeyCallback;
    this.init();
  }

  init() {
    console.log("press any key");
    this._element.addEventListener("onkeydown", this.pressKey.bind(this));
  }

  pressKey(e) {
    console.log.bind("pressKey");
    this.pressKeyCallback(e);
  }
}
