import React from 'react';
import { Space, Avatar, Layout } from 'antd';
import { UserOutlined } from '@ant-design/icons'
import AddButton from './AddButton';

const Header = () => {
    return (
      <Layout.Header  style={{ position: 'fixed', zIndex: 1, width: '100%' }} className="page-header">
        <div>Todo App</div>
        <Space size={10}>
            <AddButton />,
            <Avatar icon={<UserOutlined />} />
        </Space>
      </Layout.Header>
    );
}

export default Header;
