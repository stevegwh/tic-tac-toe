var CPU = function() {
    this.turn = false;
    this.cornerCount = 0;
    this.count = 0;
    this.piece = "<img src='O.png' width='100%' height='100%'></img>";
}

CPU.prototype.move = function() {

    if (this.tryToWin() || this.takeCorner() || this.failsafe()) {
        this.turn = false;
    } else {
        console.log("Something went wrong.");
    }

    return;

}

CPU.prototype.tryToWin = function() {

    for (var x = 0; x < game.winningNums.length; x++) {
        for (var y = 0; y < game.winningNums[x].length; y++) {
            if ($('#' + game.winningNums[x][y]).hasClass('free')) {
                if (this.winningMove(game.winningNums[x][y])) {
                    $("#" + game.winningNums[x][y]).addClass("cpu").empty().append(this.piece).removeClass('free');
                    return true;

                }
            }
        }
    }
}

CPU.prototype.takeCorner = function() {
    // Takes two corners and if center is still free, it will take it (Classic tic-tac-toe trick)
    if (this.cornerCount == 2 && $('#4').hasClass('free')) {
        $('#4').addClass("cpu").empty().append(this.piece).removeClass('free');
        return true;
    }
    for (var k = 0; k < game.corners.length; k++) {
        if ($('#' + game.corners[k]).hasClass("free")) {
            this.cornerCount++
            $('#' + game.corners[k]).addClass("cpu").empty().append(this.piece).removeClass('free');
            return true;
        }
    }
}

CPU.prototype.failsafe = function() {

    for (var j = 0; j < 9; j++) {
        if ($("#" + j).hasClass('free')) {
            $('#' + (j)).addClass("cpu").empty().append(this.piece).removeClass('free');
            return true;
        }
    }
}

CPU.prototype.winningMove = function(square) {

    for (var i = 0; i < game.winningNums.length; i++) {
        var cpuCount = 0;
        var playerCount = 0;
        for (var y = 0; y < game.winningNums[i].length; y++) {
            if (game.winningNums[i].indexOf(square) >= 0) {
                if ($('#' + game.winningNums[i][y]).hasClass('cpu') && game.winningNums[i][y] != game.winningNums[i][square]) {
                    cpuCount++;
                } else if ($('#' + game.winningNums[i][y]).hasClass('player') && game.winningNums[i][y] != game.winningNums[i][square]) {
                    playerCount++
                }
                if (cpuCount == 2 || playerCount == 2) {
                    return true;
                }
            }
        }
    }

}
