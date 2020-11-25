function setup() {
  
  createCanvas(windowWidth,windowHeight);
  background('gainsboro');
}



function draw() {
   
    var bG = 0;
    
    
    
    while(bG < windowHeight){
       
        
        i = random(windowWidth);
        j = random (windowHeight);
        
        line(i, j, 1000, 1000);
        bG = bG + 1;
        // Black Lines Fill up the canvas 
    }
    
   
    if(mouseIsPressed){
      stroke('#F8F8FF');
      fill('#000000');
      textFont('Helvetica');
      textSize(40);
      text('Life is not Always Bleak!', mouseX, mouseY, 500, 500);
   
      // Black lines fade away and text is displayed upon click and hold 
        
    
     
    }
    else{
       if(mouseIsPressed) {
       stroke('#F8F8FF');
      fill('#000000');
        
        i = random(windowWidth);
        j = random (windowHeight);
        
        line(i, j, 1000, 1000);
        bG = bG - 1;
        // Black Lines remain at the ends of the canvas
    }
    }
   }
