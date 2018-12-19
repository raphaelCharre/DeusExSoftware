<template>
    <div class="padding-page-service">
        <!--
        <h1 class="my-4 page-title">
            Services
        </h1>
        -->
        <div class="service-banner row  fixed-top">
            <div class="offset-sm-3 col col-sm-2 text-center">
                <div class="col-xs-12">
                    <i class="fas fa-code fa-4x d-none d-sm-block"></i>
                    <i class="fas fa-code fa-2x d-sm-none"></i>
                </div>
                <div class="col-xs-12">
                    <span>Création</span>
                </div>
            </div>
            <div class="col col-sm-2 text-center">
                <div class="col-xs-12">
                    <i class="fas fa-tools fa-4x d-none d-sm-block"></i>
                    <i class="fas fa-tools fa-2x d-sm-none"></i>
                </div>
                <div class="col-xs-12">
                    <span>Maintenance</span>
                </div>
            </div>
            <div class="col col-sm-2 text-center">
                <div class="col-xs-12">
                    <i class="fas fa-shield-alt fa-4x d-none d-sm-block"></i>
                    <i class="fas fa-shield-alt fa-2x d-sm-none"></i>
                </div>
                <div class="col-xs-12">
                    <span>Sécurité</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"services"
}
</script>

<style scoped>

.service-banner{
    background-color: whitesmoke;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-top:56px;
}

.padding-page-service{
    padding-top: 56px;
}

</style>