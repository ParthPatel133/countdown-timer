const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * Math.PI * 2;
circle.setAttribute('stroke-dasharray', perimeter);

let duration;
const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(totalDuration){
        duration = totalDuration;
    },
    onTick(timeRemaining){
        //formula for finding offset = perimeter * timeRemaining / duration - perimeter
        circle.setAttribute('stroke-dashoffset', 
        perimeter * timeRemaining / duration - perimeter
        );
    
    },
    onComplete(){
        console.log('timer completed')
    }
});


// NOTE : take svg referance from here : http://tutorials.jenkov.com/svg/circle-element.html