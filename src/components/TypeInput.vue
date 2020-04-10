<template>
    <div class="columns">
        <div class="is-one-third column is-offset-one-third">
            <input autofocus spellcheck="false" v-model="$store.state.input" placeholder="Start Typing" type="text" class="input">
        </div>
    </div>
</template>

<style lang="scss">
    .input {
        text-align: center;
        border: none;
        border-bottom: 1px solid #ddd;
        outline: none;
        font-size: 20px;
        font-weight: 400;
        width: 400px;

        &:focus {
            border-bottom-color: transparent;
        }
        &::placeholder {
            font-size: 18px;
        }
    }
</style>