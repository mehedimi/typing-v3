<template>
    <div class="countdown">
        <h2 v-html="countdown"></h2>
        <h2>
            <span class="correct">{{ correct }}</span> - <span class="wrong">{{ wrong }}</span>
        </h2>
    </div>
</template>

<script>
    import { mapMutations, mapGetters, mapState } from 'vuex'

    export default {
        mounted() {
            this.START_TIMER();
        },
        computed: {
            ...mapGetters([
                'countdown'
            ]),
            ...mapState([
                'correct',
                'wrong'
            ])
        },
        methods: {
            ...mapMutations([
                'START_TIMER'
            ])
        }
    }
</script>

<style lang="scss">
    .countdown {
        margin-top: 40px;
        text-align: center;
        h2{
            color: #aaa;
        }

        .correct {
            color: #00b894;
        }
        .wrong {
            color: #e17055;
        }
    }
</style>