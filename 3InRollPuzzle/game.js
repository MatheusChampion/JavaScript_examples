(function(){
    //fetching 
    fetch(`https://threeinarowpuzzle.herokuapp.com/random`)
    .then (response => response.json())
    .then (json => {
        console.log(json)
        
        generateTable(json)
        
    })
    
    
    function generateTable(data) {
        const theDiv = document.querySelector('#theGame')
        //create tables
        const theTable = document.createElement('table')
        let checkList = []
         //Check button
         const checkButton = document.createElement("button")
         checkButton.innerHTML = `Check Puzzle`
         checkButton.className = 'Check'
         
        //   

         const size = data['rows'].length;
         
         for (let i = 0; i < size; i++) {
             //generate row
             const newRow = document.createElement('tr')
             
             //generate columns
             for (let j = 0; j < size; j++) {

                const newCell = document.createElement('td')
                newCell.id = `${i} - ${j}`

                //check part 
                if (data.rows[i][j].currentState === data.rows[i][j].correctState){
                    checkList.push(2)
                } else if (data.rows[i][j].currentState !== data.rows[i][j].correctState && data.rows[i][j].currentState !== 0){
                    checkList.push(1)
                } else {
                    checkList.push(0)
                }

                //class name / color
                if (data.rows[i][j].currentState == 0) {
                    newCell.className = 'gray'
                } else if (data.rows[i][j].currentState == 1) {
                    newCell.className = 'white'
                } else (
                    newCell.className = 'blue'
                    )

                //Identify column and row 
                newCell.setAttribute('data-row', i)
                newCell.setAttribute('data-column', j)
                
               
                //When click on the cell chnage color
                newCell.addEventListener('click', function(){
                    if (data.rows[i][j].canToggle === true){
                        console.log(data.rows[i][j])
                        switch (data.rows[i][j].currentState) {
                            case 0:
                                data.rows[i][j].currentState = 1;
                                newCell.className = 'white';
                                break;
                            case 1:
                                data.rows[i][j].currentState = 2;
                                newCell.className = 'blue';
                                break;
                            case 2:
                                data.rows[i][j].currentState = 0;
                                newCell.className = 'gray';
                                break;
                            }
                        }           
                })
                

                newRow.append(newCell)                
            }
            
            theTable.appendChild(newRow)
        }
        
        theDiv.appendChild(theTable)

        let display = document.createElement("p")
 
        checkButton.addEventListener('click', function(){
            let test = getCheckList(checkList);
            function getCheckList(list) {
                console.log(list)
                list.sort();
                if (list[0] === list[list.length] && list[0] === 2){
                    return "You did it!"
                } else if (list.indexOf(1)){
                    return "Something is wrong"
                } else {
                    return "So far so good"
                }
            }
            console.log(test)
            let test2 = test2.innerHTML(test)
            display.appendChild(test2)
        })
        document.body.appendChild(checkButton)
    }
})();