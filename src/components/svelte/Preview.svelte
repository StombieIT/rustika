<script lang="ts">
    import cn from "classnames";

    export let title: string | undefined;
    export let overlay: boolean = false;
    let clazz: string | null = null;
    export { clazz as class };

    $: previewClass = cn("preview", clazz);
</script>

<div class={previewClass} class:__overlay={overlay}>
    {#if title}
        <div class="title">{title}</div>
    {/if}
    <slot />
</div>

<style lang="scss">
    .preview {
        @include centering-block;
    }

    .title {
        position: absolute;
        left: 0;
        top: 0;
    }
</style>