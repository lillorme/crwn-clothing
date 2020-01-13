import React from 'react';
import { SpinnerOverlay, SpinnerContainer} from './with-spinner.styles';

const withSpinner = (WrappedComponent:any) => {

    const {isLoading, ...otherProps} = WrappedComponent;

    return(
        isLoading ? 
        <SpinnerOverlay>
            <SpinnerContainer>

            </SpinnerContainer>
        </SpinnerOverlay>
        :
        <WrappedComponent {...otherProps}/>
    )
}

export default withSpinner;