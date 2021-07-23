<template>
  <div>
    <p class="mb-6 indigo--text font-weight-black">
      13個の体操メニューを並び替えて正しいラジオ体操の順番にしてください。
    </p>
    <draggable :options="options" element="ul">
      <div v-for="item in items" :key="item.id" class="item">
        {{ item.name }}
      </div>
    </draggable>
    <div>
      <v-btn
        class="mb-3 white--text"
        color="blue darken-4"
        v-on:click="startFunc"
      >
        {{ button_name }}
      </v-btn>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";

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

// シャッフルしたリストを作成
function _getShuffuledArray() {
  var array = [];
  for (var i = 0; i < _rightItmes.length; i++) {
    array[i] = _rightItmes[i];
  }
  for (var i = array.length - 1; 0 < i; i--) {
    // 0〜(i+1)の範囲で値を取得
    var r = Math.floor(Math.random() * (i + 1));

    // 要素の並び替えを実行
    var tmp = array[i];
    array[i] = array[r];
    array[r] = tmp;
  }
  return array;
}

// _rightItmesと渡された配列が同じ並びになっているか判断する
// trueなら同じ並びになっている
function _checkResult(array) {
  if (array.length != _rightItmes.length) {
    // 無いはずだが念のため
    return false;
  }
  for (var i = 0; i < array.length; i++) {
    // ひとつひとつ正しいかチェック
    if (array[i] != _rightItmes[i]) {
      return false;
    }
  }
  return true;
}

export default {
  name: "Quizu",
  components: { draggable },
  methods: {
    startFunc: function () {
      if (!this.isStarting) {
        this.button_name = "終了";
        this.items = _getShuffuledArray();
        this.isStarting = true;
      } else {
        var isSuccess = _checkResult(this.items);
        if (isSuccess) {
          // クイズに正解していたら
          this.button_name = "正解";
        } else {
          // 間違っていたら
          this.button_name = "間違い";
        }
      }
    },
  },
  data() {
    return {
      options: {
        animation: 200,
      },
      items: [],
      button_name: "スタート",
      isStarting: false,
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