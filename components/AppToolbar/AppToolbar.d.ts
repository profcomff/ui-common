import type { DefineComponent } from 'vue';

interface MenuItem {
    name: string,
    action: Function
}

interface ActionItem {
    icon: string;
    action: Function;
}

interface Props {
    title?: string;
    backable?: boolean;
    menuItems?: MenuItem[];
    actionItems?: ActionItem[];
}

declare const AppToolbar: DefineComponent<Props>;

export default AppToolbar;
