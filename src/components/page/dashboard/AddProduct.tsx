import Breadcrumbs from "../../shared/Breadcrumbs";
import AddProductForm from "./AddProductForm";

const AddProduct = () => {
  return (
    <div className="py-5 px-5 mt-5 " style={{ height: "calc(100vh - 90px)" }}>
      <div className="flex items-center justify-between bg-white px-5 py-3">
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
