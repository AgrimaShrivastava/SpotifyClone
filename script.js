console.log("Hello");

let songIndex = 0;
let audioElement = new Audio('songs/apna bna le.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementById('masterSongName')

let songs = [
    {songName:"Apna Bana Le", filePath:"songs/apna bna le.mp3", coverPath:"covers/apna bana le.jpg"},
    {songName:"Tum Kya Mile", filePath:"songs/tum kya mile.mp3", coverPath:"covers/tum kya mile.jpg"},
    {songName:"Heeriye", filePath:"songs/heeriye.mp3", coverPath:"covers/heeriye.jpg"},
    {songName:"Kesariya", filePath:"songs/kesariya.mp3", coverPath:"covers/kesariya.jpg"},
    {songName:"Khairiyat Pucho", filePath:"songs/khairiyat.mp3", coverPath:"covers/Khairiyat.jpg"},
    {songName:"Tera Chehra", filePath:"songs/tera chehra.mp3", coverPath:"covers/tera chehra.jpg"},
    {songName:"Mast Magan", filePath:"songs/mast magan.mp3", coverPath:"covers/Mast Magan.jpg"},
    {songName:"Chaleya", filePath:"songs/chaleya.mp3", coverPath:"covers/chaleya.jpg"},
]

//audioElement.play(); 

//Handel Play/Pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

//Listen to events
audioElement.addEventListener('timeupdate', ()=> {
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value *audioElement.duration/100;
})

songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songN")[0].innerText = songs[i].songName;
})

const makeAllPlays = ()=> {
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
})
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click' , (e)=>{
    makeAllPlays();
    songIndex = parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
  })
})

document.getElementById('next').addEventListener('click', ()=> {
    if(songIndex>=9){
            songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', ()=> {
    if(songIndex<=0){
            songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})