<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="white"
      flat
    >
      <v-container class="py-0 fill-height">
        <v-avatar
          class="mr-8"
          color="grey darken-1"
          size="45"
        >
          <img
            src="../assets/ben.jpeg"
            alt=""
            srcset=""
          >
        </v-avatar>
        <v-toolbar-title>Order App</v-toolbar-title>
        <v-spacer />
        <v-icon
          style="cursor: pointer;"
          @click="signOut"
        >
          mdi-logout
        </v-icon>
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col
            class=""
            cols="2"
          >
            <v-sheet rounded="lg">
              <v-list>
                <v-list-item-group
                  v-model="selectedItem"
                  color="primary"
                >
                  <v-list-item
                    v-for="(item, i) in sidebarList"
                    :key="i"
                    :to="item.path"
                  >
                    <v-list-item-icon>
                      <v-icon v-text="item.icon" />
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title v-text="item.name" />
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
              <router-view />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import { getAuth, signOut } from "firebase/auth";
  import Cookies from "js-cookie";
  export default {
    name: 'AppLayout',
    data() {
      return {
        selectedItem: 1,
        items: [
          { text: 'Real-Time', icon: 'mdi-clock' },
          { text: 'Audience', icon: 'mdi-account' },
          { text: 'Conversions', icon: 'mdi-flag' },
        ],
        sidebarList:[
          {
            name: 'Dashboard',
            icon: 'mdi-view-dashboard',
            path: '/'
          },
          {
            name: 'New Order',
            icon: 'mdi-plus-box',
            path: '/new-order'
          },
          {
            name: 'Orders',
            icon: 'mdi-order-bool-ascending',
            path: '/orders'
          },
          {
            name: 'Cooking',
            icon: 'mdi-gas-burner',
            path: '/cooking'
          },
          {
            name: 'Ready',
            icon: 'mdi-moped-outline',
            path: '/ready'
          },
          {
            name: 'Completed',
            icon: 'mdi-check-outline',
            path: '/completed'
          }
        ]
      }
    },
    methods: {
      signOut() {
        const auth = getAuth();
        signOut(auth).then(() => {
          Cookies.remove("user");
          this.$router.push({ name: "Login" });
        }).catch((error) => {
          console.log(error);
        });
      }
    },
  }
</script>