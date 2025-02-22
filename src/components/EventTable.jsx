import { Table } from "antd";
import React from "react";

export default function TableComponent({ data, columns, pagination, setPagination, loading }) {
  return (
    <Table
      columns={columns}
      dataSource={data}
      rowKey={(record) => record.id}
      loading={loading}
      pagination={{
        current: pagination.current,
        pageSize: pagination.pageSize,
        total: pagination.total,
        onChange: (page, pageSize) =>
          setPagination({ ...pagination, current: page, pageSize }),
      }}
    />
  );
};

