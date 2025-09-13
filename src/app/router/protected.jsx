import { NAV_TYPE } from '../../constants/app.constant';
import AuthGuard from '../../middleware/AuthGuard';
import { navigationMenus } from '../navigation/navigationMenus';

const createRouteFromMenu = (menu) => {
    // Base case for item or hidden without children
    if (
        menu.type === NAV_TYPE.ITEM ||
        (menu.type === NAV_TYPE.HIDDEN &&
            (!menu.childs || menu.childs.length === 0))
    ) {
        return {
            path: menu.path,
            lazy: async () => ({
                Component: menu.component,
            }),
        };
    }

    // For COLLAPSE or HIDDEN with children - create nested routes recursively
    if (
        (menu.type === NAV_TYPE.COLLAPSE || menu.type === NAV_TYPE.HIDDEN) &&
        menu.childs &&
        menu.childs.length > 0
    ) {
        return {
            path: menu.path,
            children: menu.childs.map(createRouteFromMenu),
        };
    }

    // Fallback: return a route with component if defined, else undefined
    return menu.component
        ? {
              path: menu.path,
              lazy: async () => ({
                  Component: menu.component,
              }),
          }
        : undefined;
};

const routes = navigationMenus?.map(createRouteFromMenu).filter(Boolean);

const protectedRoutes = {
    id: 'protected',
    Component: AuthGuard,
    children: [...routes],
};

export { protectedRoutes };
