import { Location } from './location.interface';

export interface AssistanceRequest {
  id: string;
  issue: string;
  assistanceType: 'towing' | 'workshop';
  location?: Location;
  status: 'pending' | 'inProgress' | 'completed';
  driverId: string;
  businessId?: string;
}
