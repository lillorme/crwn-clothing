import React from 'react';
import './Input.css';

const Input = (props:any) => {

    const {label, handleChange, ...otherProps } = props;

    return(
        <div className="group">

            <input
                className="form-input"
                onChange = {handleChange}
                {...otherProps}  
            />
            
            {
                label ?
                    (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>)
                : null
            }
           
        </div> 
    )

}

export default Input;