<template>
  <div id="app">
    <v-app>
      <div>
        <v-app-bar color="deep-purple accent-4" dark>
          <v-toolbar-title>ラジオ体操を正しく並び替え！</v-toolbar-title>
        </v-app-bar>
      </div>
      <v-content id="content">
        <router-view />
      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#content{
  margin-top: 20px;
}
</style>

