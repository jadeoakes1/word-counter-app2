window.addEventListener('DOMContentLoaded', (event) => {
    let wordBox = document.querySelector('#word-box');
    let wordBtn = document.querySelector('#word-btn');
    wordBtn.addEventListener('click', function() {
        let text = wordBox.value;
        let numWords = text.split(' ')
            .filter(function(n) {
                return n !== ''
            })
            .length;
        console.log(numWords);
        let counter = document.querySelector('#num-words');
        counter.value = numWords;
        
    });

});