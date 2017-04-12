var CPU = function() {
    this.turn = false;
    this.cornerCount = 0;
    this.count = 0;
    this.piece = "<img src='O.png' width='100%' height='100%'></img>";
}

CPU.prototype.move = function() {
    //check if can automatically win/need to defend
    for (var x = 0; x < game.winningNums.length; x++) {
        for (var y = 0; y < game.winningNums[x].length; y++) {
            if ($('#' + game.winningNums[x][y]).hasClass('free')) {
                if (this.predictWin(game.winningNums[x][y])) {
                    $("#" + game.winningNums[x][y]).addClass("cpu").empty().append(this.piece).removeClass('free');
                    return this.turn = false;

                }
            }
        }
    }
    //take corners if center is free
    for (var k = 0; k < game.corners.length; k++) {
        if (this.cornerCount == 2 && $('#4').hasClass('free')) {
            $('#4').addClass("cpu").empty().append(this.piece).removeClass('free');
            return this.turn = false;
        } else if ($('#' + game.corners[k]).hasClass("free") && $('#4').hasClass('free')) {
            this.cornercount++
                $('#' + game.corners[k]).addClass("cpu").empty().append(this.piece).removeClass('free');
            return this.turn = false;
        }
    }

    //failsafe (places piece)
    for (var j = 0; j < 9; j++) {
        if ($("#" + j).hasClass('free')) {
            $('#' + (j)).addClass("cpu").empty().append(this.piece).removeClass('free');
            return this.turn = false;
        }
    }

    return this.turn = false;

}

CPU.prototype.predictWin = function(square) {

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
                if (cpuCount == 2) {
                    return true;
                } else if (playerCount == 2) {
                    return true;
                }
            }
        }
    }

}
