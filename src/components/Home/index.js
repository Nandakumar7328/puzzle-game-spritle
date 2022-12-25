import { Component } from "react";

import '../Header'
import Header from "../Header";
import './index.css'

const puzzle = [
    [10,3,6,4],
    [1,5,8,13],
    [2,0,7,15],
    [14,9,12,11]
]

const resultPuzzle = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,0]
]

class Home extends Component {
    state = {tempPuzzle:puzzle}

    onClickReset = () => {
        const shuffledArray = puzzle.sort((a, b) => 0.5 - Math.random());
        this.setState({tempPuzzle:shuffledArray})
        
    }

    onSetThePuzzle = (indexOfZeroColumn,indexOfZeroRow,resultK,resultL) => {
        if(indexOfZeroColumn !== null && indexOfZeroRow !== null){
        const {tempPuzzle} = this.state
        puzzle[indexOfZeroColumn][indexOfZeroRow] = tempPuzzle[resultK][resultL]
        puzzle[resultK][resultL] = 0
        this.setState({tempPuzzle:puzzle})
        }
     
    }

    onCheckZeroPlace = (resultK,resultL) => {
        const {tempPuzzle} = this.state 
        let indexOfZeroColumn = null 
        let indexOfZeroRow = null

        if (resultK === 0 ){
            if(resultL === 0){
                let down = resultK+1 
                let right = resultL+1
                if (tempPuzzle[down][resultL] === 0){
                    indexOfZeroColumn = down
                    indexOfZeroRow = resultL
                }
                if(tempPuzzle[resultK][right] === 0 ){
                    indexOfZeroColumn = resultK
                    indexOfZeroRow = right
                }
            } if (resultL === 3){
                let down = resultK+1 
                let left = resultL-1
                if (tempPuzzle[down][resultL] === 0){
                    indexOfZeroColumn = down
                    indexOfZeroRow = resultL
                }
                if(tempPuzzle[resultK][left] === 0 ){
                    indexOfZeroColumn = resultK
                    indexOfZeroRow = left
                }
            }else{
                let down = resultK+1 
                let right = resultL+1
                let left = resultL-1
                if (tempPuzzle[down][resultL] === 0){
                    indexOfZeroColumn = down
                    indexOfZeroRow = resultL
                }
                if (tempPuzzle[resultK][right] === 0){
                    indexOfZeroColumn = resultK
                    indexOfZeroRow = right
                }
                if (tempPuzzle[resultK][left] === 0){
                    indexOfZeroColumn = resultK
                    indexOfZeroRow = left
                }
            }
        }
        if(resultK === 3){
            if(resultL === 0){
                let top = resultK-1
                let right = resultL+1

                if(tempPuzzle[top][resultL] === 0){
                    indexOfZeroColumn = top
                    indexOfZeroRow = resultL
                }
                if(tempPuzzle[resultK][right] === 0){
                    indexOfZeroColumn = resultK
                    indexOfZeroRow = right
                }

            }if(resultL === 3){
                let top = resultK-1
                let left = resultL - 1

                if(tempPuzzle[top][resultL] === 0){
                    indexOfZeroColumn = top
                    indexOfZeroRow = resultL
                }if(tempPuzzle[resultK][left] === 0){
                    indexOfZeroColumn = resultK
                    indexOfZeroRow = left
                }
            }else{
                let top = resultK-1 
                let right = resultL+1
                let left = resultL-1

                if(tempPuzzle[top][resultL] === 0 ){
                    indexOfZeroColumn = top
                    indexOfZeroRow = resultL
                }if(tempPuzzle[resultK][right] === 0){
                    indexOfZeroColumn = resultK
                    indexOfZeroRow = right
                }if(tempPuzzle[resultK][left] === 0){
                    indexOfZeroColumn = resultK
                    indexOfZeroRow = left
                }
            }
        }if(resultK !== 0 && resultK !== 3){
            if(resultL === 0){
                let top = resultK-1 
                let down = resultK+1 
                let right = resultL+1 

                if(tempPuzzle[top][resultL]===0){
                    indexOfZeroColumn = top
                    indexOfZeroRow = resultL
                }if(tempPuzzle[down][resultL]===0){
                    indexOfZeroColumn = down
                    indexOfZeroRow = resultL
                }if(tempPuzzle[resultK][right]===0){
                    indexOfZeroColumn = resultK
                    indexOfZeroRow = right
                }
            }if(resultL === 3){
                let top = resultK-1 
                let down = resultK+1 
                let left = resultL-1

                if(tempPuzzle[top][resultL] === 0){
                    indexOfZeroColumn = top
                    indexOfZeroRow = resultL
                }if(tempPuzzle[down][resultL] === 0){
                    indexOfZeroColumn = down
                    indexOfZeroRow = resultL
                }if(tempPuzzle[resultK][left] === 0){
                    indexOfZeroColumn = resultK
                    indexOfZeroRow = left
                }
            }else{
                let top = resultK-1 
                let down = resultK+1 
                let right = resultL+1  
                let left = resultL -1 

                if(tempPuzzle[top][resultL] === 0){
                    indexOfZeroColumn = top
                    indexOfZeroRow = resultL
                }if(tempPuzzle[down][resultL] === 0){
                    indexOfZeroColumn = down
                    indexOfZeroRow = resultL
                }if(tempPuzzle[resultK][right] === 0){
                    indexOfZeroColumn = resultK
                    indexOfZeroRow = right
                }if(tempPuzzle[resultK][left] === 0){
                    indexOfZeroColumn = resultK
                    indexOfZeroRow = left
                }
            }
        }
        this.onSetThePuzzle(indexOfZeroColumn,indexOfZeroRow,resultK,resultL)
    }


    onChangeValue = event => {
        const {tempPuzzle} = this.state 
        const puzzleLength = tempPuzzle.length
        const valueOfBox = parseInt(event.target.id) 
        let resultK = 0 
        let resultL = 0 
        for(let k = 0 ; k <puzzleLength ; k++ ){
            for(let l = 0 ; l < puzzleLength ; l++){
              if (tempPuzzle[k][l] === valueOfBox){
                resultK = k 
                resultL = l
              }
            } 
          }
        this.onCheckZeroPlace(resultK,resultL)
       
          
    }

    getPuzzle = () => {
        console.log("")
        const {tempPuzzle} = this.state 
        console.log(tempPuzzle.length)
        const puzzleLength = tempPuzzle.length
        if(resultPuzzle.join() === tempPuzzle.join()){
            return <h1 className="won">You Won The Match!!</h1>
        }else{

        
        let Arry = []
       for(let i = 0 ; i <puzzleLength ; i++ ){
          for(let j =0 ; j < puzzleLength ; j++){
            if(tempPuzzle[i][j] === 0 ){
                Arry.push(
                    <div id={tempPuzzle[i][j]} onClick={this.onChangeValue} className="box-non"></div>
                )
            }else{
            Arry.push(
                <div id={tempPuzzle[i][j]} onClick={this.onChangeValue} className="box">{tempPuzzle[i][j]}</div>
            )
            }
          } 
        }
        return Arry
    }
    }
    render(){
        
        return(
            <div className="home-main-container">
              <Header/> 
            <div className="puzzel-main-container">
             <div className="sub-container-puzzel">
                {this.getPuzzle()}
             </div>
             <button className="btn-reset" onClick={this.onClickReset} type="button">Reset</button>
            </div>
            </div>
        )
    }
}

export default Home