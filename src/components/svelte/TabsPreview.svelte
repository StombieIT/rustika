<script lang="ts">
    import Tab from "./Tab.svelte";

    import type { ITabPreview, TabId } from "@/types/controls";

    export let tabs: ITabPreview[] = [];
    export let activeTabId: TabId | null = null;
</script>

<div class="tabs-preview">
    <div class="tabs">
        {#each tabs as { id, header, content }(id)}
            <Tab active={id === activeTabId}>
                <h4 slot="header">{header}</h4>
                {#if content}
                    <p>{content}</p>
                {/if}
            </Tab>
        {/each}
    </div>
</div>

<style lang="scss">
    .tabs-preview {
        display: flex;
        justify-content: space-between;
    }
</style>
