class ClickableSprite extends Sprite {
    constructor(options){
        super(options);
        this.clickCallback = options.clickCallback;
        this.inite();
    }

    inite(){
        console.log("init din animated sprite1");
        this._element.addEventListener("click", this.click.bind(this))
    }

    click(e){
        console.log.bind("click");
        this.clickCallback(e);
    }
}