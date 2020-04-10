<template>
  <div id="app">
      <Typing/>
      <div class="credit">
          <p>Created by: <a :href="links[0]" target="_blank">Mehedi Hasan</a></p>
      </div>
  </div>
</template>

<script>
  import Typing from './components/Typing'
  import expressions from "./expressions";
  import shuffle from 'lodash.shuffle';

  export default {
      components: {
          Typing
      },
      computed: {
          links() {
              return shuffle([
                  'https://fb.com/mehedimi',
                  'https://github.com/mehedimi',
                  'https://twitter.com/mehedimi'
              ]);
          }
      },
      mounted() {
          this.$store.commit('SET_EXPRESSION', shuffle(expressions));
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
