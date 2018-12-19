<template>
    <div class="project container-fluid" >
        <p class="project-title">{{title}}</p>
        <div class="project-carousel" :class="[align_left? 'align-left': 'align-right']">
            <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                img-width="1024"
                img-height="480">

                <b-carousel-slide 
                    v-for="image of images" 
                    :key="image" 
                    :img-src="image">
                </b-carousel-slide>

            </b-carousel>
        </div>
        <p class="project-description">{{description}}</p>
    </div>
</template>

<script>
export default {
    name: 'portfolio-project',
    props: ['images', 'title', 'description', 'align_left']
}
</script>

<style scoped>

.project{
    padding: 20px 20px 50px 20px;
    padding-bottom: 50px;
    margin: 0px 0px 50px 0px;
}

.project-carousel{
    max-width: 60%;
    min-width: 290px;
    padding: 0px;
}

.project-carousel.align-left{
    float: left;
    margin: 5px 20px 10px 0px;
}

.project-carousel.align-right{
    float: right;
    margin: 5px 0px 10px 20px;
}

.project-title{
    font-weight: bold;
    font-size: 2em;
    margin: 10px 0px 0px 0px;
    padding-left: 15px;
    margin-bottom: 10px;
    border-left: solid 2px black;
}

.dark .project-title{
    border-left: solid 2px white;
}

.project-description{
    text-align: justify;
    text-justify: inter-word;
    margin: 0;
    padding: 0;
}


</style>
