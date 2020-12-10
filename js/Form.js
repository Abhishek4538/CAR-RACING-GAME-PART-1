class Form {
  constructor() {
    this.input = createInput('Name');
    this.button = createButton('Play');
    this.greeting = createElement('h3');
    this.resetbutton = createButton('Reset')
  }

  hide() {
        this.input.hide();
    this.button.hide();
    this.greeting.hide();
    this.resetbutton.hide();
    
  }
 
  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(windowWidth/2, 0);
    
    this.input.position(windowWidth/2-40,windowHeight/2-80 );
    this.button.position(windowWidth/2+30,windowHeight/2);
    this.resetbutton.position(windowWidth-100,20)

    this.button.mousePressed(()=>{
      this.input.hide()
      this.button.hide()
      player.name = this.input.value();
      playercount+=1;
      player.index = playercount;
      player.update();
      player.updateCount(playercount);
      this.greeting.html("Hello " + player.name );
      this.greeting.position(windowWidth/2-70,windowHeight/4);
    
    });
    this.resetbutton.mousePressed(()=>{
      this.resetbutton.hide();
      game.update(0)
      player.updateCount(0)
      allPlayers = []
      cars =[]
      Player.updatecarsAtEnd(0)
      for(var i = 1;i<=4;i++){
      var playerRef = database.ref('players/player'+i).remove()
      game.getState();
      game.start();
      console.log(gamestate)
      }
    })
  }
}
