class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = null;
    //this.rankUpdated = false;
  }

  getCount(){
    var playerCountRef = database.ref('playercount');
    playerCountRef.on("value",(data)=>{
      playercount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playercount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name: this.name,
      distance: this.distance,
     //rankUpdated:this.rankUpdated
    });
  }
  /*updatePlayerRank(rank){
    database.ref('/players/player'+this.index).update({
      rankUpdated: rank
    });
  }
 /* getPlayerRank(){
    database.ref('/players/player'+this.index).on("value",(data)=>{
    this.rankUpdated = data.val();
    })
  }*/
  static getPlayerInfo(){
    var playerInfo = database.ref('players');
    playerInfo.on("value",(data)=>{
      allPlayers = data.val();
    });
  }
  getcarsAtEnd(){
    database.ref('CarsAtEnd').on("value",(data)=>{
      this.rank = data.val();

    });
    
  }
  static updatecarsAtEnd(rank){
    database.ref('/').update({
      CarsAtEnd:rank
    });

  }
}
