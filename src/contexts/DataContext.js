import React, { useEffect, useState, createContext } from 'react';

export const DataContext = createContext();

const DataContextProvider = (props) => {

    const [dataList, setDataList] = useState();

    useEffect(() => {
        fetch('https://us-central1-todo-app-rsp.cloudfunctions.net/todo')
        .then(res => res.json())
        .then(data => setDataList(data))
        .catch(console.error)
    }, [])

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
