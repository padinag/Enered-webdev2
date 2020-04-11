class ArrowSprite extends Sprite {
  constructor(options) {
    options.class = options.classes[0];
    super(options);
    this._classes = options.classes;
    this._index = 0;
    // this.pressKeyCallback = options.pressKeyCallback;
    this.initialization();
  }

  initialization() {
    console.log("press any key");
    console.log(this._element);
    this._element.tabIndex = 0;
    this._element.addEventListener("keydown", this.pressKey.bind(this));
  }

  pressKey(e) {
    console.log(e);
    console.log(this._classes);

    // this.pressKeyCallback(e);
    console.log("keypressed");
    let x = e.code;
    console.log(x);
    if (x == "ArrowLeft" || x == "ArrowDown") {
      this._index--;
      if (this._index <= 0) {
        this._index = this._classes.length-1;
      }
      console.log(this._index);
      this.class = this._classes[this._index];
    } else if (x == "ArrowRight" || x == "ArrowUp") {
      this._index++;
      if (this._index >= this._classes.length) {
        this._index = 0;
      }
      this.class = this._classes[this._index];
    } else {
      alert("press an arrow key");
    }
  }
}
