<template>
    <div class="typing__window">
        <h1 v-if="isRunning" class="expression" :class="{'has-error': hasError}">
            <span :class="{typed: (index + 1) <= typeWorldLength}" v-for="(char, index) in displayCharacters" :key="index">{{ char }}</span>
        </h1>
        <h1 class="expression" v-else>
            Type "start" to begin
        </h1>
    </div>
</template>

<script>
    import { mapGetters, mapState, mapMutations } from 'vuex';
    export default {
        computed: {
            ...mapGetters([
                'hasError',
                'typeWorldLength',
                'displayCharacters'
            ]),
            ...mapState(['word', 'input', 'isRunning'])
        },
        methods: {
            ...mapMutations([
                'START', 'STOP', 'NEXT_PLEASE', 'PAUSE', 'RESUME'
            ])
        },
        watch: {
            input(text) {
                switch (text) {
                    case 'start':
                        this.START()
                        break;
                    case 'stop':
                        this.STOP();
                        break;
                    case 'pause':
                        this.PAUSE();
                        break;
                    case 'resume':
                        this.RESUME()
                        break;
                    case 'next':
                        this.NEXT_PLEASE();
                        break;
                    default:
                        if (text.length && text.length === this.displayCharacters.length) {
                            this.NEXT_PLEASE()
                        }
                }
            }
        }
    }
</script>

<style lang="scss">
    .typing__window {
        margin-top: 60px;
        margin-bottom: 60px;
        .expression {
            padding: 10px;
            transition: background-color 0.5s;
            span {
                &:first-child {
                    padding-left: 10px;
                    border-bottom-left-radius: 4px;
                    border-top-left-radius: 4px;
                }
                &:last-child {
                    padding-right: 10px;
                    border-bottom-right-radius: 4px;
                    border-top-right-radius: 4px;
                }
            }
            .typed {
                color: #fff;
                background-color: #00b894;
            }
        }
        .has-error {
            .typed {
                background-color: #e17055;
            }
        }
    }
</style>