function dontClickMe(funCallBack) {
    let i = 0;
    while (i <= 10) {
        funCallBack();
        i++;
    }
}


function laugh() {
    console.log("haha, haha, haha");
}

dontClickMe(laugh);