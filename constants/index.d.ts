interface NavItem {
    title: string;
    icon: string;
    path: string;
}

export const navItems: NavItem[];

export enum SingleSpaEvent {
    BeforeRoutingEvent,
    BeforeAppChange,
    BeforeNoAppChange,
    BeforeMountRouting,
    BeforeFirstMount,
    FirstMount,
    AppChange,
    NoAppChange,
    Routing,
};
