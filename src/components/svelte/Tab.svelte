<script lang="ts">
    export let active: boolean = false;
</script>

<div class="card" class:__active={active} on:mouseenter>
    <slot name="header" />
    <slot />
</div>

<style lang="scss">
    .card {
        padding: 10px 15px;
        border-radius: $br-common;
        cursor: default;
        transition: .3s ease-in-out background-color;

        &.__active {
            background-color: $c-light-gray;
        }
    }
</style>