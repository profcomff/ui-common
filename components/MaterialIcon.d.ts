import type { DefineComponent } from 'vue';

interface Props {
    icon: string;
    size: number;
    color: string;
}

declare const MaterialIcon: DefineComponent<Props>;

export default MaterialIcon;
