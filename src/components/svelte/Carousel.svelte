<script lang="ts">
    import type { IImageAttributes } from "@/types/image";

    export let imagesAttrs: IImageAttributes[];
</script>

<div>
    {#each imagesAttrs as { src, alt }}
        <div>Image {src} with alt {alt}</div>
    {/each}
</div>