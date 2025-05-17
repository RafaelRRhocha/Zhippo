interface DeliveryRange {
  min: number;
  max: number;
}

interface PackageDimensions {
  height: number;
  width: number;
  length: number;
}

interface ShippingPackage {
  price?: string;
  discount?: string;
  format: string;
  weight: string;
  insurance_value: string;
  dimensions: PackageDimensions;
}

interface AdditionalServices {
  receipt: boolean;
  own_hand: boolean;
  collect: boolean;
}

interface AdditionalUnit {
  price: number;
  delivery: number;
}

interface Additional {
  unit: AdditionalUnit;
}

interface ShippingCompany {
  id: number;
  name: string;
  picture: string;
}

export interface Shipping {
  id: number;
  name: string;
  company: ShippingCompany;
  price?: string;
  custom_price?: string;
  discount?: string;
  currency?: string;
  delivery_time?: number;
  delivery_range?: DeliveryRange;
  custom_delivery_time?: number;
  custom_delivery_range?: DeliveryRange;
  packages?: ShippingPackage[];
  additional_services?: AdditionalServices;
  additional?: Additional;
  error?: string;
}

export interface CreateShippingData {
  from: {
    postal_code: string;
  };
  to: {
    postal_code: string;
  };
  package: {
    weight: number;
    width?: number;
    height?: number;
    length?: number;
  };
}
