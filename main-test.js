//랜덤번호 지정
//유저가 번호를 입력한다 그리고 go 라는 버튼을 누름
//만약에 유저가 랜덤번호를 맞추면, 맞췄습니다.
//랜덤번호가 < 유저번호 down
//랜덤번호가 > 유저번호 up
//reset 버튼을 누르면 게임이 리셋
//5번의 기회를 다쓰면 게임이 끝난다 (더이상 추측 불가, 버튼 disable)
// 유저가 1~100 범위 밖에 숫자를 입력하면 알려준다. 기회를 깍지 않는다
// 유저가 이미 입력한 숫자를 또 입력하면, 알려준다. 기회를 깍지 않는다.


let randomNum=0;
let playButton=document.getElementById("go");
let resetButton=document.getElementById("reset");
let userInput=document.getElementById("user-input");
let resultArea=document.getElementById("result-area");
let chances=5;
let gameOver=false;
let chanceOutput=document.getElementById("chances-area");

playButton.addEventListener("click",play);
resetButton.addEventListener("click",reset);
userInput.addEventListener("focus",function(){
    userInput.value="";
})


function random(){
    randomNum=Math.floor(Math.random()*100)+1;
    console.log(`정답 : ${randomNum}`);
}

random();


function play(){
    let userValue=userInput.value;

    if(userValue<1||userValue>100){
        resultArea.textContent="1과 100 사이 숫자를 입력해주세요";
        return;
    }

    chances--;
    chanceOutput.textContent=`남은 기회 : ${chances}`;

    if(userValue>randomNum){
        resultArea.textContent="Down!!";
    }else if(userValue<randomNum){
        resultArea.textContent="Up!!";
    }else{
        resultArea.textContent="정답입니다!!";
    }

    if(chances<1){
        gameOver=true;
    }
    
    if(gameOver==true){
        playButton.disabled=true;       
    }
}

function reset(){
    userInput.value="";
 
    random();

    resultArea.textContent="결과가 나온다";

    chances=5;
    chanceOutput.textContent=`남은 기회 : ${chances}`;

    gameOver=false;

    playButton.disabled=false;       

    
}

