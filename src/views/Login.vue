<template>
  <v-container
    fluid
    fill-height
  >
    <v-layout
      align-center
      justify-center
    >
      <v-flex
        xs12
        sm8
        md4
      >
        <v-card class="elevation-12">
          <v-toolbar
            dark
            color="primary"
          >
            <v-toolbar-title>{{ registerMode ? "Register" : "Login" }}</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="email"
                name="login"
                label="Email"
                type="mail"
              />
              <v-text-field
                id="password"
                v-model="password"
                name="password"
                label="Password"
                type="password"
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn
              color="deep-purple lighten-2"
              text
              @click="registerMode = !registerMode"
            >
              {{ registerMode ? "Login" : "Register" }}
            </v-btn>
            <v-btn
              color="primary"
              @click="login"
            >
              {{ registerMode ? "Register" : "Login" }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
  import Cookies from 'js-cookie'

  export default {
    data() {
      return {
        email: '',
        password: '',
        registerMode: false
      }
    },
    methods: {
      login() {
        const auth = getAuth();
        if(this.registerMode){
          createUserWithEmailAndPassword(auth, this.email, this.password)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              console.log(user);
            // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
            // ..
            });
        }else{
          signInWithEmailAndPassword(auth, this.email, this.password)
            .then((userCredential) => {
              // Signed in
              
              const user = userCredential.user;
              this.setCookie(user);
              this.$router.push({name: 'Home'});
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
            });
        }
      },
      setCookie(u){
        const user = {
          email: u.email,
          uid: u.uid,
          accessToken: u.accessToken,
        }
        Cookies.set('user', JSON.stringify(user), { expires: 365 });
      }
    },
  }
</script>

<style>

</style>