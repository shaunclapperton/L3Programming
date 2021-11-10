class Pipe { // Main class for the pipe , which is call on the game.html functions 
    constructor(x,y,w,h,c,xspeed){
        this.x= x;
        this.y =y;
        this.w= w;
        this.h =h;
        this.c= c;
        this.xspeed =xspeed;
    }
     pipeDraw(){ // Function which draws the pipes on canvas 
        canvasContext.fillStyle = this.c;
        canvasContext.fillRect(this.x,this.y,this.w,this.h);
    }
     pipeMove(){ // Gives the pipes movement from the right side of the screen to the left, gives the idea that player is moving however player is just jumping on spot #stich-up
        this.x -= this.xspeed;
    }
    score() {
           if (this.x < 0) {
            console.log("This is working yay!")
            Score ++;
          }
        }
    
}