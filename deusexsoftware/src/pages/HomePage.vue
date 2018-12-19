<template>
    <div class="page-padding">
        <div class="bloc">
            <h1 class="my-4 page-title">Services</h1>
        </div>

        <div class="bloc dark">
            <h1 class="my-4 page-title">Portfolio</h1>
        </div>

        <div class="bloc">
            <h1 class="my-4 page-title">Qui sommes nous ?</h1>
        </div>

        <div class="bloc dark">
            <h1 class="my-4 page-title">Contact black</h1>
            <contact-form :dark="true"></contact-form>
        </div>

        <div class="bloc">
            <h1 class="my-4 page-title">Contact</h1>
            <contact-form :dark="false"></contact-form>
        </div>
    </div>
</template>

<script>
export default {
    name:"home"
}
</script>

<style scoped>
    .bloc{
        min-height: 500px;
        padding: 20px;
    }
</style>
