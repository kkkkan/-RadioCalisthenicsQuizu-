<template>
  <div>
    <div>
      <p class="mb-6 indigo--text font-weight-black text-h4">正解！！</p>
      <p class="mb-6 indigo--text font-weight-medium">また遊んでね。</p>
      <v-container>
        <v-row align="center">
          <!--align="center"をつけると「もう一度遊ぶ」が縦方向中央に設置される-->
          <v-col class="d-flex justify-end" cols="6">
            <v-btn
              class="mb-3 white--text"
              color="brown darken-4"
              v-on:click="retry"
            >
              もう一度遊ぶ
            </v-btn>
          </v-col>
          <v-col class="justify-start" cols="6">
            <v-row>
              <!-- style="text-transform: none" -> アルファベットを大文字にしない  -->
              <v-btn
                class="mb-3 white--text"
                color="blue darken-1"
                v-on:click="shareByTwitter"
                style="text-transform: none"
              >
                twitterで結果をシェア
              </v-btn>
            </v-row>
            <v-row>
              <!-- style="text-transform: none" -> アルファベットを大文字にしない  -->
              <v-btn
                class="mb-3 white--text"
                color="deep-purple darken-4"
                v-on:click="shareByFacebook"
                style="text-transform: none"
              >
                Facebookで結果をシェア
              </v-btn>
            </v-row>
            <v-row>
              <!-- style="text-transform: none" -> アルファベットを大文字にしない  -->
              <v-btn
                class="mb-3 white--text"
                color="green accent-4"
                v-on:click="shareByLine"
                style="text-transform: none"
              >
                LINEで結果をシェア
              </v-btn>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
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
      var url = encodeURIComponent(location.href);
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

    shareByFacebook: function () {
      // 現在のurlをエンコード
      var url = encodeURIComponent(location.href);
      // Twitter用のurl作成

      let shareURL = "https://www.facebook.com/sharer/sharer.php?u=" + url;

      location.href = shareURL;
    },

    shareByLine: function () {
      // 現在のurlをエンコード
      var url = encodeURIComponent(location.href);
      // Twitter用のurl作成

      let shareURL = "https://social-plugins.line.me/lineit/share?url=" + url;

      location.href = shareURL;
    },
  },
};
</script>