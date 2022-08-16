import React from 'react';
import { Layout } from 'antd';

import AddButton from './components/AddButton';
import Header from './components/Header';

import './App.css';
import ModalContextProvider from './contexts/ModalContext';

const { Content, Footer } = Layout;

function App() {
  return (
    <Layout className='container'>
      <Header />
      <Content style={{ padding: '0 50px',}}>
        Main Content
      </Content>
      
      <ModalContextProvider>
        <Footer className="bg-warning">
          <AddButton />
        </Footer>
      </ModalContextProvider>
      
    </Layout>
  );
}

export default App;
