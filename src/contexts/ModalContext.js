import React, { createContext, useState } from 'react';

export const ModalContext = createContext();


const ModalContextProvider = (props) => {
    const [isVisible, setIsVisible] = useState(false);
    const [payload, setPayload] = useState(null);

    const toggleModal = () => setIsVisible(!isVisible);

    return (
        <ModalContext.Provider value={{isVisible, toggleModal, payload, setPayload}}>
            { props.children }
        </ModalContext.Provider>
    );
}

export default ModalContextProvider;
