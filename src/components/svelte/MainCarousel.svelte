<script lang="ts">
    import type { IImageAttributes } from "@/types/image";

    export let imagesAttrs: IImageAttributes[];
</script>

<div class="carousel">
    <div class="payload">
        <h2 class="header">Семена Озимой пшеницы</h2>
    </div>
    <div class="carousel-container">
        <div class="carousel-wrapper">
            {#each imagesAttrs as { src, alt }}
                <img src={src} alt={alt} />
            {/each}
        </div>
    </div>
</div>

<style lang="scss">
    .payload {
        color: #fff;
        @include centering-block;
    }

    .carousel-container {
        
    }
</style>
