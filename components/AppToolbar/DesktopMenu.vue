<template>
    <menu class="desktop-menu">
        <DesktopMenuItem
            v-for="(item, i) in navItems"
            :key="item.title"
            v-bind="item"
            :active="pathname.startsWith(item.path)"
            @click="() => navigate(i)"
        />
    </menu>
</template>
<script>
import * as singleSpa from 'single-spa';
import DesktopMenuItem from './DesktopMenuItem.vue';
import { navItems } from '../../constants';

export default {
    data() {
        return {
            navItems,
            pathname: window.location.pathname,
        };
    },
    methods: {
        navigate(i) {
            singleSpa.navigateToUrl(navItems[i].path);
        },
        beforeRoutingEventHandler() {
            this.pathname = window.location.pathname;
        },
    },
    components: { DesktopMenuItem },
    mounted() {
        window.addEventListener('single-spa:before-routing-event', this.beforeRoutingEventHandler);
    },
    unmounted() {
        window.removeEventListener('single-spa:before-routing-event', this.beforeRoutingEventHandler);
    },
};
</script>
<style scoped>
.active {
    color: var(--bs-secondary);
}
.desktop-menu {
    display: flex;
    gap: 12px;
    flex: 1;
    margin: 0;
    padding: 0;
}
</style>
