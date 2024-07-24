let audioElement= new Audio("songs/motivate.mp3");
let MasterPlay= document.getElementById("masterplay") ;
let myProgressBar= document.getElementById("myProgressBar");
let dj= document.getElementById("dj");
 
let songs=[
    {songName :"Tujh Bin ft:Bharat Saurabh",FilePath:"songs/0.mp3", imagePath:"images/lake.png"},
    {songName :"Desi-Look pe",FilePath:"songs/1.mp3", imagePath:"images/joker.png"},
    {songName :"Janam-Janam",FilePath:"songs/2.mp3", imagePath:"images/landscape.png"},
    {songName :"Paani-Wala-Dance",FilePath:"songs/3.mp3", imagePath:"images/landscape2.png"},
    {songName :"Sun-raha-hai-na-tu",FilePath:"songs/4.mp3", imagePath:"images/landscape2.png"},
    {songName :"Motivational",FilePath:"songs/5.mp3", imagePath:"images/lake.png"},
]

MasterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        MasterPlay.classList.remove('fa-circle-play');
        MasterPlay.classList.add('fa-circle-pause');
        dj.style.opacity=1;
    }
    else{
        audioElement.pause();
        MasterPlay.classList.remove('fa-circle-pause');
        MasterPlay.classList.add('fa-circle-play');
        dj.style.opacity=0;
    }
});
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
console.log(progress);
 myProgressBar.value= progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime= myProgressBar.value*audioElement.duration/100
})
let makeAllplays= ()=>{
    Array.from(document.getElementsByClassName("songPlay")).forEach((element)=>{
           element.classList.add('fa-circle-play');
           element.classList.remove('fa-circle-pause');
})
}
Array.from(document.getElementsByClassName("songPlay")).forEach((element)=>{
 element.addEventListener('click',(e)=>{
    makeAllplays();
    index= parseInt(e.target.id);
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    audioElement.src= `songs/${index}.mp3`;
    audioElement.play();
    audioElement.currentTime= 0;
    MasterPlay.classList.remove('fa-circle-play');
    MasterPlay.classList.add('fa-circle-pause');
    
    
 })
})