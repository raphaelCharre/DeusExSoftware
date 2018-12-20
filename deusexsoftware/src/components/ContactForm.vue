<template>
  <div id="contact-container" :class="[dark?'dark':'']">
    <div class="col-lg-6 offset-lg-3">
        <b-form class="container">
            <div class="row">
                <b-form-group id="labelInputFname"
                            class="col-6"
                            label-for="inputFname">
                    <b-form-input id="inputFname"
                                type="text"
                                v-model="fname"
                                required
                                placeholder="Prenom">
                    </b-form-input>
                </b-form-group>

                <b-form-group id="labelInputLname"
                                class="col-6"
                                label-for="inputLname">
                    <b-form-input id="inputLname"
                                type="text"
                                v-model="lname"
                                required
                                placeholder="Nom">
                    </b-form-input>
                </b-form-group>
            </div>

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
                            placeholder="Contenu de votre message."
                            required>
                </b-form-textarea >
            </b-form-group>
            <b-button type="submit" class="float-right" :variant="dark?'light':'dark'">Envoyer</b-button>
        </b-form>
    </div>
</div>
</template>

<script>
export default {
  name: "contact-form",
  props: ['dark'],
  data(){
    return{
        fname: '',
        lname: '',
        from : '',
        to: '',
        subject: '',
        content: '' 
    }
  }
};
</script>

<style scoped>
  #contact-container{
        margin-top: 0px;
        padding: 50px 0px 100px 0px;
    }
</style>

