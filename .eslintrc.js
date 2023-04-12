// https://eslint.bootcss.com/docs/user-guide/configuring
module.exports = {
    // 默认情况下，ESLint 会在所有父级目录里寻找配置文件，一直到根目录。ESLint 一旦发现配置文件中有 "root": true，它就会停止在父级目录中寻找。相当于一个检索标识
    // https://eslint.bootcss.com/docs/user-guide/configuring#configuration-cascading-and-hierarchy
    root: true,

    // 要在配置文件里指定环境，使用 env 关键字指定你想启用的环境，并设置它们为 true。
    // https://eslint.bootcss.com/docs/user-guide/configuring#specifying-environments
    env: {
        node: true,
    },

    // https://eslint.bootcss.com/docs/user-guide/configuring#extending-configuration-files
    extends: ["plugin:vue/essential", "plugin:vue/recommended", "eslint:recommended", "@vue/prettier"],

    // ESLint 允许你指定你想要支持的 JavaScript 语言选项。
    // https://eslint.bootcss.com/docs/user-guide/configuring#specifying-parser-options
    parserOptions: {
        parser: "@babel/eslint-parser", //https://eslint.bootcss.com/docs/user-guide/configuring#specifying-parser
    },

    // https://eslint.bootcss.com/docs/user-guide/configuring#configuring-rules
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
