export const navItems = [
    { title: 'Расписание', icon: 'calendar_month', path: '/timetable' },
    { title: 'Сервисы', icon: 'apps', path: '/apps' },
];

const preffix = 'single-spa';
export const SingleSpaEvent = Object.freeze({
    BeforeRoutingEvent: `${preffix}:before-routing-event`,
    BeforeAppChange: `${preffix}:before-app-change`,
    BeforeNoAppChange: `${preffix}:before-no-app-change`,
    BeforeMountRouting: `${preffix}:before-mount-routing-event`,
    BeforeFirstMount: `${preffix}:before-first-mount`,
    FirstMount: `${preffix}:first-mount`,
    AppChange: `${preffix}:app-change`,
    NoAppChange: `${preffix}:no-app-change`,
    Routing: `${preffix}:routing-event`,
});
