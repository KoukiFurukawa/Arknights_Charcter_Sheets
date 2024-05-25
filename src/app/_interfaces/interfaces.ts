// ユーザーメニュー の中身
export interface IUserMenu {
    title: string;
    path : string;
};

export interface ISideBar {
    title: string,
    path : string,
    icon : string,
}

// interface Arguments in the Sidebar
export interface IASidebar {
    isSmall?: boolean
}