export interface Product {
  id: number;
  title: string;
  price: number;
  inventory: string;
  discountPercentage: number;
  active: boolean;
  leadTime: string;
  description: string;
  category: string;
  image: string;
  primary_variants: PrimaryVariant[];
}

export interface PrimaryVariant {
  name: string;
  price: number;
  discountPercentage: number;
  inventory: number;
  active: boolean;
  secondary_variants: SecondaryVariant[];
}

export interface SecondaryVariant {
  name: string;
  price: number;
  discountPercentage: number;
  inventory: number;
}
