const randomcolour = function(){
  const hex = "0123456789ABCDEF";
  let color = "#";
  for(i=0;i<6;i++){
    color +=hex.floor[Math.floor(Math.random()*16)];
  }
  return color;
}
let intervalId;
const startChangingColor = function() {
  if(!intervalId){}
    intervalId =setInterval(changeBackgroundcolor,1000);
}
  function changeBackgroundcolor(){
    document.body.style.backgroundColor=randomcolour();
    
  }

const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId=null
}

document.querySelector('#start').addEventListener('click',startChangingColor);
document.querySelector('#stop').addEventListener('click',stopChangingColor);
