/* eslint-disable react/display-name */
import { Button, Modal, PageHeader } from 'antd';
import { useHistory, useParams } from 'react-router-dom';
import React, { useRef, useState } from 'react';

import { useTodoQuery } from '../../hooks';
import TodoForm from './TodoForm';
import TodoTable from './TodoTable';

import {
  PlusOutlined,
  DeleteOutlined,
  ReloadOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
  ExclamationCircleOutlined,
  ProfileOutlined,
} from '@ant-design/icons';

const Todo: React.FC = () => {
  const history = useHistory();

  const params = useParams<any>();

  const formRef = useRef(null);

  const [ids, setIds] = useState<any>([]);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const { useDeleteTodo, useFetchTodos, useFetchTodo, invalidateTodo } = useTodoQuery();

  const { data: todo, isLoading: todoLoading } = useFetchTodo(params?.id);

  const { data: todos, isLoading: todosLoading } = useFetchTodos({ page: 1, size: 200 });

  const onDeleteClick = () => {
    if (ids && ids.length > 0) {
      Modal.confirm({
        icon: <ExclamationCircleOutlined />,
        content: `Are you sure want to delete the selected ( ${ids.join(', ')} ) todos?`,
        okText: "Yes, I'm sure",
        cancelText: "No, I'll do it next time",
        onOk() {
          // useDeleteTodo.mutate(ids.join(','));
          ids.map((id: number) => useDeleteTodo.mutate(id));
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    }
  };

  const onRefreshClick = async () => {
    await invalidateTodo();
  };

  const onFullScreenClick = () => {
    setIsFullScreen((val) => !val);
  };

  return (
    <div className={'default-screen' + (isFullScreen ? ' full' : '')}>
      <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        title="Todos"
        extra={[
          <Button
            key="btnAdd"
            size="large"
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => history.push('/todos/new')}
            title="Add Todo"
          />,
          <Button
            key="btnBack"
            size="large"
            icon={<ProfileOutlined />}
            onClick={() => history.push('/todos')}
            title="Todo List"
          />,
          <Button
            key="btnRefresh"
            size="large"
            icon={<ReloadOutlined />}
            onClick={onRefreshClick}
            title="Refresh Todo"
          />,
          <Button
            key="fullscreen"
            size="large"
            icon={<FullscreenOutlined />}
            onClick={onFullScreenClick}
            title="Refresh Todo"
          />,
          <Button
            key="btnDelete"
            size="large"
            danger
            icon={<DeleteOutlined />}
            onClick={onDeleteClick}
            title="Delete Todo"
            disabled={ids <= 0}
          />,
        ]}
      ></PageHeader>

      <TodoForm loading={todoLoading} dataSource={todo} />

      <TodoTable
        loading={todosLoading}
        dataSource={todos}
        onDoubleClick={(row: any) => history.push(`/todos/${row.id}`)}
        onSelectChange={(selected: any) => setIds(selected)}
      />
    </div>
  );
};

export default Todo;
