import React, {createContext, useState} from 'react';

export const RecoveryContext = createContext();
export const RecoveryProvider = ({children}) => {
    // const [page, setPage] = useState('verify');
    const [email, setEmail] = useState('');
    const [otp, setOTP] = useState('');

    const resetState = () => {
        setEmail('');
        setOTP('');
    };

    const contextValue = {
        email, 
        otp, 
        setEmail, 
        setOTP, 
        resetState
    };

    return (
        <RecoveryContext.Provider value = {contextValue}>
            {children}
        </RecoveryContext.Provider>
    );
}