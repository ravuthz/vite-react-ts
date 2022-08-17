import { Checkbox, Col, Form, Input, Modal, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useTodoQuery } from '../../hooks';

const { useForm } = Form;

const TodoForm: React.FC<any> = ({ dataSource }: any) => {
  const history = useHistory();
  const { id } = useParams<any>();
  const [form] = useForm();

  const [visible, setVisible] = useState(false);

  const { useCreateTodo, useUpdateTodo } = useTodoQuery();

  const label = id === 'new' ? 'Create' : 'Update';

  useEffect(() => {
    console.log('params: ', id);
    if (id) {
      form.setFieldsValue(dataSource);
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [id, dataSource]);

  const onOk = () => {
    form.submit();
  };

  const onCancel = () => {
    setVisible(false);
    history.goBack();
  };

  const onSuccess = () => {
    console.log('Saved success: ');
    setVisible(false);
    history.goBack();
  };

  const onFinish = (values: any) => {
    console.log('Success:', values);
    if (!id) {
      return false;
    }

    const data = {
      userId: 999,
      ...values,
    };

    if (id === 'new') {
      useCreateTodo.mutate(data, { onSuccess });
    } else {
      useUpdateTodo.mutate({ ...data, id }, { onSuccess });
    }
  };

  return (
    <>
      <Modal
        title="Todo Form"
        visible={visible}
        okText={label}
        onOk={onOk}
        onCancel={onCancel}
        destroyOnClose={true}
        wrapClassName="todo-form-modal"
      >
        <Form form={form} layout="inline" name="todo_form" onFinish={onFinish}>
          <Col span="18">
            <Form.Item name="title" rules={[{ required: true, message: 'Please input todo!' }]}>
              <Input style={{ width: '100%' }} placeholder="Enter your todo title" />
            </Form.Item>
          </Col>
          <Col span="4">
            <Form.Item name="completed" valuePropName="checked">
              <Checkbox>Completed</Checkbox>
            </Form.Item>
          </Col>
        </Form>
      </Modal>
    </>
  );
};

export default TodoForm;
