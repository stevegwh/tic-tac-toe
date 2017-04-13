var CPU = function() {
    this.name = "cpu";
    this.turn = false;
    this.cornerCount = 0;
    this.count = 0;
    this.piece = o;
}

CPU.prototype.move = function() {
    if(game.mode == "CvC")
        this.CvCtoggle();

    if (this.tryToWin() || this.takeCorner() || this.failsafe()) {
        if(game.mode != "CvC")
            this.turn = false;
    } else {
        console.log("Something went wrong.");
    }

    return;

}

CPU.prototype.CvCtoggle = function() {
    if(this.name == "cpu") {
        this.name = "player"
        this.piece = x;
    } else {
        this.name = "cpu"
        this.piece = o;
    }
}

CPU.prototype.takeCorner = function() {
    // Takes two corners and if center is still free, it will take it (Classic tic-tac-toe trick)
    if (this.cornerCount == 2 && $('#4').hasClass('free')) {
        $('#4').addClass(this.name).empty().append(this.piece).removeClass('free');
        return true;
    }
    for (var k = 0; k < game.corners.length; k++) {
        if ($('#' + game.corners[k]).hasClass("free")) {
            this.cornerCount++
                $('#' + game.corners[k]).addClass(this.name).empty().append(this.piece).removeClass('free');
            return true;
        }
    }
}

CPU.prototype.failsafe = function() {

    for (var j = 0; j < 9; j++) {
        if ($("#" + j).hasClass('free')) {
            $('#' + (j)).addClass(this.name).empty().append(this.piece).removeClass('free');
            return true;
        }
    }
}

CPU.prototype.isWinningMove = function(square) {
    var indexes = []
    for (var i = 0; i < game.winningNums.length; i++)
        if (game.winningNums[i].indexOf(square) >= 0)
            indexes.push(i);

    for (var x = 0; x < indexes.length; x++) {
        var cpuCount = 0;
        var playerCount = 0;
        for (var y = 0; y < 3; y++) {
            if ($('#' + game.winningNums[indexes[x]][y]).hasClass('cpu'))
                    cpuCount++;
            if ($('#' + game.winningNums[indexes[x]][y]).hasClass('player'))
                    playerCount++;
            if (cpuCount == 2 || playerCount == 2)
                    return true;
        }
    }
}

CPU.prototype.tryToWin = function() {
    for (var x = 0; x < game.winningNums.length; x++) {
        for (var y = 0; y < game.winningNums[x].length; y++) {
            if ($('#' + game.winningNums[x][y]).hasClass('free')) {
                if (this.isWinningMove(game.winningNums[x][y])) {
                    $("#" + game.winningNums[x][y]).addClass(this.name).empty().append(this.piece).removeClass('free');
                    return true;

                }
            }
        }
    }
}
