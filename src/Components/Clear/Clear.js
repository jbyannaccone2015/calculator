import React from 'react'
import './Clear.css'

const Cleared = (props) => (
    <div className="clear" onClick={props.handleClear}>
        {props.children}
    </div>
);

const Clear = ({handleClear}) => {
    return (
        <div className="row">
            <Cleared className="cleared" handleClear={handleClear}>Clear</Cleared>
        </div>
    )
}

export default Clear
