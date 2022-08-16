import React, { useContext, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons'
import { Button, Modal, Form, Input } from 'antd';

import { ModalContext } from '../contexts/ModalContext';


const AddCommentForm = () => {

    const { isVisible, toggleModal } = useContext(ModalContext);
    const [ isBusy, setBusy ] = useState(false);

    const onFinish = (values) => {
        setBusy(true);
        console.log('Success', values);
        setTimeout(() => {
            toggleModal();
            setBusy(false);
        }, 2000);
        
    }

    const onFinishFailed = (errorInfo) => {
        setBusy(true)
        console.log('Failed' + errorInfo);
        setTimeout(() => {
            setBusy(false);
        }, 2000);
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
