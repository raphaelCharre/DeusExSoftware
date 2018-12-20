<template>
    <div class="page-padding">
        <h1 class="my-2 page-title">
            Qui sommes nous ?
        </h1>
        <div class="">
            <div class="row founder" v-for="(founder, index) of founders" :key="founder.id" :class="[index%2?'':'dark']">
                <div 
                    class="founder-picture"
                    :style="{backgroundImage: 'url(' + founder.profile_picture + ')' }">
                </div>
                <div class="col-12 founder-info">
                    <h2><a target="blank" class="fab fa-linkedin text-blue" :href="founder.linkedin_url"></a> {{founder.fname}} {{founder.lname}}</h2>
                    <p>{{founder.description}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
   data(){
       return{
           founders: []
       }
   },
   mounted(){
       this.founders = this.getFounders();
   }
}
</script>

<style scoped>

    .founder{
        padding: 50px;
        margin: 50px 0px;
    }

    .founder-picture{
        border-radius: 50%;
        width: 250px;
        height: 250px;
        background: transparent no-repeat center;
        background-size: cover;
        margin: auto;
    }

    .founder-info{
        margin: 20px 0px;
        text-align: center;
    }

    .founder-name{
    }

    .founder-description{

    }
</style>