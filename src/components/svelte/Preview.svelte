<script lang="ts">
    import cn from "classnames";

    export let src: string | null = null;
    export let title: string | null = null;
    export let overlay: boolean = false;
    let clazz: string | null = null;
    export { clazz as class };

    $: previewClass = cn("preview", clazz);
</script>

<div class={previewClass} class:__overlay={overlay}>
    {#if title}
        <h3 class="title">{title}</h3>
    {/if}
    {#if src}
        <img class="content-image" {src} alt={title} />
    {/if}
</div>

<style lang="scss">
    @function animation($property) {
        @return .3s $property ease-in;
    } 

    .preview {
        @include centering-block;

        &::before {
            content: '';
            @include absolute-overlay;
            transition: animation(backdrop-filter);
        }

        &:hover {
            .title {
                opacity: 1;
            }

            &::before {
                backdrop-filter: blur(10px);
            }
        }
    }
    
    .title {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
        color: $c-white;
        padding: 5px 20px;
        font-size: 30px;
        text-transform: uppercase;
        opacity: 0;
        transition: .3s opacity ease-in;
    }

    .content-image {
        min-height: 100%;
        min-width: 100%;
        object-fit: cover;
    }
</style>