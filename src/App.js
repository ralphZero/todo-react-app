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
        <ModalContextProvider>
          <Layout>
            <Header />
            <Content style={{ padding: '15px 50px', marginTop: 64, backgroundColor: '#ececec', }}>
              <TodoContainer />
            </Content>
          </Layout>
        </ModalContextProvider>
      </DataContextProvider>
    </UserContextProvider>
  );
}

export default App;
