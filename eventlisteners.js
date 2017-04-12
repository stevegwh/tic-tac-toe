$(document).ready(function(){
    $('#select').click(function(){
      if(!$(this).hasClass('btn-disabled')) {
          
          var x = "<img src='X.png' width='100%' height='100%'></img>";
          var o = "<img src='O.png' width='100%' height='100%'></img>";
          player.piece === x ? player.piece = o : player.piece = x;
          cpu.piece === x ? cpu.piece = o : cpu.piece = x;
          toggle ?  $('#xoro').text("X") : $('#xoro').text("O");
          toggle ? toggle = false : toggle = true;
      }
    })

    $('#start').click(function(){
      game.init = true;
      cpu.turn = true;
      $('#start, #select').addClass('btn-disabled');

    })

    $('#reset').click(function(){
      setup(true);
    })


      $('.square').click(function(){
        if(game.init && !cpu.turn) {
          if($(this).hasClass('free')) {
            $(this).empty().append(player.piece).addClass("player").removeClass("free");
          }
          cpu.turn = true;
        }
      })
});
