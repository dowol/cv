export type Message = Record<string, string>;

export interface TimelineInfo {
    category: 'education' | 'work';
    title: string;
    subtitle?: string;
    logo?: string;
    url?: string;
    period: {
        begin: string;
        end?: string;
    };
    description?: string;
}

export interface SkillsInfo {
    id: string;
    category: 'language' | `dev/${'web_frontend' | 'web_backend' | 'web_full-stack' | 'gui_app' | 'database'}` | 'tool';
    name: string;
    icon?: string;
    description?: string;
}

export interface TimelineInfo {
    category: 'education' | 'work';
    title: string;
    subtitle?: string;
    logo?: string;
    url?: string;
    period: {
        begin: string;
        end?: string;
    };
    description?: string;
}