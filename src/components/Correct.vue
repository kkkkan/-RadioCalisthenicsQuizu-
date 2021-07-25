<template>
  <div>
    <div>
      <p class="mb-6 indigo--text font-weight-black text-h4">正解！！</p>
      <p class="mb-6 indigo--text font-weight-medium">また遊んでね。</p>
      <retry-and-share-buttons :twShareText="twShareTx" />
    </div>
  </div>
</template>

<script>
import RetryAndShareButtons from "../views/RetryAndShareButtons.vue";

export default {
  name: "Correct",
  components: { RetryAndShareButtons },
  methods: {},
  data() {
    return {
      twShareTx:
        "おめでとう！全問正解！みごとラジオ体操を正しく並び替えられました！",
    };
  },
};
</script>