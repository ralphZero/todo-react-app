import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons'
import { Button, Modal, Form, Input } from 'antd';

const AddCommentForm = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            <Button type="primary" shape="round" icon={<PlusOutlined />} size="large">
                NEW
            </Button>
            <Modal
                title="Add new item"
                visible={modalVisible}
                footer={null}
                okButtonProps={{
                    hidden: true,
                }}
                cancelButtonProps={{
                    hidden: true,
                }}>
                <Form layout="vertical">
                    <Form.Item label="To Do" name="todo">
                        <Input placeholder="Ex. Buy almond milk 🐮" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">Add</Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}

export default AddCommentForm;
