import { Button } from "./components/ui/button";
import Test from "./pages/Test";

const App = () => {
  return (
    <>
      <h1 className="text-5xl font-bold">Hello Developer</h1>
      <Button>Hello</Button>

      <div className="max-w-5xl mx-auto">
        <Test />
      </div>
    </>
  );
};

export default App;
