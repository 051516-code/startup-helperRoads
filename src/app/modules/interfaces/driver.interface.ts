import { UserProfile } from './user-profile.interface';
import { Location } from './location.interface';

export interface Driver extends UserProfile {
  location?: Location;
}
