<script setup lang="ts">
import HelloTsx from './components/hello/HelloTsx';
import HelloEmit from './components/hello/HelloEmit';
const onClick = (e: any) => {
  console.log('onClick', e);
};
const onChange = (id: any) => {
  console.log('number', id);
};
</script>

<template>
  <div>
    <div>
      <HelloTsx b="hello tsx" @click="onClick" />
      <br />
      <HelloEmit b="hello emit" @change="onChange" />
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
