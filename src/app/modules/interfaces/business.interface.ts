import { UserProfile } from './user-profile.interface';
import { Location } from './location.interface';
import { Service } from './services.interface';

export interface Business extends UserProfile {
  businessInfo: {
    businessName: string;
    address: string;
  };
  services: Service[];
  location: Location;
}
