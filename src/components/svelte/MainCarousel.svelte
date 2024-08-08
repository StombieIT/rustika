<script lang="ts">
    import Carousel from "./Carousel.svelte";

    import type { IImageAttributes } from "@/types/image";

    export let imagesAttrs: IImageAttributes[];
</script>

<Carousel {imagesAttrs}>
    <div class="info">
        <h1 class="header">РУСТИКА</h1>
        <p class="meta">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, magni qui sint illo vitae asperiores dolor dolore odit ut tempore dicta iste quam numquam quo a doloremque! Unde, ab veritatis.
        </p>
    </div>
</Carousel>

<style lang="scss">
    .info {
        position: relative;
        padding: 25px;
        color: $c-white;
        min-height: 550px;
        font-size: 50px;
    }

    .header {
        text-transform: uppercase;
    }

    .meta {
        font-size: 30px;
    }
</style>
