//UI
const togglebtn=document.querySelector('.toggle');
const navel=document.querySelector('#nav');
togglebtn.addEventListener('click',()=>{
     navel.classList.toggle('active');
});


const apple=document.querySelector('.apple'),
orange=document.querySelector('.orange'),
grape=document.querySelector('.grape'),
watermelon=document.querySelector('.watermelon'),
lemon=document.querySelector('.lemon');
const html=document.querySelector('html');

const clockcontainers=document.querySelectorAll('.clock-container');
const applecontainer=document.querySelector('#apple-container'),
orangecontainer=document.querySelector('#orange-container'),
grapecontainer=document.querySelector('#grape-container'),
watermeloncontainer=document.querySelector('#watermelon-container'),
lemoncontainer=document.querySelector('#lemon-container');

apple.addEventListener('click',()=>{
    console.log('hi');
   html.className='';

   clockcontainers.forEach(s=>{
       s.classList.add('hide');      
   })
   applecontainer.classList.remove('hide');
});
orange.addEventListener('click',()=>{
    html.className='orange';
    clockcontainers.forEach(s=>{
        s.classList.add('hide');       
    })
    orangecontainer.classList.remove('hide');
 });
 grape.addEventListener('click',()=>{
    html.className='grape';
    clockcontainers.forEach(s=>{
        s.classList.add('hide');       
    })
    grapecontainer.classList.remove('hide');
 });
 watermelon.addEventListener('click',()=>{
    html.className='watermelon';
    clockcontainers.forEach(s=>{
        s.classList.add('hide');      
    })
    watermeloncontainer.classList.remove('hide');

 });
 lemon.addEventListener('click',()=>{
    html.className='lemon';
    clockcontainers.forEach(s=>{
        s.classList.add('hide');      
    })
    lemoncontainer.classList.remove('hide');

 });





// Clock

const hourels=document.querySelectorAll('.hour'),
minuteels=document.querySelectorAll('.minute'),
secondels=document.querySelectorAll('.second');

const dateels=document.querySelectorAll('.date');

function setTime(){
    
    const date=new Date();
    const hours=date.getHours();
    const hoursforclock=hours - 12;
    const minutes=date.getMinutes();
    const seconds=date.getSeconds();

    let getampm=hours>=12 ? 'PM':'AM';
    if(hours===24){
        getampm='AM';
    }

    hourels.forEach(hourel=>{
        hourel.style.transform=`translate(-50%,-100%) rotate(${scale(hoursforclock,0,12,0,360)}deg)`;
    });
    minuteels.forEach(minuteel=>{
        minuteel.style.transform=`translate(-50%,-100%) rotate(${scale(minutes,0,60,0,360)}deg)`;
    });
    secondels.forEach(secondel=>{
        secondel.style.transform=`translate(-50%,-100%) rotate(${scale(seconds,0,60,0,360)}deg)`;
    });

    dateels.forEach(dateel=>{
        dateel.textContent=`${hoursforclock} : ${minutes<10 ? 0`${minutes}`: minutes}  ${getampm}`;
    });


}


const scale=(num,inmin,inmax,outmin,outmax)=>{
     return (num-inmin) * (outmax-outmin) / (inmax-inmin) + outmin;
}

setTime();
setInterval(setTime,1000);


const lis=document.querySelectorAll('li');
function removeactive(){
    console.log('hi');
    lis.forEach(li=>{
        li.classList.remove('active');
    });
}

lis.forEach(li=>{
   
    li.addEventListener('click',()=>{
        removeactive();
        li.classList.add('active');
    })
});



