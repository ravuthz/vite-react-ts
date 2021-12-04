/* eslint-disable react/display-name */
import { Switch, Table } from 'antd';
import React, { memo, useState } from 'react';
import { useTodoQuery } from '../../hooks';

const TodoTable: React.FC<any> = (props: any): any => {
  const { useUpdateTodo } = useTodoQuery();

  const columns = [
    {
      key: 'title',
      title: 'Todo',
      dataIndex: 'title',
      sorter: (a: any, b: any) => a.title.length - b.title.length,
      ellipsis: true,
    },
    {
      key: 'completed',
      title: 'Completed',
      dataIndex: 'completed',
      sorter: (a: any, b: any) => a.completed - b.completed,
      render: (value: any, row: any) => (
        <Switch
          checked={value === true}
          onChange={() => {
            toggleComplete(row);
          }}
        />
      ),
    },
  ];

  const toggleComplete = (data: any) => {
    useUpdateTodo.mutate({
      ...data,
      completed: !data.completed,
    });
  };

  const propsEvent = (eventName: string, record: any, index: number | undefined): any =>
    typeof props[eventName] === 'function' ? props[eventName](record, index) : undefined;

  const { onRowClick, onDoubleClick, onContextMenu, onMouseEnter, onMouseLeave, onSelectChange, ...rest } = props;

  const [selectedRowKeys, setSelectedRowKeys] = useState<any>([]);

  const onTableChange = (allSelectedRowKeys: any) => {
    setSelectedRowKeys(allSelectedRowKeys);
    if (typeof onSelectChange === 'function') {
      onSelectChange(allSelectedRowKeys);
    }
  };

  return (
    <Table
      rowKey="id"
      columns={columns}
      onRow={(record, rowIndex) => {
        return {
          // onClick: (event: any) => propsEvent('onRowClick', record, rowIndex),
          // onDoubleClick: (event: any) => propsEvent('onRowDoubleClick', record, rowIndex),
          // onContextMenu: (event: any) => propsEvent('onContextMenu', record, rowIndex),
          // onMouseEnter: (event: any) => propsEvent('onMouseEnter', record, rowIndex),
          // onMouseLeave: (event: any) => propsEvent('onMouseLeave', record, rowIndex),
          onDoubleClick: (event: any) =>
            typeof onDoubleClick === 'function' ? onDoubleClick(record, rowIndex) : undefined,
        };
      }}
      rowSelection={{
        selectedRowKeys,
        onChange: onTableChange,
      }}
      {...rest}
    />
  );
};

export default TodoTable;
