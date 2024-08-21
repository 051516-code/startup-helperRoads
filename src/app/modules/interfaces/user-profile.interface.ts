
export interface UserProfile {
    id: string;
    name: string;
    email: string;
    phone: string;
    roles: UserRole[];
  }
  
  export type UserRole = 'user' | 'businessOwner' | 'advertiser';
  