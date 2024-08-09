import { FieldValues, SubmitHandler } from "react-hook-form";
import Form from "../../components/form/Form";
import Input from "../../components/form/Input";

const ShippingForm = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-white p-5">
      <Form onSubmit={onSubmit}>
        <Input type="text" name="firstName" label="First Name" />
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};

export default ShippingForm;
