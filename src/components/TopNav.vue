<template>
      <v-app-bar
    dense
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="blue darken-3"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-4"
      >
        <span class="hidden-sm-and-down">{{title}}</span>
      </v-toolbar-title>
      <v-text-field
      dense
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="hidden-sm-and-down"
      ></v-text-field>
      <v-spacer></v-spacer>
    
      <v-btn icon>
        <v-icon @click="userProfile">mdi-account</v-icon>
      </v-btn>
      
    </v-app-bar>
</template>

<script>
export default {
    name: "TopNav",
    methods:{
    userProfile(){
      this.$router.push("/userProfile")
    }
  },
    props:{
        title: String
    }

}
</script>

<style>

</style>