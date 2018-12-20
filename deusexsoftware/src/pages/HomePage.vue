<template>
    <div class="page-padding">
        <div class="bloc">
            <h1 class="my-2 page-title">Services</h1>
        </div>

        <div class="bloc dark">
            <h1 class="my-2 page-title">Portfolio</h1>
            <b-carousel id="carousel1"
                        style="text-shadow: 1px 1px 2px #333;"
                        controls
                        indicators
                        :interval="4000"
                        v-if="projects"
                        class="col-8 offset-2"
            >
                <b-carousel-slide v-for="(image, index) of getProjectsImages()" 
                                    :key="index"
                                    :img-src="image"
                ></b-carousel-slide>
            </b-carousel>

            <h2 class="text-center my-4"><router-link tag="a" class="text-blue" to="portfolio">En savoir plus ></router-link></h2>
        </div>

        <div class="bloc">
            <h1 class="my-2 page-title">Qui sommes nous ?</h1>
            <div id="linkedin-profiles">
                <div 
                    class="LI-profile-badge"  
                    data-version="v1" 
                    data-size="medium" 
                    data-locale="fr_FR" 
                    data-type="vertical" 
                    data-theme="dark" 
                    data-vanity="raphaël-charre-43384b173">
                        <a class="LI-simple-link" 
                            href='https://fr.linkedin.com/in/rapha%C3%ABl-charre-43384b173?trk=profile-badge'>Raphaël Charre</a>
                </div>
            
                <div 
                    class="LI-profile-badge"  
                    data-version="v1" 
                    data-size="medium" 
                    data-locale="fr_FR" 
                    data-type="vertical" 
                    data-theme="dark" 
                    data-vanity="teofilo-jeandot">
                        <a class="LI-simple-link" 
                            href='https://fr.linkedin.com/in/teofilo-jeandot?trk=profile-badge'>Téofilo Jeandot</a>
                </div>
            </div>
            <h2 class="text-center my-4"><router-link tag="a" class="text-blue" to="about">En savoir plus ></router-link></h2>
        </div>

        <div class="bloc dark">
            <h1 class="my-2 page-title">Contact</h1>
            <contact-form :dark="true"></contact-form>
        </div>
    </div>
</template>

<script>
export default {
    name:"home",
    data(){
        return {
            projects: []
        }
    },
    mounted(){
        this.projects = this.getProjects();
    },
    methods:{
        getProjectsImages(){
            var images = this.projects
                            .map(e=> e.images)
                            .reduce((e1, e2)=> e1.concat(e2));
            return images;
        }
    }
}
</script>

<style scoped>
    .bloc{
        padding: 20px 20px 75px 20px;
    }

    .LI-profile-badge{
        display: inline-block;
        margin: 20px 20px;
    }

    #linkedin-profiles{
        width: fit-content;
        margin: auto;
    }
</style>
