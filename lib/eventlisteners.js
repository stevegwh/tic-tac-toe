$(document).ready(function() {

    $('#select').click(function() {
        if (!$(this).hasClass('btn-disabled')) {
            player.piece === x ? (player.piece = o, cpu.piece = x, $('#xoro').text("O")) : (player.piece = x, cpu.piece = o, $('#xoro').text("X"));
        }
    })

    $('#start').click(function() {
        if (!$(this).hasClass('btn-disabled')) {
            game.init = true;
            if (!game.playerfirst && game.mode !== "PvP") {
                cpu.turn = true;
            }

            $('.mode').addClass('btn-disabled');
        }

    })

    $('#cpu-mode').click(function() {
        if (!$(this).hasClass('btn-disabled')) {
            game.mode = "CvC";
            game.playerfirst = false;
            $('#first').text('CPU');
            $('#first-select, #select').addClass('btn-disabled');
        }
    });

    $('#2p-mode').click(function() {
        if (!$(this).hasClass('btn-disabled')) {
            game.mode = "PvP";
            $('#first-select, #select').addClass('btn-disabled');
        }
    });

    $('#normal-mode').click(function() {
        if (!$(this).hasClass('btn-disabled')) {
            $('#first-select, #select').removeClass('btn-disabled');
            game.mode = "PvC";
        }
    });
    $('#first-select').click(function() {
        if (!$(this).hasClass('btn-disabled')) {
            !game.playerfirst ? (game.playerfirst = true, $('#first').empty().append(player_icon)) : (game.playerfirst = false, $('#first').empty().append(cpu_icon) );
        }
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
