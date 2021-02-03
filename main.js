var canvas = new fabric.Canvas('myCanvas');
block_image_width = 30;
block_image_height = 30;

player_x = 10;
player_y = 10;

var player_object="";

function player_update()
 { 
     fabric.Image.fromURL("player.png", function(Img) 
     { 
         player_object = Img;
     player_object.scaleToWidth(150);
      player_object.scaleToHeight(140);
      player_object.set({ top:player_y, left:player_x });
       canvas.add(player_object);
    });
 }



 function new_image(get_image)
 { 
     fabric.Image.fromURL(get_image, function(Img)
      { 
          block_image_object = Img;
         block_image_object.scaleToWidth(block_image_width);
          block_image_object.scaleToHeight(block_image_height); 
          block_image_object.set({ top:player_y, left:player_x });
           canvas.add(block_image_object); })
           ; }

           window.addEventListener("keydown", my_keydown);
           function my_keydown(e) 
           { 
               keyPressed = e.keyCode;
             console.log(keyPressed);
              if(e.shiftKey == true && keyPressed == '80')
               { 
                   console.log("p and shift pressed together");
                  block_image_width = block_image_width + 10;
                block_image_height = block_image_height + 10;
                 document.getElementById("current_width").innerHTML = block_image_width; 
                 document.getElementById("current_height").innerHTML = block_image_height;
                 }

                  if(e.shiftKey && keyPressed == '77') { console.log("m and shift pressed together");
                   block_image_width = block_image_width - 10;
                    block_image_height = block_image_height - 10; 
                    document.getElementById("current_width").innerHTML = block_image_width;
                     document.getElementById("current_height").innerHTML = block_image_height; }

if (keyPressed == '38')
{
up();
console.log("up");
}
if (keyPressed == '40')
{
down();
console.log("down");
}
if (keyPressed == '37')
{
left();
console.log("left");
}
if (keyPressed == '39')
{
right();
console.log("right");
}
if (keyPressed == '87')
{
new_image('wall.jpg');
console.log("w");
}
if (keyPressed == '71')
{
new_image('grounnd.png');
console.log("g");
}
if (keyPressed == '76')
{
new_image('light_green.png');
console.log("l");
}
if (keyPressed == '84')
{
new_image('trunnk.jpg');
console.log("t");
}
if (keyPressed == '82')
{
new_image('roof.jpg');
console.log("r");
}
 }
function up()
{
    if(player_y >=0)
{
    player_y = player_y - block_image_height;
console.log("block image height = " + block_image_height);
console.log("when up arrow key is pressed, x = " + player_x + " , y = " +player_y);
canvas.remove(player_object);
player_update();
}
}

function down()
{
    if(player_y <=500)
{
    player_y = player_y + block_image_height;
console.log("block image height = " + block_image_height);
console.log("when down arrow key is pressed, x = " + player_x + " , y = " +player_y);
canvas.remove(player_object);
player_update();
}
}
function left()
{
    if(player_y >0)
{
    player_x = player_x - block_image_width;
console.log("block image height = " + block_image_height);
console.log("when left arrow key is pressed, x = " + player_x + " , y = " +player_y);
canvas.remove(player_object);
player_update();
}
}
function right()
{
    if(player_y <=850)
{
    player_x = player_x + block_image_width;

console.log("block image height = " + block_image_height);
console.log("when right arrow key is pressed, x = " + player_x + " , y = " +player_y);
canvas.remove(player_object);
player_update();
}
}














































































