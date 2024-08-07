<script lang="ts">
    import { onDestroy } from "svelte";

    import type { IImageAttributes } from "@/types/image";

    export let imagesAttrs: IImageAttributes[] = [];

    let selectedImageIdx = 0;
    let isTabsTouching = false;
    let carouselWrapper: HTMLDivElement;

    let selectedImageTimer: ReturnType<typeof setTimeout>;

    $: elementWidth = carouselWrapper?.scrollWidth / imagesAttrs.length;
    $: offset = elementWidth * selectedImageIdx;

    $: {
        if (selectedImageTimer) {
            clearTimeout(selectedImageTimer);
        }
        if (!isTabsTouching) {
            selectedImageTimer = setTimeout(() =>
                selectedImageIdx = (selectedImageIdx + 1) % imagesAttrs.length,
                10000
            );
        }
    }

    onDestroy(() => {
        if (selectedImageTimer) {
            clearTimeout(selectedImageTimer)
        }
    });
</script>

<div class="carousel">
    <div class="payload">
        <h2 class="header">Семена Озимой пшеницы</h2>
    </div>
    <div class="carousel-container">
        <div
            class="carousel-wrapper"
            style:--carousel-offset={`${offset ?? 0}px`}
            bind:this={carouselWrapper}
        >
            {#each imagesAttrs as _}
                <div
                    class="carousel-item"
                ></div>
            {/each}
        </div>
    </div>
    {#if imagesAttrs.length}
        <div
            class="tabs"
            on:mouseenter={() => isTabsTouching = true}
            on:mouseleave={() => isTabsTouching = false}
        >
            {#each imagesAttrs as _, idx}
                <div
                    class="tab"
                    class:__selected={selectedImageIdx === idx}
                    on:mouseenter={() => selectedImageIdx = idx}
                ></div>
            {/each}
        </div>
    {/if}
</div>

<style lang="scss">
    .carousel {
        position: relative;
    }    

    .payload {
        color: #fff;
        @include centering-block;
        position: absolute;
    }

    .carousel-container {
        height: 600px;
        overflow: hidden;
    }

    .carousel-wrapper {
        --carousel-offset: 0;
        height: 100%;
        display: flex;
        align-items: stretch;
        transform: translateX(calc(-1 * var(--carousel-offset)));
        transition: .7s transform ease-in-out;
    }

    .carousel-item {
        background-color: red;
        flex-basis: 100%;
        flex-shrink: 0;

        &:nth-child(2) {
            background-color: blue;
        }
    }

    .tabs {
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
        display: flex;
    }

    .tab {
        --carousel-tab-opacity: 0.5;
        cursor: pointer;
        padding: 20px 8px;
        
        &::before {
            content: '';
            display: block;
            height: 5px;
            width: 25px;
            background-color: $c-white;
            border-radius: 10px;
            opacity: var(--carousel-tab-opacity);
            transition: .3s opacity ease-in-out;
        }

        &.__selected {
            --carousel-tab-opacity: 1;
        }
    }
</style>
