export interface Service {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  options?: ServiceOption[];
}

export interface ServiceOption {
  id: string;
  name: string;
  price: number;
}

export interface QuoteFormData {
  name: string;
  email: string;
  phone?: string;
  message?: string;
  selectedServices: string[];
  selectedOptions: string[];
  totalPrice: number;
}