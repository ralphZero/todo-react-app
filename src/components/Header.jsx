import React, { useContext } from 'react';
import { Space, Avatar, Layout, Button } from 'antd';
import AddButton from './AddButton';
import { UserContext } from '../contexts/UserContext';

const Header = () => {
  const { user, logIn, logOut } = useContext(UserContext);

  return (
    <Layout.Header style={{ position: 'fixed', zIndex: 1, width: '100%' }} className="page-header">
      <div>Todo App</div>
      <Space size={10}>
        {
          user ? (
            <>
              <AddButton />
              <Button onClick={logOut} size="large" shape="round" type="text">{user.displayName}<Avatar style={{ marginLeft: 5, marginBottom: 2 }} size="small" src={user.photoURL} /></Button>
            </>
          ) : (
            <Button onClick={logIn} size="large" shape="round" type="text">Login</Button>
          )
        }
      </Space>
    </Layout.Header>
  );
}

export default Header;
