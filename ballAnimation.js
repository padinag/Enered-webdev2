class BallAnimation {
    constructor(ballAnimationPropreties){
        this.startX = ballAnimationPropreties.startX;
        this.endX = ballAnimationPropreties.endX;
        this.startY = ballAnimationPropreties.startY;
        this.endY = ballAnimationPropreties.endY;
        this.size = ballAnimationPropreties.size;
        this.element = document.createElement("div");
        this.addBallProperties();
    }

    addBallProperties() {
        this.element.display = "inline-block"
        this.element.style.width = `${this.size}px`;
        this.element.style.height = `${this.size}px`;
        this.element.style.background = "green";
        this.element.position = "absolute";
        this.element.borderRadius = 50
    }

    startAnimation(){
        this.anim = requestAnimationFrame(this.animate);
    }

    stopAnimation(){
        cancelAnimationFrame(this.anim);
    }

    animate() {
        
        
        
        
        this.anim = requestAnimationFrame(this.animate);
    }
}