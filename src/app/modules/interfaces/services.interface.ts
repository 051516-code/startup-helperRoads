export interface Service {
    id: string;
    type: 'towing' | 'workshop';
    description: string;
    available: boolean;
    price: number;
  }
  