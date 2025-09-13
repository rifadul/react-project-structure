export const extractMenuPaths = (menu) => {
    // Handle falsy input
    if (!menu) return [];

    // If menu is an array (top-level menu), process each item
    if (Array.isArray(menu)) {
        return menu.flatMap(extractMenuPaths);
    }

    // Initialize paths array
    const paths = [];

    // Add the current menu item's path if it exists
    if (menu.path) {
        paths.push(menu.path);
    }

    // Process child items if they exist
    if (menu.childs && menu.childs.length > 0) {
        paths.push(...menu.childs.flatMap(extractMenuPaths));
    }

    return paths;
};