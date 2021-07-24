<template>
  <div>
    <div>
      <p class="mb-6 indigo--text font-weight-black text-h4">正解！！</p>
      <p class="mb-6 indigo--text font-weight-medium">また遊んでね。</p>
      <v-container>
        <v-row>
          <v-col class="d-flex justify-end">
            <v-btn
              class="mb-3 white--text"
              color="green darken-1"
              v-on:click="retry"
            >
              もう一度遊ぶ
            </v-btn>
          </v-col>
          <v-col class="d-flex justify-start">
            <!-- style="text-transform: none" -> アルファベットを大文字にしない  -->
            <v-btn
              class="mb-3 white--text pb-3 pt-3"
              color="blue darken-1"
              v-on:click="shareByTwitter"
              style="text-transform: none"
            >
              twitterで結果をシェア
            </v-btn>
          </v-col>
        </v-row></v-container
      >
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
    shareByTwitter: function () {
      // 現在のurlをエンコード
      var url = "https://radio-calisthenics-quizu.netlify.app/";//encodeURIComponent(location.href);
      // Twitter用のurl作成

      let shareURL =
        "https://twitter.com/intent/tweet?text=" +
        "おめでとう！全問正解！みごとラジオ体操を正しく並び替えられました！" +
        "&hashtags=" +
        "ラジオ体操を正しく並び替え" +
        "&url=" +
        url;

      location.href = shareURL;
    },
  },
};
</script>