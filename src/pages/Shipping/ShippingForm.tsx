import { FieldValues } from "react-hook-form";
import Form from "../../components/form/Form";
import Input from "../../components/form/Input";
import React from "react";

type TShippingFromProps = {
  handlePaymentInfoSubmit: (data: FieldValues) => void;
};

const ShippingForm: React.FC<TShippingFromProps> = ({
  handlePaymentInfoSubmit,
}) => {
  return (
    <div className="bg-white p-5 rounded-[12px]">
      <Form onSubmit={handlePaymentInfoSubmit}>
        <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-5 lg:gap-y-2">
          <div className="md:col-span-6 col-span-12">
            <Input
              type="text"
              name="firstName"
              label="First Name"
              placeholder="Your First Name"
            />
          </div>
          <div className="md:col-span-6 col-span-12">
            <Input
              type="text"
              name="lastName"
              label="Last Name"
              placeholder="Your Last Name"
            />
          </div>
          <div className="md:col-span-6 col-span-12">
            <Input
              type="text"
              name="company"
              label="Company Name (Optional)"
              placeholder="Your Company Name"
            />
          </div>
          <div className="md:col-span-6 col-span-12">
            <Input
              type="text"
              name="email"
              label="Email"
              placeholder="Your Email Address"
            />
          </div>
          <div className="md:col-span-6 col-span-12">
            <Input
              type="text"
              name="phoneNumber"
              label="Phone Number"
              placeholder="Your Phone Number"
            />
          </div>
          <div className="md:col-span-6 col-span-12">
            <Input
              type="text"
              name="deliveryAddress"
              label="Delivery Address"
              placeholder="Your Delivery Address"
            />
          </div>
          <div className="md:col-span-6 col-span-12">
            <Input
              type="text"
              name="cityName"
              label="City Name"
              placeholder="Your City Name"
            />
          </div>
          <div className="md:col-span-6 col-span-12">
            <Input
              type="text"
              name="stateName"
              label="State Name"
              placeholder="Your State Name"
            />
          </div>
          <div className="md:col-span-6 col-span-12">
            <Input
              type="text"
              name="country"
              label="Country"
              placeholder="Your Country Name"
            />
          </div>
          <div className="md:col-span-6 col-span-12">
            <Input
              type="text"
              name="zipCode"
              label="Zip/Postal Code"
              placeholder="Your Postal / Zip Code"
            />
          </div>
        </div>
        <div className="mt-5">
          <button
            type="submit"
            className="bg-noyonColor text-white text-lg font-medium px-7 py-2 lg:w-fit w-full rounded-[5px] text-center"
          >
            Confirm order
          </button>
        </div>
      </Form>
    </div>
  );
};

export default ShippingForm;
