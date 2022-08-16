import React from 'react';
import { Layout, Row, Col } from 'antd';

import Header from './components/Header';

import ModalContextProvider from './contexts/ModalContext';
import TodoCard from './components/TodoCard';

import './App.css';

const { Content } = Layout;


function App() {
  return (
    <Layout>
      <ModalContextProvider>
        <Header />
      </ModalContextProvider>
      <Content style={{ padding: '15px 50px', marginTop: 64, backgroundColor: '#ececec', }}>
        <div className='todo-container'>
          <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
            {Array(15).fill().map((elem) => (
              <Col key={elem} className="gutter-row" span={6}>
                <TodoCard />
              </Col>
            ))}
          </Row>
        </div>
      </Content>


    </Layout>
  );
}

export default App;
