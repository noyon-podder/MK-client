import { useGetProductQuery } from "../../../redux/api/baseApi";

const Dashboard = () => {
  const { data } = useGetProductQuery(undefined);

  console.log(data);

  return (
    <div className="py-10 ">
      <div className="lg:px-10 px-5">
        <h2>All Products</h2>
      </div>
    </div>
  );
};

export default Dashboard;
