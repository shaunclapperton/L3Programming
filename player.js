class Player{ // Main class tag for the player, which sets x,y,w,h,c,xspeed,yspeed 
    constructor(x,y,w,h,c,xspeed,yspeed){
        this.x= x;
        this.y =y;
        this.w= w;
        this.h =h;
        this.c= c;
        this.xspeed =xspeed;
        this.yspeed= yspeed;
    }
    playerDraw(){ //Function which draws the player 
        canvasContext.fillStyle = this.c;
        canvasContext.fillRect(this.x,this.y,this.w,this.h);
    }
    playerMove (){ // Player movement through the press of space bar
       this.x = canvas.width / 6; // Sets the player x pos in the middle / upper half of the screen on run of the function 
        if(spaceKeyPressed){ // If the spacekey is pressed increase the y speed by -9 , gives the feeling of falling and gravity 
           this.yspeed = -9;
//            console.log("jumping");
           }
        this.yspeed += 0.5;
        this.y += this.yspeed;
        this.yspeed *= 0.98;
        if(this.y < 0 || this.y + this.h > canvas.height) {
            gameRun = false;
            console.log("Hit top");
        }
    }
    pipehit (){
        if (pxPos + PLAYER_WIDTH == xPos ) {
              gameover = true;
            console.log("Ive hit something ") ;
        }
       }
    
    pipeHit(item){
		return (this.x <= (item.x + item.w) 
			&& (this.x + this.w) >= item.x)
			&&  
			(this.y <= (item.y + item.h)
			&& (this.y + this.h) >= item.y);
	}
	hasPipeHit(pipe) {
		return this.pipeHit(pipe);
	}
	hasCollided(){
		var self = this;
		var collided = false;
		
		pipes.forEach(function(pipe, i){
			if(self.hasPipeHit(pipe)) {
				
				if(self.y + self.h > pipe.y && self.y < pipe.y + pipe.h && self.x + self.w > pipe.x && self.w < pipe.x + pipe.w){ 
					gameRun = false;
                    console.log("Youve hit the pipe");
				}
				collided = true;
			}
		});
	}
}


