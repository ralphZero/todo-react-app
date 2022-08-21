import React, { useContext, useState, useEffect } from 'react';
import { PlusOutlined } from '@ant-design/icons'
import { Button, Modal, Form, Input } from 'antd';

import { ModalContext } from '../contexts/ModalContext';
import { DataContext } from '../contexts/DataContext';


const AddCommentForm = () => {
    const [form] = Form.useForm();
    const { isVisible, toggleModal, payload, setPayload } = useContext(ModalContext);
    const [ isBusy, setBusy ] = useState(false);

    const { addToList, addToListAtPositon } = useContext(DataContext);

    useEffect(() => {
        if(payload) {
            form.setFieldsValue({
                title: payload.title,
                description: payload.description
            })
        } else {
            form.setFieldsValue({
                title: '',
                description: ''
            })
        }
    }, [payload, form]);

    const openModal = () => {
        setPayload(null);
        toggleModal();
    }

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

    const updateData = (data) => {
        setBusy(true);

        fetch('https://us-central1-todo-app-rsp.cloudfunctions.net/todo/'+payload.id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(doc => {
            addToListAtPositon(doc);
            toggleModal();
            setBusy(false);
        }).catch((err) => {
            console.error(err);
            setBusy(false);
        })
    }

    const onFinish = (values) => payload ? updateData(values) : saveToFirestore(values);

    const onFinishFailed = (errorInfo) => {
        setBusy(true)
        console.log('Failed' + errorInfo);
        setTimeout(() => {
            setBusy(false);
        }, 1000);
    }

    return (
        <>
            <Button onClick={openModal} type="primary" shape="round" icon={<PlusOutlined />} size="large">
                Add Item
            </Button>
            <Modal
                title={payload ? 'Modify item' : 'Add new item'}
                visible={isVisible}
                footer={null}
                onCancel={toggleModal}
                confirmLoading={true}
                okButtonProps={{hidden: true}}
                cancelButtonProps={{hidden: true}}>
                <Form form={form} layout="vertical" onFinish={onFinish}
                    onFinishFailed={onFinishFailed}>
                    <Form.Item label="Title" name="title" rules={[{ required: true, message: 'Please add a title' }]}>
                        <Input placeholder="Ex. Buy almond milk 🐮" />
                    </Form.Item>
                    <Form.Item label="Description" name="description">
                        <Input placeholder="Ex. Do not get Nestle, try Silk" />
                    </Form.Item>
                    <Form.Item>
                        <Button loading={isBusy} type="primary" htmlType="submit">{payload ? 'Modify' : 'Add'}</Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}

export default AddCommentForm;
