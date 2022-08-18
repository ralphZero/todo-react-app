import React from 'react';
import { Layout } from 'antd';

import Header from './components/Header';

import ModalContextProvider from './contexts/ModalContext';
import DataContextProvider from './contexts/DataContext';
import UserContextProvider from './contexts/UserContext';

import './App.css';
import TodoContainer from './components/TodoContainer';

const { Content } = Layout;

function App() {

  return (
    <UserContextProvider>
      <DataContextProvider>
        <Layout>
          <ModalContextProvider>
            <Header />
          </ModalContextProvider>
          <Content style={{ padding: '15px 50px', marginTop: 64, backgroundColor: '#ececec', }}>
            <TodoContainer />
          </Content>
        </Layout>
      </DataContextProvider>
    </UserContextProvider>
  );
}

export default App;
