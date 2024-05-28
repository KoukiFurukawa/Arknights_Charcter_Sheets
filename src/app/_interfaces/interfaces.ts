// ユーザーメニュー の中身
export interface IUserMenu 
{
    title: string;
    path : string;
};

export interface ISideBar 
{
    title: string;
    path : string;
    icon : string;
    needLogin: boolean;
};

// interface Arguments in the Sidebar
export interface IASidebar 
{
    isSmall?: boolean;
};

export interface ISimpleInput
{
    label : string;
    placeholder : string;
    _type : string;
    require : boolean;
    id : string;
};

export interface IModal
{
    title: string;
    bodyData: ISimpleInput[];
    isLogin : boolean;
}