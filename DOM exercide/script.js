const turnOn = document.querySelector('#turnOn');
const bulb = document.querySelector('#bulb');

turnOn.addEventListener('click', function(){
    console.log(bulb.src);
    if(bulb.src.match('off')){
        bulb.src ='./on.gif';
        turnOn.innerHTML = 'Turn Off';
    } else{
        bulb.src = './off.gif';
        turnOn.innerHTML = 'Turn On';
    }
})