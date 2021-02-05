const convas=document.querySelector('#draw');

const ctx=convas.getContext('2d');
convas.width=window.innerWidth;
convas.height=window.innerHeight;

ctx.strokeStyle='#BADA55';
ctx.lineJoin='round';
ctx.lineCap='round';
ctx.lineWidth=100;

let isdrawing=false;
let lastX=0;
let lastY=0;
let hue=0;
let direction=true;

function draw(e){
    if (!isdrawing) 
    return; 
    console.log(e)
    ctx.strokeStyle=`hsl(${hue} ,100% , 50%)`;

    ctx.beginPath();
    ctx.moveTo(lastX,lastY);
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();

    [lastX,lastY]=[e.offsetX,e.offsetY]
    hue++;
    if (hue >=360){
        hue=0;
    }

    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction;
      }
    
      if(direction) {
        ctx.lineWidth++;
      } else {
        ctx.lineWidth--;
      }

}
 convas.addEventListener('mousemove' , draw);
 convas.addEventListener('mousedown' , function(e){
     isdrawing=true;
    [lastX,lastY]=[e.offsetX,e.offsetY]

 })
 convas.addEventListener('mouseup', function(){
     isdrawing=false;
 })
 convas.addEventListener('mouseout', function(){
     isdrawing=false;
 })

