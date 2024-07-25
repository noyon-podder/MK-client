import { AiFillEdit } from "react-icons/ai";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import { Controller, FieldValues, useForm } from "react-hook-form";
import React from "react";
import ReactQuill from "react-quill";
import { Button } from "../../ui/button";
import { TProduct } from "../../../types/common";
import { useUpdateProductMutation } from "../../../redux/featured/product/productApi";
import { toast } from "sonner";

type TServerResponse = {
  success: boolean;
  message: string;
  data: TProduct;
};

const EditModal: React.FC<{ item: TProduct }> = ({ item }) => {
  const { register, handleSubmit, control } = useForm();

  const [updateProduct] = useUpdateProductMutation();

  const handleEditModalSubmit = async (data: FieldValues) => {
    const updateData = {
      productId: item._id,
      productUpdateData: {
        name: data.productName,
        description: data.description,
        image: data.productImage,
        brand: data.brand,
        hoverImage: data.hoverImage,
        price: Number(data.price),
        quantity: Number(data.quantity),
        rating: Number(data.rating),
      },
    };

    try {
      const res = await updateProduct(updateData);
      const data: TServerResponse = res.data;

      if (data.success) {
        toast.success(data.message);
      }
    } catch (error) {
      toast.error("Something went wrong!!");
    }
  };
  return (
    <Dialog>
      <DialogTrigger>
        <button className="focus:outline-none transition-all duration-100 p-2 rounded-full bg-[#60a5fa1a] text-[#60a5fa] hover:bg-[#60a5fa] hover:text-white">
          <AiFillEdit className=" text-[12px] " />
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Product Update</DialogTitle>
          <DialogDescription>
            <form onSubmit={handleSubmit(handleEditModalSubmit)}>
              <div className="mb-4">
                <label
                  htmlFor="productName"
                  className={`flex gap-[2px] text-sm font-medium text-gray-700`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="productName"
                  defaultValue={item?.name}
                  {...register("productName")}
                  className={`mt-1 p-3 border block w-full  shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none  focus:border-[#fd7826]  hover:border-gray-400`}
                />
              </div>
              <div className="mb-4 flex gap-4  md:flex-row flex-col">
                <div className="flex-1">
                  <label
                    htmlFor="productImage"
                    className={`flex gap-[2px] text-sm font-medium text-gray-700`}
                  >
                    Product Image{" "}
                  </label>
                  <input
                    type="text"
                    id="productImage"
                    defaultValue={item?.image}
                    {...register("productImage")}
                    className={`mt-1 p-3 border block w-full  shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none  focus:border-[#fd7826]  hover:border-gray-400`}
                  />
                </div>
                <div className="flex-1">
                  <label
                    className={`block text-sm font-medium text-start text-gray-700 mb-2`}
                  >
                    Product Hover Image
                  </label>
                  <input
                    type="text"
                    {...register("hoverImage")}
                    defaultValue={item?.hoverImage}
                    className={`mt-1 p-3 border block w-full  shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none  focus:border-[#fd7826]  hover:border-gray-400`}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className={`flex gap-[2px] text-sm font-medium text-gray-700`}
                >
                  Product Description{" "}
                </label>
                <Controller
                  name="description"
                  control={control}
                  defaultValue={item?.description}
                  render={({ field }) => (
                    <ReactQuill
                      value={field.value}
                      onChange={field.onChange}
                      theme="snow"
                      className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md`}
                    />
                  )}
                />
              </div>
              <div className="mb-4 flex gap-4  md:flex-row flex-col">
                <div className="flex-1">
                  <label
                    htmlFor="brand"
                    className={`flex gap-[2px] text-sm font-medium text-gray-700`}
                  >
                    Brand
                  </label>
                  <input
                    type="text"
                    id="brand"
                    {...register("brand")}
                    defaultValue={item?.brand}
                    className={`mt-1 p-3 border block w-full  shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none  focus:border-[#fd7826]  hover:border-gray-400`}
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="quantity"
                    className={`flex gap-[2px] text-sm font-medium text-gray-700`}
                  >
                    Quantity{" "}
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    {...register("quantity")}
                    defaultValue={item?.quantity}
                    className={`mt-1 p-3 border block w-full  shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none  focus:border-[#fd7826]  hover:border-gray-400`}
                  />
                </div>
              </div>
              <div className="mb-4 flex gap-4  md:flex-row flex-col">
                <div className="flex-1">
                  <label
                    htmlFor="price"
                    className={`flex gap-[2px] text-sm font-medium text-gray-700`}
                  >
                    Price
                  </label>
                  <input
                    type="number"
                    id="price"
                    {...register("price")}
                    defaultValue={item?.price}
                    className={`mt-1 p-3 border block w-full  shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none  focus:border-[#fd7826]  hover:border-gray-400`}
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="rating"
                    className={`flex gap-[2px] text-sm font-medium text-gray-700`}
                  >
                    Rating
                  </label>
                  <input
                    type="number"
                    id="rating"
                    {...register("rating")}
                    defaultValue={item?.rating}
                    className={`mt-1 p-3 border block w-full  shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none  focus:border-[#fd7826]  hover:border-gray-400`}
                  />
                </div>
              </div>
              <DialogClose asChild>
                <div className="flex">
                  <Button size="xl" type="submit">
                    Update
                  </Button>
                </div>
              </DialogClose>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default EditModal;
