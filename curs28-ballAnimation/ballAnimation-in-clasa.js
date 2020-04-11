class BallAnimation {
    constructor(options) {
        this.startX = options.startX;
        this.endX = options.endX;
        this.startY = options.startY;
        this.endY = options.endY;
        this.step = options.step;
        this.size = options.size;
        this.element = null;
        this.anim = null;
        this.currentX = this.startX;
        this.currentY = this.startY;
        this.createElement();
    }

    createElement() {
        this.element = document.createElement("div");
        this.element.style.width = `${this.size}px`;
        this.element.style.height = `${this.size}px`;
        this.element.style.position = "absolute";
        this.element.style.display = "inline-block";
        this.element.style.background = "green";
        this.element.style.borderRadius = "50%";
        this.element.style.left = `${this.startX}px`;
        this.element.style.top = `${this.startY}px`;
        document.body.appendChild(this.element)
    }

    startAnimation() {
        this.anim = requestAnimationFrame(this.animate.bind(this));
    }

    stopAnimation() {
        cancelAnimationFrame(this.anim);
    }

    animate() {
        console.log(this);
        this.currentX += this.step;
        this.currentY += this.step; 

        if (this.currentX > this.endX){
            this.currentX = this.endX;
        }
      
        if (this.currentY > this.endY){
            this.currentY = this.endY;
        }

        this.element.style.left = `${this.currentX}px`;
        this.element.style.top = `${this.currentY}px`;

        if (this.currentX == this.endX && this.currentY == this.endY){
            this.stopAnimation();
        } else {
            this.anim = requestAnimationFrame(this.animate.bind(this));
        }
    
    }
}
