<template>
    <div class="app__window">
        <TypingWindow />
        <TypeInput />
        <template v-if="isRunning">
            <Countdown />

            <ul class="help">
                <li>Type <code>next</code> to switch next text</li>
                <li>Type <code>stop</code> to stop countdown</li>
                <li>Type <code>pause</code> to pause countdown</li>
                <li>Type <code>resume</code> to resume countdown</li>
            </ul>
        </template>
    </div>
</template>

<script>
    import TypingWindow from './TypingWindow'
    import TypeInput from './TypeInput'
    import Countdown from './Countdown'
    import { mapState } from 'vuex'

    export default {
        components: {
            TypeInput,
            TypingWindow,
            Countdown
        },
        computed: {
            ...mapState([
                'isRunning'
            ])
        }
    }
</script>

<style lang="scss">
    .app__window {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        font-family: 'Fira Code', monospace;

        .help {
            margin: 20px 0 0;
            color: #bbbbbb;
            list-style: none;
            padding: 0;
            transition: color 0.4s;

            &:hover {
               color: #000;
            }
            li {
                margin-bottom: 10px;

                code {
                    background-color: #ddd;
                    padding: 2px 5px;
                    border-radius: 4px;
                }
            }
        }
    }
</style>