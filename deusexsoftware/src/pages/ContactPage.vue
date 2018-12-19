<template>
    <div class="page-padding">
        <div class="col-md-10 offset-md-1">
            <h1 class="my-4 page-title">
                Contact
            </h1>
            <hr>
        </div>
        <contact-form :dark="true"></contact-form>
    </div>
</template>

<script>
export default {
    data(){
        return{
           from : '',
           to: '',
           subject: '',
           content: '' 
        }
    }
    
}
</script>

<style scoped>
    
</style>