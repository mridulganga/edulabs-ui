<template>
  <v-app id="inspire">

    <LeftNav/>

    <TopNav title="Users"/>

    <v-main>
      <v-container>
        
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import LeftNav from '@/components/LeftNav.vue'
import TopNav from '@/components/TopNav.vue'
  export default {
    name: "Users",
    components:{
      LeftNav,
      TopNav
    },
    data: () => ({
      
    }),
  }
</script>