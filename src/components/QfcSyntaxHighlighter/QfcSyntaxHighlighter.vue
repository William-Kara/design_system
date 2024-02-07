<template>
  <pre><code class="language-javascript">
  // code here for example
  function hello(){
     console.log(Hello World)
  }
</code></pre>
  <pre><code class="language-css">p { color: red }</code></pre>
</template>

<script setup>
import { onMounted } from 'vue';
import Prism from 'prismjs';

onMounted(() => {
  window.Prism = window.Prism || {};
  Prism.highlightAll();
});
</script>

<style lang="scss" scoped src="./QfcSyntaxHighlighter.scss" />
<style lang="css" scoped src="./Qfc-Prism.css" />
