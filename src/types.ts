export type Category = {
  id: number;
  code: string;
  children: string[];
  name: string;
  slug: string;
  description: string;
};

export type ProductImageType = {
  id: number;
  type: string;
  path: string;
};
export type ProductType = {
  id: number;
  code: string;
  productTaxons: string[];
  mainTaxon: string;
  reviews: string[];
  averageRating: number;
  images: ProductImageType[];
  variants: string[];
  options: string[];
  createdAt: string;
  updatedAt: string;
  shortDescription: string;
  name: string;
  description: string;
  slug: string;
};

export type RouteCodeParamsType = {
  code: string;
};
