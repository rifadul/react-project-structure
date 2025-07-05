import routePaths from '../../constants/routePaths.constant';
import AuthGuard from '../../middleware/AuthGuard';

const protectedRoutes = {
    id: 'protected',
    Component: AuthGuard,
    children: [
        {
            path: routePaths.ROUTE_MY_PROFILE,
            lazy: async () => ({
                Component: (await import('../pages/my-profile')).default,
            }),
        },
    ],
};

export { protectedRoutes };
