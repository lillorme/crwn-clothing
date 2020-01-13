import React from 'react';
import {
    GroupContainer,
    FormInputContainer,
    FormInputLabel
  } from './form-input.styles';

const Input = (props:any) => {

    const {label, handleChange, ...otherProps } = props;

    return(
        <GroupContainer className="group">

            <FormInputContainer
                className="form-input"
                onChange = {handleChange}
                {...otherProps}  
            />
            
            {
                label ?
                    (<FormInputLabel className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</FormInputLabel>)
                : null
            }
           
        </GroupContainer> 
    )

}

export default Input;