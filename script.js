console.log("5".padStart(2, '0'));//文字の前に0をつけられるやつ！！
// タイマーをスタートするのにsetInterval()を使う
// タイマーをストップさせるのにclearInterval()を使う


const timer = document.getElementById("timer");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

const start = document.getElementById("start-btn");
const stop = document.getElementById("stop-btn");
const pause = document.getElementById("pause-btn");

const setCount =document.getElementById("set-count");

let count = 1500;
let intervalId = null;
let countSet = 0;

function updateDisplay(){
let minuteCount = Math.floor(count / 60);//分に変換
let secondCount = count % 60;// 秒に変換

minute.textContent = String(minuteCount).padStart(2, '0');
second.textContent = String(secondCount).padStart(2, '0');
// 数字だけを更新してるから分と秒はそのまま表示される！！
}

// // もしHTMLに分と秒を書かなくても
// minute.textContent = `${String(minuteCount).padStart(2, '0')}分`;
// second.textContent = `${String(secondCount).padStart(2, '0')}秒`;
// で⚪︎分⚪︎秒になる！


// どこでもカウントダウンの関数を呼べるようにする👇
function countDown() {
    if(count > 0) {
        count--;
        updateDisplay();
    } else {
        clearInterval(intervalId);//0になったら終わり
        intervalId = null;

        countSet++;
        setCount.textContent = countSet;

        // この0になっらら終わりを１増やすとしてカウントしたい
    }
}
// スタートを押したらsetInterval(countDown,1000)でカウントダウン関数を呼ぶ👇
start.addEventListener("click", () => {
    if(!intervalId){
        intervalId = setInterval(countDown,1000)
    }
});
// ストップを押したらリセットされる！
stop.addEventListener("click", () => {
    clearInterval(intervalId);//0になったら終わりを呼ぶ
    intervalId = null;
    count = 1500;
    updateDisplay();
});
// 一時停止ボタン
pause.addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = null;
});

updateDisplay()

// 休憩タイマー

const breakTimer = document.getElementById("break-timer");
const breakMinute = document.getElementById("break-minute");
const breakSecond = document.getElementById("break-second");

const breakStart = document.getElementById("break-start-btn");
const breakStop = document.getElementById("break-stop-btn");
const breakPause = document.getElementById("break-pause-btn");

let breakCount = 300;

let breakIntervalId = null;

function updateBreakDisplay(){
    let breakMinuteCount = Math.floor(breakCount / 60);//分に変換
    let breakSecondCount = breakCount % 60;// 秒に変換

    breakMinute.textContent = String(breakMinuteCount).padStart(2, '0');
    breakSecond.textContent = String(breakSecondCount).padStart(2, '0');
}

function breakCountDown() {
    if(breakCount > 0) {
        breakCount --;
        updateBreakDisplay();
    } else {
        clearInterval(breakIntervalId);//0になったら終わり
        breakIntervalId = null;
    }
}
// スタートを押したらsetInterval(countDown,1000)でカウントダウン関数を呼ぶ👇
breakStart.addEventListener("click", () => {
    if(!breakIntervalId){
        breakIntervalId = setInterval(breakCountDown,1000)
    }
});
// ストップを押したらリセットされる！
breakStop.addEventListener("click", () => {
    clearInterval(breakIntervalId);//0になったら終わりを呼ぶ
    breakIntervalId = null;
    breakCount = 300;
    updateBreakDisplay();
});
// 一時停止ボタン
breakPause.addEventListener("click", () => {
    clearInterval(breakIntervalId);
    breakIntervalId = null;
});

updateBreakDisplay();