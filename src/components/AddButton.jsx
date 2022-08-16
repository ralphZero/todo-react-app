import React, { useState, useContext } from 'react';
import { PlusOutlined } from '@ant-design/icons'
import { Button, Modal, Form, Input } from 'antd';

import { ModalContext } from '../contexts/ModalContext';


const AddCommentForm = () => {

    const { isVisible, toggleModal } = useContext(ModalContext);

    return (
        <>
            <Button onClick={toggleModal} type="primary" shape="round" icon={<PlusOutlined />} size="large">
                NEW
            </Button>
            <Modal
                title="Add new item"
                visible={isVisible}
                footer={null}
                onCancel={toggleModal}
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