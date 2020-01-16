import React from 'react';
import { SpinnerOverlay, SpinnerContainer} from './with-spinner.styles';

const withSpinner = (WrappedComponent:any) => {

   const Spinner = (props:any) => {
       
    const { isloading } = props;


            return isloading ? (
                <SpinnerOverlay>
                    <SpinnerContainer />
                </SpinnerOverlay>
                ):(
                <WrappedComponent {...props}/>
            );

        };

    return Spinner;

};

export default withSpinner;