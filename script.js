 var toggle, game, player, cpu, pieceSize = "100%";

 function setup(reset) {
     toggle = false;
     game = new Game();
     player = new Player();
     cpu = new CPU();
     if(reset) {
         $('#start, #select').removeClass("btn-disabled");
         $('.square').removeClass().addClass("free square").text("");
         $('#xoro').text("X");
     }
 }

 $(document).ready(function() {

    setInterval(function(){
      if(game.init) {
          game.checkWin();
          game.checkDraw();
        if(cpu.turn)
          cpu.move();
      }
    }, 500);

  $('.square').css('height', $('.square').width());
   $(window).on('resize', function(){$('.square').css('height', $('.square').width());});


})