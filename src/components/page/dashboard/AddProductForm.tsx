import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../../../styles/custom.css";
import { Button } from "../../ui/button";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FieldValues } from "react-hook-form";
import { useCreateProductMutation } from "../../../redux/featured/product/productApi";
import { toast } from "sonner";
import { useState } from "react";

// Define a validation schema using yup
const schema = yup.object().shape({
  productName: yup.string().required("Product Name is required"),
  productImage: yup
    .string()
    .url("Invalid URL format")
    .required("Product Image is required"),
  description: yup.string().required("Description is required"),
  quantity: yup.number().required("Quantity Image is required"),
  brand: yup.string().required("Brand is required"),
  hoverImage: yup.string().url("Invalid URL format"),
  rating: yup
    .number()
    .required("Rating is required")
    .max(5, "Rating must be 5 or less"),
  price: yup.number().required("Price is required"),
});

const AddProductForm = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [createProduct] = useCreateProductMutation();
  const [error, setError] = useState("");

  const onSubmit = (data: FieldValues) => {
    const productData = {
      name: data.productName,
      image: data.productImage,
      description: data.description,
      hoverImage: data.hoverImage,
      rating: data.rating,
      price: data.price,
      quantity: data.quantity,
      brand: data.brand,
    };

    setError("");
    createProduct(productData)
      .unwrap()
      .then((response) => {
        if (response.statusCode === 201) {
          toast.success("Product created successfully");
          reset({
            productName: "",
            productImage: "",
            description: "",
            hoverImage: "",
            rating: 0,
            price: 0,
            quantity: 0,
            brand: "",
          });
        }
      })
      .catch((error) => {
        toast.error("Something went wrong");
        setError(error);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {error && (
        <p className="text-red-500 mb-4 text-base text-center w-full">
          {error}
        </p>
      )}
      <div className="mb-4">
        <label
          htmlFor="productName"
          className={`flex gap-[2px] text-sm font-medium text-gray-700`}
        >
          Name <span className="text-red-600 text-xl -mt-1">*</span>
        </label>
        <input
          type="text"
          id="productName"
          {...register("productName")}
          placeholder="Enter product name"
          className={`form-control mt-1 p-3 border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor bg-lightColor hover:border-gray-400`}
        />
        {errors.productName && (
          <p className="text-red-500 text-sm mt-1">
            {errors.productName.message}
          </p>
        )}
      </div>
      <div className="mb-4 flex gap-4  md:flex-row flex-col">
        <div className="flex-1">
          <label
            htmlFor="productImage"
            className={`flex gap-[2px] text-sm font-medium text-gray-700`}
          >
            Product Image <span className="text-red-600 text-xl -mt-1">*</span>
          </label>
          <input
            type="text"
            id="productImage"
            {...register("productImage")}
            placeholder="exp: https://image.com"
            className={`form-control mt-1 p-3 border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor bg-lightColor hover:border-gray-400`}
          />
          {errors.productImage && (
            <p className="text-red-500 text-sm mt-1">
              {errors.productImage.message}
            </p>
          )}
        </div>
        <div className="flex-1">
          <label className={`block text-sm font-medium text-gray-700 mb-2`}>
            Product Hover Image
          </label>
          <input
            type="text"
            {...register("hoverImage")}
            placeholder="exp: http://image.com"
            className={`form-control mt-1 p-3 border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor bg-lightColor hover:border-gray-400`}
          />
        </div>
      </div>
      <div className="mb-4">
        <label
          htmlFor="description"
          className={`flex gap-[2px] text-sm font-medium text-gray-700`}
        >
          Product Description{" "}
          <span className="text-red-600 text-xl -mt-1">*</span>
        </label>
        <Controller
          name="description"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <ReactQuill
              value={field.value}
              onChange={field.onChange}
              theme="snow"
              className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md`}
            />
          )}
        />
        {errors.description && (
          <p className="text-red-500 text-sm mt-1">
            {errors.description.message}
          </p>
        )}
      </div>
      <div className="mb-4 flex gap-4  md:flex-row flex-col">
        <div className="flex-1">
          <label
            htmlFor="brand"
            className={`flex gap-[2px] text-sm font-medium text-gray-700`}
          >
            Brand <span className="text-red-600 text-xl -mt-1">*</span>
          </label>
          <input
            type="text"
            id="brand"
            {...register("brand")}
            placeholder="Your Product Brand"
            className={`form-control mt-1 p-3 border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor bg-lightColor hover:border-gray-400`}
          />
          {errors.brand && (
            <p className="text-red-500 text-sm mt-1">{errors.brand.message}</p>
          )}
        </div>
        <div className="flex-1">
          <label
            htmlFor="quantity"
            className={`flex gap-[2px] text-sm font-medium text-gray-700`}
          >
            Quantity <span className="text-red-600 text-xl -mt-1">*</span>
          </label>
          <input
            type="number"
            id="quantity"
            {...register("quantity")}
            placeholder="Total quantity your product"
            className={`form-control mt-1 p-3 border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor bg-lightColor hover:border-gray-400`}
          />
          {errors.quantity && (
            <p className="text-red-500 text-sm mt-1">
              {errors.quantity.message}
            </p>
          )}
        </div>
      </div>
      <div className="mb-4 flex gap-4  md:flex-row flex-col">
        <div className="flex-1">
          <label
            htmlFor="price"
            className={`flex gap-[2px] text-sm font-medium text-gray-700`}
          >
            Price <span className="text-red-600 text-xl -mt-1">*</span>
          </label>
          <input
            type="number"
            id="price"
            {...register("price")}
            placeholder="Product Price"
            className={`form-control mt-1 p-3 border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor bg-lightColor hover:border-gray-400`}
          />
          {errors.price && (
            <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
          )}
        </div>
        <div className="flex-1">
          <label
            htmlFor="rating"
            className={`flex gap-[2px] text-sm font-medium text-gray-700`}
          >
            Rating <span className="text-red-600 text-xl -mt-1">*</span>
          </label>
          <input
            type="number"
            id="rating"
            {...register("rating")}
            placeholder="exp: 3.5"
            className={`form-control mt-1 p-3 border block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-primaryColor bg-lightColor hover:border-gray-400`}
          />
          {errors.rating && (
            <p className="text-red-500 text-sm mt-1">{errors.rating.message}</p>
          )}
        </div>
      </div>
      <div className="flex">
        <Button size="xl" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default AddProductForm;
