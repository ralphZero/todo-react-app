import React from 'react';
import { Card } from 'antd';

const TodoCard = ({ todo }) => {
    return (
        <Card
            title={todo.title}
            bordered={false}
            style={{
                width: 300,
            }}
        >
            <p>{todo.description}</p>
        </Card>
    );
}

export default TodoCard;
