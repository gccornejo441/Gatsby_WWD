export interface Product {
  id: number;
  name: string;
  price: string;
  category: string;
  image: string;
}

export interface Price {
  pricing: string;
  price1: string;
  price2: string;
  price3: string;
  disc1: string;
  disc2: string;
  disc3: string;
}

export interface Pages {
    pages1:  string;
      pages2: string;
      pages3: string;
      check: string;
      dash: string;
}

export interface Packages {
  starter: string;
  premium: string;
  executive: string;
}

export interface Layers {
  features: string;
  services: string;
  packages: string;
  mocksites: string;
  hosting: string;
  cert: string;
  support: string;
  mobile: string;
  SEO: string;
  revisions: string;
}

const TableInfo: string[] = [];
