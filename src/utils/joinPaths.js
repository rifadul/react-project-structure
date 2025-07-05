// Helper: flatten all allowed paths from filteredMenus
export const getAllPaths = (menu) => {
    if (!menu) return [];
    if (menu.childs && menu.childs.length > 0) {
        return menu.childs.flatMap(getAllPaths);
    }
    if (menu.path) return [menu.path];
    return [];
};