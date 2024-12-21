import { JSX } from "react";

export interface INavItem {
    name: string;
    to: string;
    icon: JSX.Element;
    subMenu?: INavItem[];
}