export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
};

export type Section = {
  title: string;
  data: Product[];
};
