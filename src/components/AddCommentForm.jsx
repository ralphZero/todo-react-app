import React from 'react';
import { PlusOutlined } from '@ant-design/icons'
import { Button } from 'antd'; 

const AddCommentForm = () => {
    return (
        <>
            <Button type="primary" shape="round" icon={<PlusOutlined />} size="large">
                NEW
            </Button>
        </>
    );
}

export default AddCommentForm;
