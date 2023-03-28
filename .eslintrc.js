module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ["plugin:vue/essential", "plugin:vue/recommended", "eslint:recommended", "@vue/prettier"],
    parserOptions: {
        parser: "@babel/eslint-parser",
    },
    rules: {
        "vue/multi-word-component-names": [
            "error",
            {
                ignores: ["index"],
            },
        ],
        "vue/require-default-prop": "off",
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    },
};
