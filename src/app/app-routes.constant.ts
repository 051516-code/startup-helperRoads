import { environment } from "src/environments/environment";
export const AppRoutes = {
    HOME: 'home',
    SPLASH: 'splash',
    AUTH: `${environment.routePrefix}/auth`,
    MANAGEMENT: `${environment.routePrefix}/management`,
    PUBLIC : `${environment.routePrefix}/public`
  };