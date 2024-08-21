import { environment } from "src/environments/environment";

export const AppRoutes = {
    HOME: 'home',
    SPLASH: `${environment.routePrefix}/splash`,
    AUTH: `${environment.routePrefix}/auth`,
    MANAGEMENT: `${environment.routePrefix}/management`,
    PUBLIC : `${environment.routePrefix}/public`
  };