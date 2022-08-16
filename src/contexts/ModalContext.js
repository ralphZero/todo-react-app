import React, { createContext, useState } from 'react';

export const ModalContext = createContext();


const ModalContextProvider = (props) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleModal = () => setIsVisible(!isVisible);

    return (
        <ModalContext.Provider value={{isVisible, toggleModal}}>
            { props.children }
        </ModalContext.Provider>
    );
}

export default ModalContextProvider;
