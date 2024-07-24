import Breadcrumbs from "../../shared/Breadcrumbs";
import ProductTable from "./ProductTable";

const Dashboard = () => {
  return (
    <div className="py-6 lg:px-5">
      <div className=" px-5 flex items-center justify-between bg-white py-5">
        <h2 className="text-xl font-medium text-gray-800">All Products</h2>
        <Breadcrumbs />
      </div>

      <div className="py-5 px-5 rounded bg-white mt-5">
        {/* Products filtering */}

        <ProductTable />
        {/* product table  */}
        {/* Products table */}
      </div>
    </div>
  );
};

export default Dashboard;
