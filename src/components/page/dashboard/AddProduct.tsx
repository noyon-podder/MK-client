import Breadcrumbs from "../../shared/Breadcrumbs";
import AddProductForm from "./AddProductForm";

const AddProduct = () => {
  return (
    <div className="py-5 lg:px-5 lg:mt-5 ">
      <div className="flex items-center justify-between flex-col lg:flex-row bg-white px-5 py-3">
        <h2 className="text-2xl font-bold">Add Product</h2>

        <div>
          <Breadcrumbs />
        </div>
      </div>
      <div className="mt-10">
        <div className="px-5">
          <h2 className="text-2xl font-bold mb-4">Product Information</h2>
          <AddProductForm />
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
