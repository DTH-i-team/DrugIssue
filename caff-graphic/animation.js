var i = 0;
var total_coffee = 0;
var total_redbull = 0;
var total_fivehour = 0;
var total_cola = 0;
var total_monster = 0;
var total_tablets = 0;
var total_powder = 0;
var exceededBy = 0;
var wrapper_ht = $(".wrapper").height();

//console.log(wrapper_ht);


$(document).ready(function(){



    //COFFEE
    $("#btn-coffee").click(function(){
      console.log("button coffee");
      //animate
      if(i < 450){
      $(".wrapper").animate({
          height: '+=293.2px',
          backgroundColor:'green'
      });
      }
        //increment variables
        i+=330;
        total_coffee += 330;

        //if exceeded




        //empty out the labels
        $("#total").empty();
        $("#total_coffee").empty();


        //append new totals
        $("#total").append(i + " mg");
        $("#total_coffee").append(total_coffee + " mg");
      });

    //REDBULL
    $("#btn-redbull").click(function(){

      //animate
      if(i < 450){
        $(".wrapper").animate({
            height: '+=71.2px',
            backgroundColor:'green'
        });
      }

        //increment variables
        i+=80;
        total_redbull+=80;

        //empty labels
        $("#total").empty();
        $("#total_redbull").empty();

        //append new totals
        $("#total").append(i + " mg");
        $("#total_redbull").append(total_redbull + " mg");
    });

    //FIVEHOUR
    $("#btn-fivehour").click(function(){

        //animate
        if(i < 450){
        $(".wrapper").animate({
            height: '+=177.6px',
            backgroundColor:'green'
        });
        }

        //increment variables
        i+=200;
        total_fivehour+=200;

        //empy labels
        $("#total").empty();
        $("#total_fivehour").empty();

        //append new totals
        $("#total").append(i + " mg");
        $("#total_fivehour").append(total_fivehour + " mg");
    });

    //COLA
    $("#btn-cola").click(function(){

        //animate
        if(i < 450){
        $(".wrapper").animate({
            height: '+=50px', //increased from 30.4 to be more noticeable
            backgroundColor:'green'
        });
        }

        //increment variables
        i+=34;
        total_cola+=34;

        //empty labels
        $("#total").empty();
        $("#total_cola").empty();

        //append new totals
        $("#total").append(i + " mg");
        $("#total_cola").append(total_cola + " mg");
    });

    //MONSTER
    $("#btn-monster").click(function(){

        //animate
        if(i < 450){
        $(".wrapper").animate({
            height: '+=142.4px',
            backgroundColor:'green'
        });
        }

        //increment variables
        i+=160;
        total_monster+=160;

        //empty labels
        $("#total").empty();
        $("#total_monster").empty();

        //append new totals
        $("#total").append(i + " mg");
        $("#total_monster").append(total_monster + " mg");
    });

    //TABLETS
    $("#btn-tablets").click(function(){

      //animate
      if(i < 450){
        $(".wrapper").animate({
            height: '+=177.6px',
            backgroundColor:'green'
        });
        }

        //increment variables
        i+=200;
        total_tablets+=200;

        //empty labels
        $("#total").empty();
        $("#total_tablets").empty();

        //append new totals
        $("#total").append(i + " mg");
        $("#total_tablets").append(total_tablets + " mg");
    });

    //POWDER
    $("#btn-powder").click(function(){

      //animate
      if(i < 450){
        $(".wrapper").animate({
            height: '+=261.6px',
            backgroundColor:'green'
        });
      }

        //increment variables
        i+=294.125;
        total_powder+=294.125;

        //empty labels
        $("#total").empty();
        $("#total_powder").empty();

        //append new totals
        $("#total").append(i + " mg");
        $("#total_powder").append(total_powder + " mg");
    });

    $("img").click(function(){
      console.log("image click");
      //console.log(i);
      if(i==450){
      exceededBy = 450;
      }
      else if(i>450){
        exceededBy = i-450;
      }
      console.log("ExceededBy: " + exceededBy);
      //turn up the red!
      if (i >= 450){
        $(".wrapper").css("background-color","red");
        $("#warning").empty();
        $("#warning").append("You have exceeded the daily limit of caffeine by: " + exceededBy + "mg");
      }
      if(i >= 11920){
        $("#warning").empty();
        $("#warning").append("LIKELY FATALITY");
      }
    });

    function appendExceeded(){

    }
});
