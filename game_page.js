var player1name = localStorage.getItem("player1_name");
var player2name = localStorage.getItem("player2_name");

document.getElementById("player1_name").innerHTML = player1name;
document.getElementById("player2_name").innerHTML = player2name;
var player1_score = 0;
var player2_score = 0;
document.getElementById("player1_score").innerHTML = " : " + player1_score;
document.getElementById("player2_score").innerHTML = " : " + player2_score;


document.getElementById("player_question").innerHTML = "Question Turn : " + player1name;
document.getElementById("player_answer").innerHTML = "Answer Turn : " + player2name;

function send()
{
    var getword = doxument.getElementById("word").value;
    var word = getword.toLowerCase();

    var charAt1 = word.charAt(1);

    var length = Math.floor(word.length/2);

    var charAt2 = word.charAt(length);

    var length2 = word.length - 1;

    var charAt3 = word.charAt(length2);


    var remove1 = word.replace(charAt1, "_");
    var remove2 = remove1.replace(charAt2, "_");
    var remove3 = remove2.replace(charAt3, "_");

    console.log(remove3);

    var question = "<h3 id = "word_display"> Q:" + remove3 + "</h3>";
    var answer = "<br>Answer <input id="inputcheckbox" type = "text">";
    var button = "<br><br><button type = "btn btn-info" onclick = "check()">Check</button>";

    document.getElementById("output").innerHTML = question + answer + button;
    document.getElementById("word").value = "";

}
