import Container from "../../components/Container";
import CartTable from "./CartTable";

const CartPage = () => {
  return (
    <div className="py-5">
      <Container>
        <div className="grid grid-cols-12 gap-5">
          <div className="lg:col-span-9 col-span-12">
            <div className="p-5 bg-white rounded-[12px] mb-6">
              <h2 className="text-[24px] font-bold text-headingColor">
                Cart Order
              </h2>
            </div>
            <CartTable />
          </div>
          <div className="lg:col-span-3 col-span-12">Order</div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
