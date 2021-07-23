<template>
  <div>
    <p class="mb-6 indigo--text font-weight-black text-h4">正解！！</p>
    <p class="mb-6 indigo--text font-weight-medium">また遊んでね。</p>
    <div>
      <v-btn class="mb-3 white--text" color="blue darken-4" v-on:click="retry">
        もう一度遊ぶ
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "Correct",
  components: {},
  methods: {
    retry: function () {
      this.$router.push("/");
    },
  },
};
</script>
