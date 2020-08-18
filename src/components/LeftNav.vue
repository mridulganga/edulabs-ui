<template>
  <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app>
    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" :to="item.link">
        
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "LeftNav",
  data() {
    return {
      items: [
        { title: "Top Labs", icon: "mdi-view-dashboard", link: "/" },
        { title: "Categories", icon: "mdi-image", link: "/categories" },
        { title: "Doing Labs", icon: "mdi-help-box", link:"/doingLabs" },
        { title: "College Bundles", icon: "mdi-view-dashboard", link:"/collegeBundles" },
        { title: "Certificates", icon: "mdi-image",link:"/certificates" },
        { title: "Users", icon: "mdi-help-box", link:"/users" },
      ],
    };
  },
};
</script>

<style>
</style>