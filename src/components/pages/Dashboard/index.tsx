import React, { useEffect } from "react";

import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { ICreatedTransaction } from "interfaces/Expense";
import { useDispatch, useSelector } from "react-redux";
import { getdata } from "services/transaction";
import { RootState } from "store";
import { savedTransations } from "store/reducers/transaction.reducer";

const columns: ColumnsType<ICreatedTransaction> = [
  {
    title: "Item (description)",
    dataIndex: "description",
    key: "description",
    render: text => <a>{text}</a>
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount"
  },

  {
    title: "Type",
    key: "tags",
    dataIndex: "tags",
    render: (_, { type }) => {
      let color = type.code === "INCOME" ? "green" : "volcano";

      return (
        <Tag color={color} key={type.code}>
          {type.name}
        </Tag>
      );
    }
  },
  {
    title: "Date",
    dataIndex: "createdDate",
    key: "createdDate",
    render(value, record, index) {
      return <Space>{new Date(value).toDateString()}</Space>;
    }
  },
  {
    title: "Actions",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    )
  }
];

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const transactions = useSelector(
    (state: RootState) => state.transaction.transactions
  );
  const { userInfo, token } = useSelector((state: RootState) => state.auth);
  useEffect(() => {
    getdata(
      userInfo?.id!,
      1,
      new Date().getMonth() + 1,
      new Date().getFullYear(),
      token!
    ).then(data => {
      dispatch(savedTransations(data));
    });
  }, []);

  return <Table columns={columns} dataSource={transactions} />;
};

export default Dashboard;
