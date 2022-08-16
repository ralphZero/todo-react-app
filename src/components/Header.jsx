import React from 'react';
import { PageHeader, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons'

const Header = () => {
    return (
        <PageHeader
          className="page-header"
          title="TO DO APP"
          subTitle="Yep! Another one"
          extra={[
            <Avatar icon={<UserOutlined />} />
          ]}
        />
    );
}

export default Header;
