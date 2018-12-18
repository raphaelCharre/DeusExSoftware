<template>
    <div class="col-md-10 offset-md-1">
        <h1 class="my-4 page-title">
            Portfolio
        </h1>

        <div v-for="(project, index) of projects" :key="index">
            <hr>
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
            projects: [
                {
                    id: 0,
                    title:'Titre 1',
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla velit purus, eleifend eu condimentum vel, convallis eu tellus. Integer tincidunt metus felis, ut imperdiet risus bibendum a. Sed augue lorem, molestie non lacinia pulvinar, consectetur eu nunc. Praesent a arcu vitae ipsum consectetur dignissim sed sed augue. Proin convallis lectus ac dictum malesuada. Quisque lobortis aliquet tellus at laoreet. Duis gravida, lectus consequat maximus fermentum, leo diam aliquam velit, sed lacinia ligula felis sed sem. Nunc ut ex in ex porta pulvinar vel et dolor. Sed tincidunt dolor vitae sodales sagittis. Integer vehicula sit amet augue sit amet pharetra. Aenean ultrices tortor tortor, vel sodales erat ultricies ac. Sed dapibus a purus ut imperdiet. Nam non scelerisque risus, ac elementum tellus. Sed condimentum lectus pellentesque, hendrerit felis ac, consequat justo. Phasellus quis est sed neque auctor pellentesque at eu lorem. Suspendisse at elit dui.

Morbi viverra, massa quis tincidunt pharetra, ligula est pretium dui, at iaculis purus nisi nec nunc. Phasellus vel blandit mi, posuere posuere nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut vestibulum, nunc eu convallis bibendum, turpis orci volutpat diam, vitae tincidunt elit odio at augue. Vestibulum dignissim neque id sapien condimentum, ac posuere elit iaculis. Pellentesque et tellus non diam maximus ornare. Pellentesque quis magna ac felis fringilla consectetur non at lacus. Integer elementum sollicitudin dui, sit amet semper metus faucibus at. Aenean et maximus ex. Nulla sollicitudin iaculis nisl ac fermentum. Vestibulum convallis mattis eros eget dignissim. Praesent commodo porta arcu, non accumsan ipsum tempor non. Morbi quam ante, dignissim sit amet gravida et, rhoncus vel ligula. Nullam luctus leo a ligula molestie auctor. Duis pretium lacus id mi eleifend, sed scelerisque nunc porttitor.`,
                    images: ['https://picsum.photos/1024/480/?image=32', 'https://picsum.photos/1024/480/?image=75']
                },
                {
                    id: 1,
                    title:'Titre 2',
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla velit purus, eleifend eu condimentum vel, convallis eu tellus. Integer tincidunt metus felis, ut imperdiet risus bibendum a. Sed augue lorem, molestie non lacinia pulvinar, consectetur eu nunc. Praesent a arcu vitae ipsum consectetur dignissim sed sed augue. Proin convallis lectus ac dictum malesuada. Quisque lobortis aliquet tellus at laoreet. Duis gravida, lectus consequat maximus fermentum, leo diam aliquam velit, sed lacinia ligula felis sed sem. Nunc ut ex in ex porta pulvinar vel et dolor. Sed tincidunt dolor vitae sodales sagittis. Integer vehicula sit amet augue sit amet pharetra. Aenean ultrices tortor tortor, vel sodales erat ultricies ac. Sed dapibus a purus ut imperdiet. Nam non scelerisque risus, ac elementum tellus. Sed condimentum lectus pellentesque, hendrerit felis ac, consequat justo. Phasellus quis est sed neque auctor pellentesque at eu lorem. Suspendisse at elit dui.

Morbi viverra, massa quis tincidunt pharetra, ligula est pretium dui, at iaculis purus nisi nec nunc. Phasellus vel blandit mi, posuere posuere nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut vestibulum, nunc eu convallis bibendum, turpis orci volutpat diam, vitae tincidunt elit odio at augue. Vestibulum dignissim neque id sapien condimentum, ac posuere elit iaculis. Pellentesque et tellus non diam maximus ornare. Pellentesque quis magna ac felis fringilla consectetur non at lacus. Integer elementum sollicitudin dui, sit amet semper metus faucibus at. Aenean et maximus ex. Nulla sollicitudin iaculis nisl ac fermentum. Vestibulum convallis mattis eros eget dignissim. Praesent commodo porta arcu, non accumsan ipsum tempor non. Morbi quam ante, dignissim sit amet gravida et, rhoncus vel ligula. Nullam luctus leo a ligula molestie auctor. Duis pretium lacus id mi eleifend, sed scelerisque nunc porttitor.`,
                    images: ['https://picsum.photos/1024/480/?image=12', 'https://picsum.photos/1024/480/?image=42']
                }
                
            ]
        }    
    }
}
</script>

<style scoped>

</style>