'use srict';

//Constructor function for all Characters
function Character(name, age, fileLocation, defaultWeapon) {

  this.name = name;
  this.age = age;
  this.fileLocation = fileLocation;
  this.defaultWeapon = defaultWeapon;
  this.id = this.name + this.age;

  this.isKiller = false;
  this.timesUsed = 0;// need to use this somewhere

  this.backStory = '';
  this.badAlibi = '';
  this.goodAlibi = '';

  this.roomLocation = 0;
}



//function to change the status of the killer
Character.prototype.setIsKiller = function (setKiller) {
  this.isKiller = setKiller;
};


//Getter methods for each Character object
Character.prototype.checkIsKiller = function () {
  return this.isKiller;
};

Character.prototype.getBackStory = function () {
  return (this.backStory);
};

Character.prototype.getBadAlibi = function () {
  return this.badAlibi;
};

Character.prototype.getGoodAlibi = function () {
  return this.goodAlibi;
};


//setters for each charachter object
Character.prototype.setBackStory = function (someText) {
  this.backStory = someText;
};

Character.prototype.setBadAlibi = function (someText) {
  this.badAlibi = someText;
};

Character.prototype.setGoodAliby = function (someText) {
  this.goodAlibi = someText;
};

//set the room location for player
Character.prototype.setRoomLocation = function (newRoom) {
  this.roomLocation = newRoom;
};

//TODO: have getter method for picture file.


//generating random players
// let charachter1 = new Character('Kyle', 33, 'some text Location', 'hammer');
// let charachter2 = new Character('Kimmy', 20, 'Other file location', 'phone');
// let charachter3 = new Character('Kamau', 27, 'file Location', 'uber');




let gameCharacter1 = new Character('Robert Thomas',29,'assets for clue game/Robert Thomas (younger brother, 1).jpg', 'Plasma rifle');
let gameCharacter2 = new Character('Samantha Thomas',26, 'assets for clue game/Samantha Thomas (wife, 2).jpg', 'Gravity hammer');
let gameCharacter3 = new Character('Richard Johnson',21, 'assets for clue game/Richard Johnson (business partner, 3).jpg', 'Vibroblade');
let gameCharacter4 = new Character('Cynthia Green', 22, 'assets for clue game/Cynthia Green (personal assistant, 4).jpg', 'Sonic disruptor');
let gameCharacter5 = new Character('Eric Davis', 25, 'assets for clue game/Eric Davis (bodyguard, 5).jpg', 'Railgun');
let gameCharacter6 = new Character('Caroline Rogers',28, 'assets for clue game/Caroline Rogers, (Victim\'s ex-girlfriend, 6).jpg','Acid launcher');
let gameCharacter7 = new Character('William Jones',43, 'assets for clue game/William Jones (accountant, 7).jpg', 'Flamethrower');
let gameCharacter8 = new Character('Rebecca Taylor',45, 'assets for clue game/Rebecca Taylor (secretary, 8).jpg', 'Neural disruptor');
let gameCharacter9 = new Character('Anthony Brown',13, 'assets for clue game/Anthony Brown (Competitor, 9).jpg', 'Singularity cannon');
let gameCharacter10 = new Character('Lisa Williams',23, 'assets for clue game/Lisa Williams (neighbor, 10).jpg', 'Poison dart gun');
let gameCharacter11 = new Character('Timothy Baker',41, 'assets for clue game/Timothy Baker (chauffeur, 11).jpg', 'Energy sword');
let gameCharacter12 = new Character('Maria Rodriguez',37, 'assets for clue game/Maria Rodriguez (housekeeper, 12).jpg', 'Arc caster');
let gameCharacter13 = new Character('Lawrence Campbell', 41, 'assets for clue game/Lawrence Campbell (former employee, 13).jpg', 'Freeze ray');
let gameCharacter14 = new Character('Jessica Parker',42, 'assets for clue game/Jessica Parker (former lover, 14).jpg', 'Smart grenade launcher');
let gameCharacter15 = new Character('Patrick Nelson', 69, 'assets for clue game/Patrick Nelson (lawyer, 15).jpg', 'EMP rifle');
let gameCharacter16 = new Character('Michael Wright', 38, 'assets for clue game/Michael Wright (stockbroker, 16).jpg', 'Quantum destabilizer');
let gameCharacter17 = new Character('Rachel Scott',26, 'assets for clue game/Rachel Scott (journalist-friend, 17).jpg', 'Tesla coil whip');
let gameCharacter18 = new Character('Samuel Young',12, 'assets for clue game/Samuel Young (rival, 18).jpg', 'Nano swarm grenades');
let gameCharacter19 = new Character('Emily Collins',15, 'assets for clue game/Emily Collins (doctor, 19).jpg', 'Dark matter cannon');
let gameCharacter20 = new Character('Jacob Martinez', 27,'assets for clue game/Jacob Martinez (security guard, 20).jpg ', 'Graviton pulse rifle');



//charachter collection constructor this will hold all characters for the game
function CharacterCollection() {
  this.collectionOfCharacters = [];
}

//method to check to see if Character is already in the collection
CharacterCollection.prototype.addCharacter = function (Character) {

  if (this.collectionOfCharacters.includes(Character)) {
    console.log('character is already in array');

  } else {
    this.collectionOfCharacters.push(Character);
  }
};


//creating location for all players to be stored --Testing here --
let ourTotalPlayers = new CharacterCollection();
ourTotalPlayers.addCharacter(gameCharacter1);
ourTotalPlayers.addCharacter(gameCharacter2);
ourTotalPlayers.addCharacter(gameCharacter3);
ourTotalPlayers.addCharacter(gameCharacter4);
ourTotalPlayers.addCharacter(gameCharacter5);
ourTotalPlayers.addCharacter(gameCharacter6);
ourTotalPlayers.addCharacter(gameCharacter7);
ourTotalPlayers.addCharacter(gameCharacter8);
ourTotalPlayers.addCharacter(gameCharacter9);
ourTotalPlayers.addCharacter(gameCharacter10);
ourTotalPlayers.addCharacter(gameCharacter11);
ourTotalPlayers.addCharacter(gameCharacter12);
ourTotalPlayers.addCharacter(gameCharacter13);
ourTotalPlayers.addCharacter(gameCharacter14);
ourTotalPlayers.addCharacter(gameCharacter15);
ourTotalPlayers.addCharacter(gameCharacter16);
ourTotalPlayers.addCharacter(gameCharacter17);
ourTotalPlayers.addCharacter(gameCharacter18);
ourTotalPlayers.addCharacter(gameCharacter19);
ourTotalPlayers.addCharacter(gameCharacter20);

console.log(ourTotalPlayers);


//Constructor for the GamePlay Characters during game session
function GamePlayCharacters(arrayOfCharacters) {
  this.charachtersInPlay = arrayOfCharacters;
  this.winGame; //to be used with boolean true false TODO: make method to win the game
  //Todo: implement counter for number of guesses total and number of guesses limit?
  this.guessedKiller = 0;
  this.guessLimit = 10; //setting to 10 for now

}




GamePlayCharacters.prototype.removeCharacter = function (Character) {
  for (let i = 0; i < this.charachtersInPlay.collectionOfCharacters.length; i++) {
    if (Character.id === this.charachtersInPlay.collectionOfCharacters[i].id) {
      this.charachtersInPlay.collectionOfCharacters.splice(i, 1);
    }
  }
};

GamePlayCharacters.prototype.generateKiller = function () {
  let randomKiller = Math.floor(Math.random() * this.charachtersInPlay.collectionOfCharacters.length);
  this.charachtersInPlay.collectionOfCharacters[randomKiller].setIsKiller(true);
  //reference collectionsOfCharacters because that is the name of the attribute given in the Characters collection object
  //characters in play comes from GamePlay characters object
};

GamePlayCharacters.prototype.resetGame = function () {
  for (let i = 0; i < this.charachtersInPlay.collectionOfCharacters.length; i++) {
    this.charachtersInPlay.collectionOfCharacters[i].setIsKiller(false);
  }
};

//assign rooms for characters in Collection Of Characters array
GamePlayCharacters.prototype.assignRooms = function () {
  let rooms = [1, 2,1,2];

  //shuffle array for rooms
  for (let i = rooms.length - 1; i > 0; i--) {
    //generate random number
    let j = Math.floor(Math.random() * (i + 1));
    let temp = rooms[i];
    rooms[i] = rooms[j];
    rooms[j] = temp;

    console.log(`this is J: ${j} and this is temp: ${temp} the value of i is: ${i} rooms.length is eqaul to ${rooms.length - 1}`);
  }

  for (let i = 0; i < this.charachtersInPlay.collectionOfCharacters.length; i++) {
    let roomAssignment = rooms[i];
    this.charachtersInPlay.collectionOfCharacters[i].setRoomLocation(roomAssignment);
  }
};

//this will check if selected item is a killer
GamePlayCharacters.prototype.checkIfSelectedIsKiller = function(guessedCharacter){

  do{
    for(let i = 0; i< this.charachtersInPlay.collectionOfCharacters.length; i++){
      if(guessedCharacter.checkIsKiller()){
        this.winGame = true;
        console.log('guessed the killer');
        alert('The killer was captured/killed');
      } else{
        this.guessedKiller++;
        console.log(`${this.guessedKiller} is current guessed killer count `);
      }
    }

  }while (this.guessedKiller < this.guessLimit);//check here

};


//global functions for game
function startTheGame(GamePlayCharacters) {
  GamePlayCharacters.resetGame();
  GamePlayCharacters.assignRooms();
  GamePlayCharacters.generateKiller();
}
















//For --Testing Below --

let ourPlayersGame = new GamePlayCharacters(ourTotalPlayers);
// ourPlayersGame.resetGame();
// ourPlayersGame.assignRooms();
console.log(ourPlayersGame);
// ourPlayersGame.generateKiller();
// console.log(ourPlayersGame);
//ourPlayersGame.removeCharacter(charachter1);
// console.log(ourPlayersGame);
startTheGame(ourPlayersGame);

console.log(ourPlayersGame);
