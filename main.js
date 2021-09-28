function pageCrusher() {
    while(true){
        console.log("crush");
    }
}

function reversedWord(text) {
    let newWord = '';
    for (let i in text) {
        if (text.toUpperCase()[i] === text[i]) {
            newWord += text.toLowerCase()[i];
        }
        else {
            newWord += text.toUpperCase()[i];
        }
    }
    console.log(newWord);
}

reversedWord('teSt');
pageCrusher();