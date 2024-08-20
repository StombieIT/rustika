<script lang="ts">
    import Preview from "./Preview.svelte";
    import Tab from "./Tab.svelte";
    import cn from "classnames";

    import type { ITabPreview, TabId } from "@/types/controls";

    export let tabs: ITabPreview[] = [];
    export let activeTabId: TabId | null = tabs.length ? tabs[0].id : null;
</script>

<div class="tabs-preview">
    <div class="tabs">
        {#each tabs as { id, title, content }(id)}
            <Tab
                active={id === activeTabId}
                on:mouseenter={() => activeTabId = id}
            >
                <h4 slot="header">{title}</h4>
                {#if content}
                    <p class="content">{content}</p>
                {/if}
            </Tab>
        {/each}
    </div>
    <div class="preview-container">
        {#each tabs as { id, title, previewSrc }(id)}
            <!-- fix class prop to suit MCSS -->
            <Preview
                class={cn({
                    "preview-active": activeTabId === id
                })}
                src={previewSrc}
                {title}
                overlay
            />
        {/each}
    </div>
</div>

<style lang="scss">
    .tabs-preview {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .tabs {
        flex-basis: 485px;
    }

    .content {
        margin-top: 10px;
    }

    .preview-container {
        position: relative;
        min-height: 600px;
        min-width: 575px;
        border-radius: $br-common;
        overflow: hidden;

        :global(.preview) {
            @include absolute-overlay;
        }

        :global(.preview-active) {
            z-index: 1;
        }
    }
</style>
