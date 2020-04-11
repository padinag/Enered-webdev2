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
        this.element.style.display = "inline-block",
        this.element.style.width = `${this.size}px`,
        this.element.style.height = `${this.size}px`,
        this.element.style.background = "green",
        this.element.style.position = "absolute",
        this.element.style.borderRadius = "50%",
        this.element.style.borderStyle = "solid",
        this.element.style.borderSize = "0px",
        this.element.style.borderColor = "green",
       this.element.style.top = `${this.startY}px`,
        this.element.style.left = `${this.startX}px`
       }

    startAnimation(){
        this.anim = requestAnimationFrame(this.animate);
    }

    stopAnimation(){
        cancelAnimationFrame(this.anim);
    }

    animate() {
        var horizontal = true;
        var pas = 1;
        var repeatNo = 5;
        var leftLimit = 50;
        var topLimit = 50;

         if(horizontal){
        for (var i = 0; i < repeatNo; i++){
        startX += pas;
        if (startX > endX || startX < leftLimit) {
            console.log(startX);
            pas *= -1; 
        }
        this.element.style.left = `${startX}px`;
        // horizontal = false;
    }
         } else{
            for (var i = 0; i < repeatNo; i++){
                startY -= pas;
                if (startY < endY || startY < topLimit) {
                    console.log(startY);
                    pas *= -1; 
                }
         }
        this.element.style.top = `${startY}px`;

        } 
        
        this.anim = requestAnimationFrame(this.animate);
    }
}
