import { useEffect, useState } from "react";

import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import dayjs from "dayjs";
import { ICreatedTransaction, IStat } from "interfaces/Expense";
import { useDispatch, useSelector } from "react-redux";
import { getStatdata, getdata, remove } from "services/transaction";
import { RootState } from "store";
import {
  editTransaction,
  savedTransations,
  refresh as setRefresh
} from "store/reducers/transaction.reducer";

import { showNotification } from "components/atoms";
import StatBox from "components/molecules/StatBox";

import "./style.css";

const Dashboard = () => {
  const dispatch = useDispatch();

  const { transactions, filterCriteria, refresh } = useSelector(
    (state: RootState) => state.transaction
  );

  const { userInfo, token } = useSelector((state: RootState) => state.auth);
  const [loading, setloading] = useState(false);
  const [stats, setStats] = useState<IStat>();

  useEffect(() => {
    setloading(true);
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
        setStats({ RemainingBalance: data?.RemainingBalance, ...data.stats });
      })
      .catch(error => {
        showNotification(
          "error",
          "Error",
          error?.response?.data || "Please refresh page!"
        );
      });
    setloading(false);
  }, [filterCriteria, userInfo?.id, refresh]);

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
          <a onClick={() => dispatch(editTransaction(record))}>Edit</a>
          <a
            onClick={async () =>
              await remove(record.transactionId, token!)
                .then(result => {
                  showNotification(
                    "warning",
                    "Success",
                    result || "Record removed successfully!"
                  );
                  dispatch(setRefresh());
                })
                .catch(error => {
                  showNotification(
                    "error",
                    "Error",
                    error?.response?.data || "Please refresh page!"
                  );
                })
            }
          >
            Delete
          </a>
        </Space>
      )
    }
  ];
  return (
    <div className="container">
      <div className="flex gap-3.5 fixed-element">
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
          type={Number(stats?.RemainingBalance!) > 0 ? "bal" : "expense"}
          title={"Balance Total"}
          amount={Number(stats?.RemainingBalance!) || 0}
          status={
            !stats?.totalExpenses! && !stats?.totalExpenses!
              ? "0 balance"
              : stats?.RemainingBalance! < 0
              ? "In debt"
              : "All good"
          }
        />
      </div>
      <div className="scrollable-element w-full">
        <Table
          loading={loading}
          rowKey={record => record.transactionId}
          columns={columns}
          dataSource={transactions}
        />
      </div>
    </div>
  );
};

export default Dashboard;
