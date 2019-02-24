$(document).ready(function(){
  $("input[type='button']").click(function(event){
    event.preventDefault();
    var question1 = parseInt($("input:radio[name = question1]:checked").val());
    var question2 = parseInt($("input:radio[name = question2]:checked").val());
    var question3 = parseInt($("input:radio[name = question3]:checked").val());
    var question4 = parseInt($("input:radio[name = question4]:checked").val());
    var question5 = parseInt($("input:radio[name = question5]:checked").val());
    var question6 = parseInt($("input:radio[name = question6]:checked").val());
    var question7 = parseInt($("input:radio[name = question7]:checked").val());

    var total = question1 + question2 + question3 + question4 + question5 + question6 + question7;
    $("form").hide();
    $("button").hide();
    $("#result").text("Your score is" + result +"out of 35");
    //var result = document.getElementById("result");
    //alert(total);
    //result.innerHTML= "Your score is" + total + "out of 35";



    //$("form").hide();
    //$("button").hide();
    //$("#result").text("Your score is: " + total + "/55");
    //$("result").show();
  });
});
