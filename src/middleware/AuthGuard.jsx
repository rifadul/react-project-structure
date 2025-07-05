// Import Dependencies
import { Navigate, useLocation, useOutlet } from 'react-router';
import routePaths from '../constants/routePaths.constant';
import { isAuthenticated } from '../constants/app.constant';

// Local Imports

// ----------------------------------------------------------------------

export default function AuthGuard() {
    const outlet = useOutlet();
    const location = useLocation();

    if (!isAuthenticated) {
        return (
            <Navigate
                to={`${routePaths.ROUTE_GHOST_ENTRY_PATH}?${routePaths.REDIRECT_URL_KEY}=${location.pathname}`}
                replace
            />
        );
    }

    return <>{outlet}</>;
}
