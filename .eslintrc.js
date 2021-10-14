module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "plugin:jest/recommended",
    "airbnb-base",
    "airbnb-typescript/base",
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaVersion: 13,
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    project: ["./tsconfig.json"],
    extraFileExtensions: [".vue"]
  },
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly"
  },
  plugins: ["vue", "@typescript-eslint"],
  parser: "vue-eslint-parser",
  settings: {
    "import/resolver": {
      alias: {
        map: [["@", "./src"]],
        extensions: [".js", ".jsx"]
      }
    }
  },
  rules: {
    // 关于 eslint 更多规则可以查阅 https://eslint.org/docs/rules
    // airbnb 风格指南：https://github.com/airbnb/javascript
    // airbnb 中文指南：https://github.com/lin-123/javascript

    // 配置 console 与 debugger
    "no-console":
      process.env.NODE_ENV === "production"
        ? ["error", { allow: ["info", "warn", "error"] }]
        : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",

    // 解决 prettier 行尾报错
    "prettier/prettier": ["error", { endOfLine: "auto" }],

    // 【必须】缩进 2 个空格
    // indent: [
    //   "error",
    //   2,
    //   { SwitchCase: 1, ObjectExpression: 1, offsetTernaryExpressions: true }
    // ],
    // 【必须】换行符风格
    // "linebreak-style": [
    //   "error",
    //   process.platform === "win32" ? "windows" : "unix"
    // ],
    // 【必须】单引号
    // quotes: ["error", "single", { avoidEscape: true }],
    // 【必须】始终适用分号
    // semi: ["error", "always"],
    // 【必须】驼峰命名
    // camelcase: ["error", { properties: "never" }],
    // 【必须】对象短写
    // "object-shorthand": ["error", "always"],
    // 【必须】数组不要保持两侧间距
    // "array-bracket-spacing": [
    //   "error",
    //   "never",
    //   {
    //     objectsInArrays: false,
    //     arraysInArrays: false
    //   }
    // ],
    // 【必须】全等
    // eqeqeq: ["error", "always"],
    // 【必须】数组回调方法强制执行 return 语句
    // "array-callback-return": "error",
    // 【必须】箭头函数中箭头保持两侧间距
    // "arrow-spacing": "error",
    // 【必须】视 var 为块作用域
    // "block-scoped-var": "error",
    // 【必须】同行块级内容保持两侧间距
    // "block-spacing": "error",
    // 【必须】大括号样式，允许单行
    // "brace-style": ["error", "1tbs", { allowSingleLine: true }],

    // 关闭 ts 声明 any 的报错
    // "@typescript-eslint/no-explicit-any": "off",
    // 关闭 ts 中函数缺少返回类型的报错
    // "@typescript-eslint/explicit-module-boundary-types": "off",

    // 关于 vue 更多规则可以查阅 https://eslint.vuejs.org/rules
    "vue/max-attributes-per-line": "off",
    "vue/require-default-prop": "off",
    "vue/require-explicit-emits": "off",
    "vue/script-setup-uses-vars": "error",
    "vue/no-multiple-template-root": "off",
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
          normal: "always",
          component: "always"
        },
        svg: "always",
        math: "always"
      }
    ]
  }
};
