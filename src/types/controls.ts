export type TabId = string;

export interface ITab {
    id: TabId;
    header: string;
    content?: string;
}

export interface ITabPreview extends ITab {
    previewName: string;
}
