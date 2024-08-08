<script lang="ts">
    import { onDestroy } from "svelte";

    import type { IImageAttributes } from "@/types/image";

    export let isOverlay = false;
    export let imagesAttrs: IImageAttributes[] = [];

    let selectedImageIdx = 0;
    let isTabsTouching = false;
    let carouselWrapper: HTMLDivElement;

    let selectedImageTimer: ReturnType<typeof setTimeout>;

    $: offset = carouselWrapper?.scrollWidth * selectedImageIdx / imagesAttrs.length;

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
    <div class="content">
        <slot />
    </div>
    <div class="carousel-container">
        <div
            class="carousel-wrapper"
            style:--carousel-offset={`${offset ?? 0}px`}
            bind:this={carouselWrapper}
        >
            {#each imagesAttrs as { src, alt }}
                <div
                    class="carousel-item"
                >
                    <img class="image" {src} {alt}>
                </div>
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
    @function hover-animation($property) {
        @return $property .5s ease-out;;
    }

    @mixin carousel-hover {
        .carousel:hover & {
            @content;
        }
    }

    .carousel {
        position: relative;
    }

    .content {
        position: relative;
        z-index: 2;
    }

    .carousel-container {
        @include absolute-overlay;
        overflow: hidden;

        &::before {
            content: '';
            @include absolute-overlay;
            z-index: 1;
            background: linear-gradient(0, $c-black, transparent);
            opacity: 0.5;
            transition: hover-animation(opacity);

            @include carousel-hover {
                opacity: 0.8;
            }
        }
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
        flex-basis: 100%;
        flex-shrink: 0;
        @include centering-block;
        overflow: hidden;

        .image {
            min-width: 100%;
            transition: hover-animation(transform);

            @include carousel-hover {
                transform: scale(1.05);
            }
        }
    }

    .tabs {
        position: absolute;
        left: 50%;
        bottom: 0;
        z-index: 3;
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
