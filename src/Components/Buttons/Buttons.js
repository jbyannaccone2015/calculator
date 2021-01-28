import React from 'react'
import './Buttons.css'

const isOperator = val => {
    return !isNaN(val) || val === "." || val === "=";
}


const Button = props => (
    <div className={`button-wrapper ${
        isOperator(props.children) ? null : "operator"
    }`}
    
    onClick = {() => props.handleClick(props.children)}
    >
        {props.children}
    </div>
)

const Tally = props => (
    <div className={`button-wrapper ${
        isOperator(props.children) ? null : "operator"
    }`}

    onClick = {() => props.handleEquals(props.children)}
>
    {props.children}
</div>
 )



function Buttons({handleClick, handleEquals}) {
    return (
        <div>
            <div className="row">
                <Button handleClick={handleClick}>1</Button>
                <Button handleClick={handleClick}>2</Button>
                <Button handleClick={handleClick}>3</Button>
                <Button handleClick={handleClick}>+</Button>
            </div>
            <div className="row">
                <Button handleClick={handleClick}>4</Button>
                <Button handleClick={handleClick}>5</Button>
                <Button handleClick={handleClick}>6</Button>
                <Button handleClick={handleClick}>X</Button>
            </div>
            <div className="row">
                <Button handleClick={handleClick}>7</Button>
                <Button handleClick={handleClick}>8</Button>
                <Button handleClick={handleClick}>9</Button>
                <Button handleClick={handleClick}>/</Button>
            </div>
            <div className="row">
                <Button handleClick={handleClick}>.</Button>
                <Button handleClick={handleClick}>0</Button>
                <Tally handleEquals={handleEquals}>=</Tally>
                <Button handleClick={handleClick}>-</Button>
            </div>
        </div>
    )
}

export default Buttons
