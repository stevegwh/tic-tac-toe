function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var Game = function() {
    this.init = false;
    this.winningNums = [
        [1, 4, 7],
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
        [6, 4, 2]
    ];
    this.corners = shuffle([2, 8, 6, 0]);

}

Game.prototype.checkWin = function() {
 for(var i = 0; i < this.winningNums.length; i++) {
  var playerCount = 0;
  var cpuCount = 0;
    for(var y = 0; y < this.winningNums[i].length; y++) {

      if($('#' + this.winningNums[i][y]).hasClass('player')) {
        playerCount++;
      }
      if($('#' + this.winningNums[i][y]).hasClass('cpu')) {
        cpuCount++;
      }
      if(playerCount == 3) {
        setup(true);
        alert("Player wins!");
      }

      if(cpuCount == 3) {
        setup(true);
        alert("CPU Wins");
      }
    }
 }

}

Game.prototype.checkDraw = function() {
    for(var j = 0; j < 9; j++) {
      if($("#"+j).hasClass('free')) {
        return;
      } else if(j == 8) {
        setup(true);
        alert("It's a draw!");
      }

    }
}
