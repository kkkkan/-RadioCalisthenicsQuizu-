<template>
  <div>
    <p class="mb-6 indigo--text font-weight-black">残念 不正解！！</p>
    <p class="mb-6 indigo--text">正解は以下です。</p>

    <ul>
      <div v-for="item in items" :key="item.id" class="item">
        {{ item.name }}
      </div>
    </ul>
  </div>
</template>

<script>
// 正しい並び
let _rightItmes = [
  { id: 1, name: "伸びの運動" },
  { id: 2, name: "腕を振って脚を曲げ伸ばす運動" },
  { id: 3, name: "腕を回す運動" },
  { id: 4, name: "胸を反らす運動" },
  { id: 5, name: "体を横に曲げる運動" },
  { id: 6, name: "体を前後に曲げる運動" },
  { id: 7, name: "体をねじる運動" },
  { id: 8, name: "腕を上下に伸ばす運動" },
  { id: 9, name: "体を斜め下に曲げ胸を反らす運動" },
  { id: 10, name: "体を回す運動" },
  { id: 11, name: "両脚で跳ぶ運動" },
  { id: 12, name: "腕を振って脚を曲げ伸ばす運動" },
  { id: 13, name: "深呼吸" },
];

export default {
  name: "Failure",
  components: {},
  methods: {},
  data() {
    return {
      options: {
        animation: 200,
      },
      items: _rightItmes,
    };
  },
};
</script>


<style scoped>
.item {
  width: 20%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #7f7f7f;
  border-radius: 10px;
  background-color: #ffffff;
}
.item:hover {
  cursor: grab;
}
.item:active {
  cursor: grabbing;
}
</style>