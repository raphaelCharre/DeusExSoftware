<template>
    <div class="page-padding">
        <div class="col-md-10 offset-md-1">
            <h1 class="my-4 page-title">
                Contact
            </h1>
            <hr>
        </div>
        <div id="contact-container">
            <div class="col-lg-6 offset-lg-3">
                <b-form class="container">
                    <b-form-group id="labelInputMail"
                                    label-for="inputMail">
                        <b-form-input id="inputMail"
                                    type="email"
                                    v-model="from"
                                    required
                                    placeholder="Adresse mail">
                        </b-form-input>
                    </b-form-group>

                    <b-form-group id="labelInputSubject"
                                    label-for="inputSubject">
                        <b-form-input id="inputSubject"
                                    type="text"
                                    v-model="subject"
                                    required
                                    placeholder="Sujet">
                        </b-form-input>
                    </b-form-group>

                    <b-form-group id="labelInputContent"
                                    label-for="inputContent">
                        <b-form-textarea  id="inputContent"
                                    type="email"
                                    v-model="content"
                                    :rows="6"
                                    :max-rows="20"
                                    required>
                        </b-form-textarea >
                    </b-form-group>
                    <b-button type="submit" class="float-right" variant="light">Envoyer</b-button>
                </b-form>
            </div>
        </div>
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
    #contact-container{
        margin-top: 50px;
        padding: 50px 0px 100px 0px;
        background-color:rgba(50, 50, 50, 1);
        color: white;
    }
</style>