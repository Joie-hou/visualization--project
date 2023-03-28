<template>
    <div
        class="card-tag-container"
        :style="{
            width: conWidth + 'px',
            height: conHeight + 'px',
            paddingLeft: conPdLeft + 'px',
            fontSize: conFoSize + 'px',
            color: conColor,
            backgroundImage: 'url(' + conBaImg + ')',
        }"
        @click="clickHandler"
    >
        <slot>卡片标题</slot>
    </div>
</template>
<script>
export default {
    props: {
        conWidth: {
            type: Number || String,
            default: 300,
        },
        conHeight: {
            type: Number || String,
            default: 60,
        },
        conPdLeft: {
            type: Number || String,
            default: 40,
        },
        conFoSize: {
            type: Number || String,
            default: 20,
        },
        conColor: {
            type: String,
            default: "#fff",
        },
        conBaImg: {
            type: String,
            default: "",
        },
    },
    data() {
        return {};
    },
    methods: {
        clickHandler() {
            this.$emit("conClick");
        },
    },
};
</script>
<style lang="scss">
.card-tag-container {
    position: relative;
    z-index: 10;
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
        transition: all 2s;
    }
}
</style>
