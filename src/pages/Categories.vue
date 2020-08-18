<template>
  <v-app id="inspire">

    <LeftNav/>

    <TopNav title="Categories"/>

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
    name: "Categories",
    components:{
      LeftNav,
      TopNav
    },
    data: () => ({
      
    }),
  }
</script>