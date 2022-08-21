import React, { useEffect, useState, createContext, useContext } from 'react';
import { UserContext } from './UserContext';

export const DataContext = createContext();

const DataContextProvider = (props) => {

    const [dataList, setDataList] = useState();

    const { user } = useContext(UserContext);
    
    useEffect(() => {
        if(user) {
            fetch('https://us-central1-todo-app-rsp.cloudfunctions.net/todo/'+user.uid)
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

    const addToListAtPositon = (data) => {
        const tempList = [...dataList];
        const index = tempList.findIndex((todo) => todo.id === data.id);
        tempList.splice(index, 1, data)
        setDataList(tempList);
    }

    const deleteAtPostion = (data) => {
        const tempList = [...dataList];
        const index = tempList.findIndex((todo) => todo.id === data.id);
        tempList.splice(index, 1);
        setDataList(tempList);
    }

    return (
        <DataContext.Provider value={{ dataList, addToList, addToListAtPositon, deleteAtPostion }}>
            { props.children }
        </DataContext.Provider>
    )
}

export default DataContextProvider;
