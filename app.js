function check(){
var score=0;
var right_answer_1 = document.getElementById('q1-a1');
var q1_answer_2 = document.getElementById('q1-a2');
var q1_answer_3 = document.getElementById('q1-a3');
var q1_answer_4 = document.getElementById('q1-a4');
if(right_answer_1.checked == true){
    score++
    alert('q1 is correct')
}
else{
    alert('q1 is wrong');
}


var right_answer_2 = document.getElementById('q2-a1');
var q2_answer_2 = document.getElementById('q2-a2');
var q3_answer_3 = document.getElementById('q2-a3');
var q4_answer_4 = document.getElementById('q2-a4');
if(right_answer_2.checked == true){
    score++
    alert('q2 is correct')
}
else{
    alert('q2 is wrong');
}

var right_answer_3 = document.getElementById('q3-a1');
var q2_answer_2 = document.getElementById('q3-a2');
var q3_answer_3 = document.getElementById('q3-a3');
var q4_answer_4 = document.getElementById('q3-a4');
if(right_answer_3.checked == true){
    score++
    alert('q3 is correct')
}
else{
    alert('q3 is wrong');
}

   alert("your score is " + score++);

}