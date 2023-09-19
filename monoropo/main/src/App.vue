<script setup lang="ts">
import { onMounted } from 'vue'
import { a } from 'common';
import { bus } from 'wujie'
const aFunc = () => {
  a.then((result: any) => {
    console.log(result.data, '这是common的方法')
  }).catch((err: any) => {
    console.log(err)
  })
}
bus.$on('vue3', (data: any) => {
  console.log(data, '我是主应用')
})
onMounted(() => {
  aFunc()
})
</script>

<template>
  <div class="container">
    <div>这是主应用</div>
    <WujieVue url="http://127.0.0.1:5173/" name="react" />
    <!-- <WujieVue url="http://127.0.0.1:5174/" name="vue" /> -->
    <WujieVue :props="{ name: '李四', age: 18 }" url="http://127.0.0.1:5174/" name="vue" />
  </div>
  <!-- <RouterView /> -->
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
}
</style>
