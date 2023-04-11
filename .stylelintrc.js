module.exports = {
    extends: [
        "stylelint-config-standard-scss",
        "stylelint-config-recess-order",
        "stylelint-config-standard-vue/scss",
        "stylelint-config-prettier",
    ],
    plugins: ["stylelint-no-unsupported-browser-features"],
    rules: {
        "plugin/no-unsupported-browser-features": [
            true,
            {
                ignorePartialSupport: true,
                browserslist: ["> 1%", "last 2 versions", "not dead"],
            },
        ],
        "selector-class-pattern": "^(([a-z][a-z0-9]*)(-[a-z0-9]+)*)|(van-[a-z0-9]*(_[a-z0-9]*)?)$",
        // 选择器前是否有空行
        "rule-empty-line-before": "never-multi-line",
        // 选择器能否为空
        "block-no-empty": null,
        // https://stylelint.io/user-guide/rules/no-descending-specificity/#ignore-selectors-within-list
        "no-descending-specificity": null,
    },
};
