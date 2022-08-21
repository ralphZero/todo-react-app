import React, { useEffect, useState, createContext, useContext } from 'react';
import { UserContext } from './UserContext';

export const DataContext = createContext();

const DataContextProvider = (props) => {

    const [dataList, setDataList] = useState();

    const { user } = useContext(UserContext);

    useEffect(() => {
        if(user) {
            fetch('https://us-central1-todo-app-rsp.cloudfunctions.net/todo?u='+user.id)
            .then(res => res.json())
            .then(data => setDataList(data))
            .catch(console.error)
        }
    }, [user])

    const addToList = (data) => {
        const tempList = [...dataList];
        tempList.unshift(data);
        setDataList(tempList);
    }

    return (
        <DataContext.Provider value={{ dataList, addToList }}>
            { props.children }
        </DataContext.Provider>
    )
}

export default DataContextProvider;
