<template>
  <div id="app">
      <Typing/>
      <div class="credit">
          <p>Created by: <a href="//fb.com/mehedimi" target="_blank">Mehedi Hasan</a></p>
      </div>
  </div>
</template>

<script>
  import Typing from './components/Typing'
  import expressions from "./expressions";

  export default {
      components: {
          Typing
      },
      mounted() {
          this.$store.commit('SET_EXPRESSION', expressions);
          this.$store.commit('SET_RANDOM_INDEX');
      }
  }
</script>

<style lang="scss">
    .credit {
        text-align: center;
        margin-top: 100px;
        font-family: 'Fira Code', monospace;
        p {
            color: #bbb;
        }
    }
</style>
