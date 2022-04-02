module.exports = {
    extends: [
      // add more generic rulesets here, such as:
      // 'eslint:recommended',
    //   'plugin:vue/vue3-recommended',
      'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
    ],
    rules: {
      "linebreak-style": 0,
      "global-require": 0,
      "eslint linebreak-style": [0, "error", "windows"],
      "vue/component-name-in-template-casing": ["error", "PascalCase"],
      "vue/script-indent": ["error", 2, { "baseIndent": 1 }]
    },
  }