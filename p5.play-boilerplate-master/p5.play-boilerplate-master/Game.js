class Game{
    constructor(){

    }
   getState(){

   }

   updateState(){

   }
   
   
    start(){
       player.getPlayerCount()
        form.display()
        car1 = createSprite(300,300,50,50)
        car1.addImage(car1img)
        car2 = createSprite(500,300,50,50)
        car2.addImage(car2img)
        car3 = createSprite(700,300,50,50)
        car3.addImage(car3img)
        car4 = createSprite(900,300,50,50)
        car4.addImage(car4img)
        car1.scale = 0.1
        car2.scale = 0.1
        car3.scale = 0.1
        car4.scale = 0.1
        cars = [car1,car2,car3,car4]

        

    }
    play(){
       form.hide() 
       background("Green")
       imageMode(CENTER)
       image(trackimg,displayWidth/2,displayHeight/2,displayWidth,displayHeight)

       var x = 700
       var y = 300
       player.getPlayerInfo()
        var index = 0
       for(var eachPlayer in allplayers){
        index = index+1        
        cars[index-1].x=allPlayers[eachPlayer].xposition;
        cars[index-1].y=allplayers[eachPlayer].yposition+(index*50)  
       }
       
       if(keyIsDown(LEFT_ARROW)){
           player.xposition = player.xposition - 5
           player.updatePlayers()
           
       }

       if(keyIsDown(DOWN_ARROW)){
        player.yposition = player.yposition + 5
        player.updatePlayers()
        car1.addImage(car1d)
        car2.addImage(car2d)
        car3.addImage(car3d)
        car4.addImage(car4d)
        
    }
    
    if(keyIsDown(RIGHT_ARROW)){
        player.xposition = player.xposition + 5
        player.updatePlayers()
        car1.addImage(car1r)
        car2.addImage(car2r)
        car3.addImage(car3r)
        car4.addImage(car4r)
    }
       
    

}   

    


}