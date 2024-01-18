let rand = Math.floor(Math.random() * 100) + 1;

console.log(rand);

let userNum;
let diff;

do {
    userNum = prompt("Enter your number: ");
    userNum = Number.parseInt(userNum);
    diff = userNum - rand;
    if (diff === 0) {
        alert("Congrats you Win");
    } else if (diff > 0 && diff <= 10) {
        alert("Your Number is quiet greater please input lower number");
    } else if (diff > 10 && diff >= 25) {
        alert("Your number is higer, Please input lower number");
    } else if (diff > 25) {
        alert("You are too far, Please input lower Number");
    } else if (diff < 0 && diff >= -10) {
        alert("Your Number is quiet lower please input greater number");
    } else if (diff < -10 && diff >= -25) {
        alert("Your number is lower, Please input greater number");
    } else {
        alert("You are too far, Please input greater Number");
    }
} while (userNum !== rand);

console.log(`Congratulation! You won and the number is : ${rand}`);
