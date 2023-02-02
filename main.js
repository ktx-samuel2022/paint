var mevent = "empty";
var utX,utY;
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
color = "black";
widthLine = 1;
larguraTela = screen.width;
novaL = screen.width-70;
novaA = screen.height-300;
if (larguraTela<992)
{
canvas.width = novaL;
canvas.height = novaA;
document.body.style.overflow = "hidden";
}
canvas.addEventListener("mousedown", myMouseDown);
function myMouseDown(e)
 {
     //Addictonal Activity 
      color = document.getElementById("color").value;
        widthLine = document.getElementById("widthLine").value;
         //Addictonal Activity ends
           mevent = "mouseDown"; }
canvas.addEventListener("mousemove", myMouseMove);
 function myMouseMove(e)
     {
        PositionMouseX = e.clientX - canvas.offsetLeft;
            PositionMouseY = e.clientY - canvas.offsetTop;
                 if (mevent == "mouseDown")
                  { ctx.beginPath();
                     ctx.strokeStyle = color; ctx.lineWidth = widthLine;
                      console.log("Last position of x and y coordinates = ");
                       console.log("x = " + utX + "y = " + utY);
                        ctx.moveTo(utX, utY);
                         console.log("Current position of x and y coordinates = ");
                          console.log("x = " + PositionMouseX + "y = " + PositionMouseY);
                           ctx.lineTo(PositionMouseX, PositionMouseY); ctx.stroke();
                         } utX = PositionMouseX; utY = PositionMouseY; }
 canvas.addEventListener("mouseup", myMouseUp);
  function myMouseUp(e) { mevent = "mouseUP";
 } 
 canvas.addEventListener("mouseleave", myMouseLeave);
  function myMouseLeave(e) { mevent = "mouseleave"; }

  function limparArea()
   {
     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); 
    }

    //touch

    canvas.addEventListener("touchstart", myTouchStart);
    function myTouchStart(e)
     {
      console.log("Começou o TOUCH")

 }
 canvas.addEventListener("touchmove", myTouchMove);
 function myTouchMove(e)
  {
    currentPositionOfTouchX = e.touches[0].clientX - canvas.offsetLeft;
     currentPositionOfTouchY = e.touches[0].clientY - canvas.offsetTop;
     ctx.beginPath();
                     ctx.strokeStyle = color; ctx.lineWidth = widthLine;
                      console.log("Last position of x and y coordinates = ");
                       console.log("x = " + utX + "y = " + utY);
                        ctx.moveTo(utX, utY);
                         console.log("Current position of x and y coordinates = ");
                          console.log("x = " + currentPositionOfTouchX + "y = " + currentPositionOfTouchY);
                           ctx.lineTo(currentPositionOfTouchX, currentPositionOfTouchY); ctx.stroke();
                           utX = currentPositionOfTouchX; utY = currentPositionOfTouchY;
}

