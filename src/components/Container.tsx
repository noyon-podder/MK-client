import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <div className="max-w-7xl mx-auto px-5">{children}</div>;
};

export default Container;
