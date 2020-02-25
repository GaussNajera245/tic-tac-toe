import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) { //Now is a function component
    //CHECK THE ARROW FUNCTION CON PROPS ??????????????????
    return (
        <button className="square"  onClick={ ()=> {props.onClick()} }  > 
            {props.value}
        </button>
    )
}

class Board extends React.Component{
    renderSquare(i){
        return (
            <Square 
                value={this.props.squares[i]} 
                onClick = { () => {  this.props.onClick(i);  }}
            />
        );
    }

    render(){
        return(
            <div>
                <div className= "board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className= "board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className= "board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}


class Game extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            history:[{ 
                squares: Array(9).fill(null) 
            }],
            xNext: true,
            stepNumber:0
        };
    }

    handleClick(i){
        const history = this.state.history.slice(0, this.state.stepNumber + 1 );
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if( calculateWinner(squares) || squares[i] ){
            return;    // if theres something, return;  pero esto es del diablo :=0
        }
        squares[i] = this.state.xNext? 'X': 'O' ;
        this.setState({ 
            history: history.concat([{
                squares: squares,
            }]),
            xNext: !this.state.xNext,
            stepNumber: history.length 
        });
    }

    jumpTo(step){
        this.setState({
            stepNumber: step,
            // xNext: (step % 2) === 0
        })
        
    }

    render(){
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);
        
        let status;

        winner ? 
            status = `Winner is ${winner}`:
            status = `Next player: ${this.state.xNext? 'X': 'O'}`;

        const move = history.map( 
            (step, move) => {
                const desc = move ?
                    `Go to move # ${move}`:
                    "Go to game start";
                return (
                    <li key={move}>
                        <button onClick={ () => this.jumpTo(move)}> {desc}</button>
                    </li>
                )
            }
        );


        return (
            <div className="game">
                <div className="game-board">
                    <Board   
                        squares={current.squares} 
                        onClick = {(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{move}</ol>
                </div>
            </div>
        );
    }
}

function calculateWinner(squares){
    let r = null ;
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
    ];

    lines.forEach( (element) => {
        const [a,b,c] = element;
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] ) {
            r = squares[a];
        }
    })

    return r
}


ReactDOM.render(
    <Game />,
    document.getElementById('root')
);