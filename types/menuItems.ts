export interface MenuItems {
    id: number;
    title: string;
    path: string;
    icon?: string;
    subMenuItems?: MenuItems[];
}