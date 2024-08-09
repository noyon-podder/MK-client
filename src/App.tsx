import { RouterProvider } from "react-router-dom";
import { router } from "./router/route";
import { Toaster } from "sonner";
import { useAppSelector } from "./redux/hooks";
import useBeforeReloadPage from "./hooks/useBeforeUnload";

const App = () => {
  const cart = useAppSelector((state) => state.cart);

  useBeforeReloadPage(cart.items.length > 0);
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
};

export default App;
