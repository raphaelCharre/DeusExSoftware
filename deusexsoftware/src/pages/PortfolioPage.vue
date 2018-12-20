<template>
<div class="page-padding container-fluid">
    <div class="col-md-10 offset-md-1">
        <h1 class="my-2 page-title">
            Portfolio
        </h1>
        <hr>
    </div>


    <div class="project row" v-for="(project, index) of projects" :key="index"
    :class="[index%2?'dark':'']">
        <portfolio-project 
            :title="project.title"
            :description="project.description"
            :images="project.images"
            :align_left="index%2"
        ></portfolio-project>
    </div>
</div>
    
</template>

<script>
import PortfolioProject from '../components/PortfolioProject'

export default {
    name:"portfolio",
    components: {PortfolioProject},
    data() {
        return{
            projects: []
        }    
    },
    mounted(){
        this.projects = this.getProjects();
    }
}
</script>

<style scoped>
</style>