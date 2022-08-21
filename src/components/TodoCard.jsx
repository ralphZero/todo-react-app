import React, { useContext } from 'react';
import { Card, Tooltip, Button, Space } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

import { ModalContext } from '../contexts/ModalContext';
import { DataContext } from '../contexts/DataContext';

const TodoCard = ({ todo }) => {
    const { setPayload, toggleModal } = useContext(ModalContext);
    const { deleteAtPostion } = useContext(DataContext);

    const handleEditClick = () => {
        setPayload(todo);
        toggleModal();
    }

    const handleDeletion = () => {
        fetch('https://us-central1-todo-app-rsp.cloudfunctions.net/todo/'+todo.id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(res => res.json())
        .then(result => {
            deleteAtPostion(todo);
        }).catch(console.error)
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
                        <Button onClick={handleDeletion} danger shape="circle" icon={<DeleteOutlined />} />
                    </Tooltip>
                </Space>
            )}
        >
            <p>{todo.description}</p>
        </Card>
    );
}

export default TodoCard;
