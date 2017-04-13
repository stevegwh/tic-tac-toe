 var game, player, cpu, pieceSize = "100%";
 var x = "<img src='/assets/X.png' width='100%' height='100%'></img>";
 var o = "<img src='/assets/O.png' width='100%' height='100%'></img>";
 var player_icon = '<i class="fa fa-user" aria-hidden="true"></i>';
 var cpu_icon = '<i class="fa fa-desktop" aria-hidden="true"></i>';

 function setup(reset) {
     game = new Game();
     player = new Player();
     cpu = new CPU();
     if(reset) {
         $('.mode').removeClass("btn-disabled");
         $('.square').removeClass().addClass("free square").text("");
         $('#xoro').text("X");
         $('#first').empty().append(cpu_icon);
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
