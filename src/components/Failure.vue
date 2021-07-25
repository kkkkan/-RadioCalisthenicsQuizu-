<template>
  <div>
    <p class="mb-3 indigo--text font-weight-black text-h4">残念 不正解！！</p>
    <p class="mb-6 indigo--text font-weight-black text-h4">
      正解数 : {{ correctNum }}/13
    </p>
    <div>
      <retry-and-share-buttons :twShareText="shareTwTx" />
    </div>
    <v-container>
      <v-row>
        <v-col>
          <p class="mb-6 black--text text-h6">あなたの回答</p>
          <ul>
            <div
              v-for="answerItem in answers"
              :key="answerItem.id"
              v-bind:class="[
                answerItem.isCorrect === true ? 'correctItem' : 'incorrectItem',
              ]"
            >
              {{ answerItem.name }}
            </div>
          </ul>
        </v-col>

        <v-col>
          <p class="mb-6 black--text text-h6">正解</p>
          <ul>
            <div v-for="item in items" :key="item.id" class="item">
              {{ item.name }}
            </div>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import RetryAndShareButtons from "../views/RetryAndShareButtons.vue";

// 正しい並び。模範解答。
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

/**
 * 受け取ったユーザーの答えを{id:,name:,isCorrect}の連想配列をもつ配列にする
 */
function makeAnswerArray(answer) {
  var ids = answer.split("_");
  var answerArray = [];
  console.log(ids);
  for (var i = 0; i < ids.length; i++) {
    var item = {};
    for (var j = 0; j < _rightItmes.length; j++) {
      if (_rightItmes[j].id == ids[i]) {
        // "腕を振って脚を曲げ伸ばす運動"だけは２つあるので
        item = _rightItmes[j];
        item["isCorrect"] =
          j == i || (j == 1 && i == 11) || (j == 11 && i == 1);
        break;
      }
    }
    answerArray[i] = item;
  }

  return answerArray;
}

function makeTwShareTx(answers) {
  var score = countCorrectNum(answers);
  return (
    "惜しい！13問中" +
    score +
    "問正解！あなたはラジオ体操を正しく並び替えられるかな？"
  );
}

function countCorrectNum(answers) {
  var score = 0;
  for (var i = 0; i < answers.length; i++) {
    if (answers[i].isCorrect) {
      score++;
    }
  }
  return score;
}

export default {
  name: "Failure",
  components: { RetryAndShareButtons },
  methods: {},
  data() {
    return {
      items: _rightItmes,
      answers: makeAnswerArray(this.$route.query.answer),
      shareTwTx: makeTwShareTx(makeAnswerArray(this.$route.query.answer)),
      correctNum: countCorrectNum(makeAnswerArray(this.$route.query.answer)),
    };
  },
  created() {
    // 変なパラメーターが渡されてきていたら、エラー画面に飛ばす。

    if (this.$route.query.answer == null) {
      // パラメーターなしはおかしい
      this.$router.push("/error");
    }
    // '_'で分ける
    let _ids = this.$route.query.answer.split("_");
    if (_ids.length != 13) {
      // 13個になっていないとおかしい
      this.$router.push("/error");
    }
    // 重複を除く
    let ids = Array.from(new Set(_ids));
    if (ids.length != 13) {
      // そのうえでもまだ13個になっていないとおかしい
      this.$router.push("/error");
    }

    for (var i = 0; i < ids.length; i++) {
      var id = ids[i];
      if (isNaN(id) || id < 1 || id > 13) {
        // そして値が数値且つ範囲が1~13でないとおかしい
        // isNaN(var) : varが数値だったらfalseを返すjavaScriptの関数
        this.$router.push("/error");
      }
    }
  },
};
</script>


<style scoped>
/*模範解答のアイテム */
.item {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #7f7f7f;
  border-radius: 10px;
  background-color: #ffffff;
}
/*ユーザーの答えのうち位置が正解だったアイテム */
.correctItem {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #7f7f7f;
  border-radius: 10px;
  background-color: #ffffff;
}
/*ユーザーの答えのうち位置が間違いだったアイテム */
.incorrectItem {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ff0000;
  border-radius: 10px;
  background-color: #ff000091;
  color: #ffffff;
}
/* スマートフォンで見たとき */
@media only screen and (max-width: 750px) {
  .item {
    width: 80%;
  }
  .correctItem {
    width: 80%;
  }
  .incorrectItem {
    width: 80%;
  }
}
.item:hover {
  cursor: grab;
}
.item:active {
  cursor: grabbing;
}
</style>