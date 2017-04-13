$(document).ready(function() {
    $('#select').click(function() {
        if (!$(this).hasClass('btn-disabled')) {
            var x = "<img src='X.png' width='100%' height='100%'></img>";
            var o = "<img src='O.png' width='100%' height='100%'></img>";
            player.piece === x ? (player.piece = o, cpu.piece = x, $('#xoro').text("O")) : (player.piece = x, cpu.piece = o, $('#xoro').text("X"));
        }
    })

    $('#start').click(function() {

        game.init = true;
        if (!game.playerfirst && game.mode !== "PvP") {
            cpu.turn = true;
        }

        $('#start, #select').addClass('btn-disabled');

    })

    $('#cpu-mode').click(function() {
        game.mode = "CvC";
        game.playerfirst = false;
        $('#first').text('CPU');
    });

    $('#2p-mode').click(function() {
        game.mode = "PvP";
    });

    $('#normal-mode').click(function() {
        game.mode = "PvC";
    });



    $('#first-select').click(function() {
        !game.playerfirst ? (game.playerfirst = true, $('#first').text('Player')) : (game.playerfirst = false, $('#first').text('CPU'));
    })

    $('#reset').click(function() {
        setup(true);
    })


    $('.square').click(function() {
        if (game.init) {
            if (game.mode == "PvP") {
                if ($(this).hasClass('free')) {
                    game.playerturn ? ($(this).empty().append(player.piece).addClass("player").removeClass("free"), game.playerturn = false) : ($(this).empty().append(cpu.piece).addClass("cpu").removeClass("free"), game.playerturn = true);
                }
            }

            if (!cpu.turn) {
                if ($(this).hasClass('free')) {
                    $(this).empty().append(player.piece).addClass("player").removeClass("free");
                }
                if (game.mode !== "PvP")
                    cpu.turn = true;
            }
        }
    })
});
