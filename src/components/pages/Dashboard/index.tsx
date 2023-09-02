import React, { useEffect, useState } from "react";

import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import dayjs from "dayjs";
import { ICreatedTransaction, IStat } from "interfaces/Expense";
import { useDispatch, useSelector } from "react-redux";
import { getStatdata, getdata } from "services/transaction";
import { RootState } from "store";
import { savedTransations } from "store/reducers/transaction.reducer";

import { showNotification } from "components/atoms";
import StatBox from "components/molecules/StatBox";

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();

  const { transactions, filterCriteria, refresh } = useSelector(
    (state: RootState) => state.transaction
  );

  const { userInfo, token } = useSelector((state: RootState) => state.auth);

  const [stats, setStats] = useState<IStat>();

  useEffect(() => {
    getdata(
      userInfo?.id!,
      filterCriteria.status,
      filterCriteria.month || new Date().getMonth() + 1,
      filterCriteria.year || new Date().getFullYear(),
      token!
    )
      .then(data => {
        dispatch(savedTransations(data));
      })
      .catch(error => {
        showNotification(
          "error",
          "Error",
          error?.response?.data || "Please refresh page!"
        );
      });
    getStatdata(
      userInfo?.id!,
      filterCriteria.month || new Date().getMonth() + 1,
      filterCriteria.year || new Date().getFullYear(),
      token!
    )
      .then(data => {
        setStats(data);
      })
      .catch(error => {
        showNotification(
          "error",
          "Error",
          error?.response?.data || "Please refresh page!"
        );
      });
  }, [filterCriteria, userInfo?.id, refresh]);

  return (
    <>
      <div className="flex gap-3.5">
        <StatBox
          type={"income"}
          title={"All income"}
          amount={stats?.totalIncome || 0}
          count={stats?.incomeCount || 0}
        />
        <StatBox
          type={"expense"}
          title={"All Expense"}
          amount={stats?.totalExpenses || 0}
          count={stats?.expenseCount || 0}
        />
        <StatBox
          type={"carried"}
          title={`${dayjs()
            .month(filterCriteria.month - 2)
            .format("MMMM")} (Carried)`}
          amount={stats?.previousIncomes || 0}
          count={stats?.previousIncomeCount || 0}
        />
        <StatBox
          type={"bal"}
          title={"Balance Total"}
          amount={
            stats?.totalIncome && stats?.totalExpenses
              ? Number(
                  Number(stats?.totalIncome! - stats?.totalExpenses!).toFixed(2)
                )
              : 0
          }
          count={0}
        />
      </div>
      <Table columns={columns} dataSource={transactions} />
    </>
  );
};

export default Dashboard;

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
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    )
  }
];
