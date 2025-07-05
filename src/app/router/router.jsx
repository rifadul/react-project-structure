// Import Dependencies
import { createBrowserRouter } from 'react-router';

// Local Imports
import { protectedRoutes } from './protected';
import { ghostRoutes } from './ghost';
import { publicRoutes } from './public';
import RootLayout from '../layouts';
import RootErrorBoundary from '../pages/errors/RootErrorBoundary';
import SplashScreen from '../../components/shared/SplashScreen';

// ----------------------------------------------------------------------

const router = createBrowserRouter([
    {
        id: 'root',
        Component: RootLayout,
        hydrateFallbackElement: <SplashScreen />,
        ErrorBoundary: RootErrorBoundary,
        children: [protectedRoutes, ghostRoutes, publicRoutes],
    },
]);

export default router;
