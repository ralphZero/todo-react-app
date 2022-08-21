import React, { useContext } from 'react';
import { Card, Tooltip, Button, Space } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

import { ModalContext } from '../contexts/ModalContext';

const TodoCard = ({ todo }) => {
    const { setPayload, toggleModal } = useContext(ModalContext);

    const handleEditClick = () => {
        setPayload(todo);
        toggleModal();
    }

    return (
        <Card
            title={todo.title}
            bordered={false}
            style={{
                width: 300,
            }}
            extra={(
                <Space>
                    <Tooltip title="Edit">
                        <Button onClick={handleEditClick} shape="circle" icon={<EditOutlined />} />
                    </Tooltip>
                    <Tooltip title="Delete">
                        <Button danger shape="circle" icon={<DeleteOutlined />} />
                    </Tooltip>
                </Space>
            )}
        >
            <p>{todo.description}</p>
        </Card>
    );
}

export default TodoCard;
