import { Service, ServiceOption } from '../types';

export const calculateServiceTotal = (services: Service[]): number => {
  return services.reduce((sum, service) => sum + service.basePrice, 0);
};

export const calculateOptionsTotal = (options: ServiceOption[]): number => {
  return options.reduce((sum, option) => sum + option.price, 0);
};

export const calculateTotal = (services: Service[], options: ServiceOption[]): number => {
  return calculateServiceTotal(services) + calculateOptionsTotal(options);
};