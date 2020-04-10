import Vue from 'vue';
import Vuex from 'vuex';
import strComparison from "./regex-matcher";

Vue.use(Vuex);


export default new Vuex.Store({
    state: {
        input: '',
        word: '',
        isRunning: false,
        expressions: [],
        startTime: 0,
        seconds: 0,
        minutes: 0,
        timer: null,
        wrong: 0,
        correct: 0,
        index: 0
    },
    getters: {
        hasError(state) {
            return !strComparison(state.word, state.input)
        },
        typeWorldLength(state) {
            return state.input.length
        },
        displayCharacters (state) {
            return state.word.split('')
        },
        countdown(state) {
            return `${state.minutes}:${state.seconds}`;
        }
    },
    mutations: {
        START(state) {
            if (!state.isRunning) {
                state.isRunning = true
                state.wrong = 0;
                state.correct = 0;
                this.commit('NEXT_PLEASE')
            }
        },
        STOP(state) {
            if (state.isRunning) {
                state.isRunning = false
                state.input = ''
                clearInterval(state.timer);
            }
        },
        NEXT_PLEASE(state) {
            if (state.input && !state.input.match(/next|start/)) {
                if (this.getters.hasError) {
                    state.wrong++;
                } else {
                    state.correct++;
                }
            }

            if ((state.index + 1) <= state.expressions.length) {
                state.word = state.expressions[state.index];
                state.index++;
            } else {
                state.index = 0;
                state.word = state.expressions[0];
            }
            state.input = '';
        },
        START_TIMER(state, init) {
            if (!init) {
                state.startTime = new Date().getTime()
            }

            state.timer = setInterval(function () {
                const distance = (new Date().getTime() - state.startTime);
                state.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                state.seconds = Math.floor((distance % (1000 * 60)) / 1000);
            }, 1000);
        },
        RESUME(state) {
            if (!state.isRunning) {
                return;
            }

            state.startTime = (new Date()).setSeconds(10);
            this.commit('START_TIMER', true);
            state.input = '';
        },
        PAUSE(state) {
            if (!state.isRunning) {
                return;
            }

            state.input = '';
            clearInterval(state.timer);
        },
        SET_EXPRESSION(state, expressions) {
            state.expressions = expressions;
        },
        SET_RANDOM_INDEX(state) {
            state.index = Math.floor((Math.random() * state.expressions.length))
        }
    }
});