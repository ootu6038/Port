<template>
  <v-container>
    <v-row>
      <v-col class="text-black text-h5 font-weight-bold d-flex justify-start">来歴</v-col>
    </v-row>
  </v-container>
  <v-divider></v-divider>
  <div><span class="text-black ">名前==</span>藤原 28歳</div>
  <v-divider></v-divider>
  <div><span class="text-black ">最寄り駅==</span>大森駅</div>
  <v-divider></v-divider>
  <div><span class="text-black ">学歴==</span>堺東高等学校中退 大阪商業大学経済学部卒業</div>
  <v-divider></v-divider>
  <div><span class="text-black ">卒業後==</span>大学卒業と同時に上京し、俳優として1年半活動のちにフリーターとして就業</div>
  <v-divider></v-divider>
  <div><span class="text-black ">職歴==</span>Webライティング,土木業,塾講師,牛丼屋,カフェ(現在に至るまで正社員として働いた事なし)</div>
  <v-divider></v-divider>
  <div><span class="text-black ">直近の職歴==</span>ポスティング&デリバリー会社(大田区エリア所長)(1年6ヵ月)(業務委託)</div>
  <v-divider></v-divider>
  <v-container>
    <v-row>
      <v-col class="text-black text-h5 font-weight-bold d-flex justify-start">スキル</v-col>
    </v-row>
  </v-container>

  <v-divider></v-divider>
  <div><span class="text-black ">タイピングスキル==</span>ブラインドタッチができる程度<v-rating length="3" size="16" readonly
      v-model="rating"></v-rating>
  </div>
  <v-divider></v-divider>
  <div><span class="text-black ">プログラミング経験==</span>実務経験なし(Website、Qiitaなどから独学9ヵ月)</div>
  <v-divider></v-divider>
  <div><span class="text-black ">課題==</span>CSS(特にAnimation),Javascriptを完璧にし、見やすいコードでわかりやすいページを制作する事</div>
  <v-divider></v-divider>
  <div><span class="text-black ">目標==</span>Typescript,Firebase,API,Vueなどを深く学習していきたい</div>
  <v-divider></v-divider>


  <div class="mt-15 pt-15">実務では使い物にならないと思われます。しかし、日々精進して参りまして貴社の戦力になる事、お誓い申し上げます。</div>

</template>

<script>
export default {
  data: () => ({ rating: 1 }),
}
</script>

 <!--<v-container>
    <v-row>
      <v-col v-for="n in 24" :key="n" cols="4">
        <v-card height="200"></v-card>
      </v-col>
    </v-row>
  </v-container>-->



  <!--<h1><router-link :to="{ path: '/List' }">List</router-link></h1>
  <-->