console.log("Welcome Spotify")
//Initialize the Variable
let songIndex=0;
let audioElement=new Audio('1.mp3');
let masterPlay= document.getElementById("masterPlay");
let myProgressBar=document.getElementById("myProgressBar");
let gif=document.getElementById("gif");
let masterSongName=document.getElementById("masterSongName1");
let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName:"Song 1",
     filePath:"songs/1.mp3",
     coverPath:"covers/1.jpg"},
     {songName:"Song 2",
     filePath:"songs/2.mp3",
     coverPath:"covers/2.jpg"},
     {songName:"Song 3",
     filePath:"songs/3.mp3",
     coverPath:"covers/3.jpg"},
     {songName:"Song 4",
     filePath:"songs/4.mp3",
     coverPath:"covers/4.jpg"},
     {songName:"Song 5",
     filePath:"songs/5.mp3",
     coverPath:"covers/5.jpg"},
     {songName:"Song 6",
     filePath:"songs/6.mp3",
     coverPath:"covers/6.jpg"},
     {songName:"Song 7",
     filePath:"songs/7.mp3",
     coverPath:"covers/7.jpg"},
     {songName:"Song 8",
     filePath:"songs/8.mp3",
     coverPath:"covers/8.jpg"},
     {songName:"Song 9",
     filePath:"songs/9.mp3",
     coverPath:"covers/9.jpg"},
     {songName:"Song 10",
     filePath:"songs/10.mp3",
     coverPath:"covers/10.jpg"},
     
]
songItems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
    //element.getElementsByClassName("timestamp")[0].innerHTML=songs[i].audioElement.duration

})

// audioElement.play()

//Handle Play/Pause 
masterPlay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime<0){
        audioElement.play();
        let inn=document.getElementById(songIndex);
        makeallplays()
        inn.classList.remove("fa-play-circle");
        inn.classList.add("fa-pause-circle");
    
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity=1
        
            }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        gif.style.opacity=0
        Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
            element.classList.remove('fa-pause-circle');
            element.classList.add('fa-play-circle');
        })
    }
})

audioElement.addEventListener("timeupdate",()=>{
    console.log("timeupdate");
    console.log("Duration")
    console.log(audioElement.duration/60.0)
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress)
    myProgressBar.value=progress

})

myProgressBar.addEventListener("change",()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
})
const makeallplays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })

}


Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener("click",(e)=>{
        songIndex=parseInt(e.target.id);
        //console.log("I am at "+index++)
        console.log(e)
        if(audioElement.paused || audioElement.currentTime<0){
        makeallplays()
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        audioElement.src=`songs/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterSongName.innerText=songs[songIndex].songName;
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity=1
    }
    else{
     
        audioElement.pause();
        e.target.classList.add("fa-play-circle");
        e.target.classList.remove("fa-pause-circle");
        gif.style.opacity=0;
        masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");

    }
      
    })
})

document.getElementById("next").addEventListener("click",()=>{
   
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex=songIndex+1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;

    let inn=document.getElementById(songIndex);
    makeallplays()
    inn.classList.remove("fa-play-circle");
    inn.classList.add("fa-pause-circle");


    audioElement.currentTime=0;
    audioElement.play();
    masterSongName.innerText=songs[songIndex].songName;

    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity=1
})
document.getElementById("previous").addEventListener("click",()=>{
    if(songIndex<=0){
        songIndex=9;
    }
    else{
        songIndex=songIndex-1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;

    let inn=document.getElementById(songIndex);
    makeallplays()
    inn.classList.remove("fa-play-circle");
    inn.classList.add("fa-pause-circle");

    audioElement.currentTime=0;
    audioElement.play();
    masterSongName.innerText=songs[songIndex].songName;
    gif.style.opacity=1

    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
})