//Problem: No user interaction. No change to application.
//Solution: When user interacts with elements, cause changes.
var color = $(".selected").css("background-color");
var context = $("canvas")[0].getContext("2d");
var $canvas = $("canvas");
var lastEvent;
var mouseDown = false;

//Wehn clicking control list items
$(".controls").on("click", "li", function(){
  //Deselect sibling elements
  $(this).siblings().removeClass("selected");
  //Select clicked element.
  $(this).addClass("selected");
  //cache current color
  color = $(this).css("background-color");
});
  


//Wehn "New Color " is clicked
$("#revealColorSelect").click(function(){
//show Add Color or Hide the color changeColor
  changeColor();
  $("#colorSelect").toggle();
});

function changeColor() {
  var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();
  $("#newColor").css("background-color", "rgb(" + r + "," + g +", "+ b + ")");
  }
  
//When color sliders change
$("input[type=range]").change(changeColor);


//When "Add Color" is pressed
$("#addNewColor").click(function(){
  //Append the new color tot he controls
  var $newColor = $("<li></li>");
  $newColor.css("background-color", $("#newColor").css("background-color"));
  $(".controls ul").append($newColor);
  //Select the new color
  $newColor.click();
  });
  

//On mouse events on the canvas
$canvas.mousedown(function(e){
  lastEvent = e;
  mouseDown = true;
  }).mousemove(function(e){
        //Draw lines
     if (mouseDown) {
      context.beginPath();
      context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
      context.lineTo(e.offsetX, e.offsetY);
      context.strokeStyle = color;
      context.stroke();
    lastEvent = e;
       }
  }).mouseup(function(){
    mouseDown = false;
}).mouseleave(function() {
    $canvas.mouseup();
  });

  





