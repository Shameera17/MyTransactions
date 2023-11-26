import { Spin } from "antd";

const Loading: React.FC = () => {
  return (
    <div className=" h-screen w-screen flex justify-center align-middle content-center">
      <Spin tip="Loading" size="large">
        <div className="content" />
      </Spin>
    </div>
  );
};
export default Loading;
