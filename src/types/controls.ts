export type TabId = string;

export interface ITab {
    id: TabId;
    title: string;
    content?: string;
}

export interface ITabPreview extends ITab {
    previewSrc?: string;
}
