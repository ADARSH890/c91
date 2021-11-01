player1_name =localStorage.getItem("player1_name");
player2_name =localStorage.getItem("player2_name");
document.getElementById("player1_name").innerHTML =player1_name + ":";
document.getElementById("player2_name").innerHTML =player2_name + ":";
player1_score = 0;
player2_score = 0;
document.getElementById("player1_score").innerHTML =player1_score;
document.getElementById("player2_score").innerHTML =player2_score;
document.getElementById("player_question").innerHTML ="question turn-"+player1_name;
document.getElementById("player_answer").innerHTML ="answer turn-"+player2_name;
function send(){
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    c1=word.charAt(1);
    half=Math.floor(word.length/2);
c2=word.charAt(half);
last=word.length-1;
c3=word.charAt(last);
r1=word.replace(c1,"_");
r2=r1.replace(c2,"_");
r3=r2.replace(c3,"_");
q="<h4 id='word_display'> "+r3+" </h4>";
a="<br> ans-<input id='input_check_box'>";
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row=q+a+check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("word").value="";

}