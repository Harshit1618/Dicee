var player1=Math.random();
var player2=Math.random();
player1=Math.floor(player1*10);
player2=Math.floor(player2*10);
player1=player1%6;
player2=player2%6;
var name1=prompt("Enter player1 name:");
var name2=prompt("Enter player2 name:");
name1=name1[0].toUpperCase()+name1.slice(1,);
name2=name2[0].toUpperCase()+name2.slice(1,);

var images=["dice1.png",
"dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];

var image1=document.querySelector(".img1");
var image2=document.querySelector(".img2");
document.querySelector(".img1").setAttribute("src",images[player1]);

document.querySelector(".img2").setAttribute("src",images[player2]);

if (player1>player2){
    document.querySelector("h1").innerHTML='<i class="fa-solid fa-star"></i>'+name1+' wins';

}
else if(player2>player1){
    document.querySelector("h1").innerHTML=name2+' wins<i class="fa-solid fa-star"></i> ';
}
else{
    document.querySelector("h1").innerHTML="Draw";
    
}

