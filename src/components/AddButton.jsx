import React, { useContext, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons'
import { Button, Modal, Form, Input } from 'antd';

import { ModalContext } from '../contexts/ModalContext';
import { DataContext } from '../contexts/DataContext';


const AddCommentForm = () => {

    const { isVisible, toggleModal } = useContext(ModalContext);
    const [ isBusy, setBusy ] = useState(false);

    const { addToList } = useContext(DataContext);

    const saveToFirestore = (data) => {
        setBusy(true); // showing loading animation

        fetch('https://us-central1-todo-app-rsp.cloudfunctions.net/todo', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(doc => {
            addToList(doc);
            toggleModal();
            setBusy(false);
        }).catch((err) => {
            console.error(err);
            setBusy(false);
        })
    }

    const onFinish = (values) => saveToFirestore(values);

    const onFinishFailed = (errorInfo) => {
        setBusy(true)
        console.log('Failed' + errorInfo);
        setTimeout(() => {
            setBusy(false);
        }, 1000);
    }

    return (
        <>
            <Button onClick={toggleModal} type="primary" shape="round" icon={<PlusOutlined />} size="large">
                Add Item
            </Button>
            <Modal
                title="Add new item"
                visible={isVisible}
                footer={null}
                onCancel={toggleModal}
                confirmLoading={true}
                okButtonProps={{hidden: true}}
                cancelButtonProps={{hidden: true}}>
                <Form layout="vertical" onFinish={onFinish}
                    onFinishFailed={onFinishFailed}>
                    <Form.Item label="Title" name="title" rules={[{ required: true, message: 'Please add a title' }]}>
                        <Input placeholder="Ex. Buy almond milk 🐮" />
                    </Form.Item>
                    <Form.Item label="Description" name="description">
                        <Input placeholder="Ex. Do not get Nestle, try Silk" />
                    </Form.Item>
                    <Form.Item>
                        <Button loading={isBusy} type="primary" htmlType="submit">Add</Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}

export default AddCommentForm;
