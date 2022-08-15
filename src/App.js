import React from 'react';
import { Layout, PageHeader, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons'

import AddCommentForm from './components/AddCommentForm';
import './App.css';

const { Content, Footer } = Layout;

function App() {
  return (
    <Layout className='container'>
        <PageHeader
          className="page-header"
          title="TO DO APP"
          subTitle="Yep! Another one"
          extra={[
            <Avatar icon={<UserOutlined />} />
          ]}
        />
      <Content style={{
        padding: '0 50px',
      }}>
        Main Content
      </Content>
      <Footer className="bg-warning">
        <AddCommentForm />
      </Footer>
    </Layout>
  );
}

export default App;
