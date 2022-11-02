(function() {
    
    
    //TESTE CASES
    const url = 'https://pokerhand-tester.herokuapp.com/highcard';
    // Royal Flush: https://pokerhand-tester.herokuapp.com/royalflush
    // Straight Flush: https://pokerhand-tester.herokuapp.com/straightflush
    // Four of a kind: https://pokerhand-tester.herokuapp.com/fourofakind
    // Full House: https://pokerhand-tester.herokuapp.com/fullhouse
    // Flush: https://pokerhand-tester.herokuapp.com/flush
    // Straight: https://pokerhand-tester.herokuapp.com/straight
    // Three of a kind: https://pokerhand-tester.herokuapp.com/threeofakind
    // Two Pair: https://pokerhand-tester.herokuapp.com/twopair
    // One Pair: https://pokerhand-tester.herokuapp.com/onepair
    // High Card: https://pokerhand-tester.herokuapp.com/highcard
    

    //REFERENCES
    // https://stackoverflow.com/questions/53628131/ranking-poker-hand
    // https://www.kequc.com/2016/07/31/how-to-score-a-poker-hand-in-javascript
    // https://www.w3schools.com/js
    // https://dev.to/miketalbot/real-world-javascript-map-reduce-solving-the-poker-hand-problem-3eie
    

    // const url = 'https://deckofcardsapi.com/api/deck/new/draw/?count=5';
    fetch(url)
        .then(response => response.json())
        .then(json => {

            // (GET)ting the 5 cards from the API
            const suits = [];
            const faces = [];
            json.cards.forEach(function(deck,i){
                const imgSrc = deck.image
                const image = document.getElementById(`image${i}`)
                image.src = imgSrc
                suits[i] = deck.suit;
                faces[i] = deck.value;
            });

            // BASE RANK
            let order = ['2','3', '4', '5', '6', '7', '8', '9', '10', 'JACK', 'QUEEN', 'KING', 'ACE' ];
            
            
            //Order cards according to paramenters in 'order'
            let facesInOrder = [];
            for (let i = 0; i < order.length; i++) {
                for (let j = 0; j < faces.length; j++) {
                    if (order[i] === faces[j]){
                        facesInOrder.push(faces[j])
                    }
                }
            }


            //DISCOVER HOW MANY PAIR AND THREE OF A KIND HAS ON THE HAND
            let pair = 0;
            let threeFaces = 0;
            for (let i = 0; i < facesInOrder.length; i++){
                if (facesInOrder[i] === facesInOrder[i + 1]){
                    pair ++;
                    if (facesInOrder[i]=== facesInOrder[i + 1] && facesInOrder[i + 1] === facesInOrder[i + 2]){
                    threeFaces ++;
                    }
                }
            }

            
            //flush function 
            function isFlush(){
                suits.sort();
                if(suits[0] === suits[suits.length - 1]){
                    return true;
                }
            }


            //straight function 
            function isStraight() {
                let index = order.indexOf(facesInOrder[0]);
                let ref = order.slice(index, index + 5).join('');
                let compare = facesInOrder.slice(0).join('');
                if (compare === "10JACKQUEENKINGACE"){
                    return "ROYAL";
                } else if (compare === "2345ACE" || compare === ref) {
                    return "STRAIGHT"
                } 
            };

            
            //Hand combinations
            function highestHand() {
                let ans = document.getElementById("highHand");
                if (isFlush() === true && isStraight() === "ROYAL") {
                    ans.innerHTML = ("ROYAL FLUSH");
                } else if (isStraight() === "STRAIGHT" && isFlush() === true){
                    ans.innerHTML = ("STRAIGHT FLUSH");
                } else if (facesInOrder[0] === facesInOrder[3] || facesInOrder[1] === facesInOrder[4]){
                    ans.innerHTML = ("FOUR OF A KIND");
                } else if (pair === 3 ){
                    ans.innerHTML = ("FULL HOUSE");
                } else if (isFlush() === true){
                    ans.innerHTML = ("FLUSH OF " + suits[1]);
                } else if (isStraight() === "STRAIGHT"){
                    ans.innerHTML = ("STRAIGHT");
                } else if (threeFaces == 1){
                    ans.innerHTML = ("THREE OF A KIND");
                } else if (pair === 2){
                    ans.innerHTML = ("TWO PAIR");
                } else if (pair === 1){
                    ans.innerHTML = ("PAIR");
                } else {
                    ans.innerHTML = ("HIGH CARD " + facesInOrder[facesInOrder.length - 1]);
                }
            }
            return highestHand();            
        })
})();