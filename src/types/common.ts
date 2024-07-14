export type TProduct = {
  _id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  rating: number;
  brand: string;
  image: string;
  hoverImage: string;
};

export type TSideMenuBarProps = {
  sideMenuBar?: boolean;
  setSideMenuBar: (value: boolean) => void;
};
