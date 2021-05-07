
function rotateHand(name, time){
    
    let Hand = document.querySelector(`.${name}`); 
    let clockSegment = 60;
    if (name === "hours") {
        clockSegment = 12;
    } 
    

    let rotationDeg = 180 + (time / clockSegment * 360);
    
    Hand.style.transform = `rotate(${rotationDeg}deg)`;
}

function init() {

  let interval=setInterval(
    
    function () {
      let time = new Date();

      rotateHand("hours", time.getHours());
      rotateHand("minutes", time.getMinutes());
      rotateHand("seconds", time.getSeconds());

    }
  , 1000)

}

init();

function drawMarker(place, className) {
    let marker = document.createElement('div');
    marker.classList.add(className);
    return place.appendChild(marker);
}


function drawMarkers () {

    let frame = document.querySelector('.wrapper');
    
    for (let i=0; i<60; i++){
        let className = "marker";
        
        if (i%5 === 0){
        
        className = "mainMarker";
        
        }
        
        let marker = drawMarker(frame, className);
        marker.style.transform= `rotate( ${180 + i/60*360}deg )`
        
    }
  
}

drawMarkers();
