<script lang="ts">
    export let active: boolean = false;
</script>

<div class="card">
    <slot name="header" />
    <slot name="content" />
</div>

<style>
    .card {
        padding: 15px 10px;
    }
</style>