import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../../../styles/custom.css";
import { Button } from "../../ui/button";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FieldValues } from "react-hook-form";

// Define a validation schema using yup
const schema = yup.object().shape({
  productName: yup.string().required("Product Name is required"),
  productImage: yup.string().required("Product Image is required"),
  description: yup.string().required("Description is required"),
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
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
      <div className="mb-4 flex gap-4">
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
            id="hoverImage"
            name="hoverImage"
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
      <div className="mb-8 flex gap-4">
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
