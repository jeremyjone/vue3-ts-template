# Vue 3 + Typescript + Vite 模板

工程化的模板。模板包括：

[Vue 3.x](https://github.com/vuejs/vue-next)
[Vue Router 4.x](https://github.com/vuejs/vue-router-next)
[Axios](https://github.com/axios/axios)
[Vuex 4.x](https://github.com/vuejs/vuex/tree/4.0)

提供了测试组件
[Jest](https://github.com/facebook/jest)

配置了 ts 模板

同时配置了 `git` 流以及 `husky`

预置了所有 css 依赖，根据需要自行删改 package.json 即可。

## 使用

### 一、添加模板

#### 方法一

通过 [`degit`](https://github.com/Rich-Harris/degit) 安装：

首先安装 `degit`

```sh
npm install -g degit
```

然后可以下载模板

```sh
npx degit jeremyjone/vue3-ts-template#main <project-name>
```

#### 方法二

可以直接 clone 项目到本地即可

```sh
git clone https://github.com/jeremyjone/vue3-ts-template.git
mv vue3-ts-template <project-name>
```

### 运行

进入目录

```sh
cd <project-name>
```

添加依赖

```sh
npm install
# or
yarn
```

运行项目

```sh
npm run dev
#or
yarn dev
```

### 常用命令

```sh
npm run dev              # 运行
npm run build            # 打包
npm run serve            # 本地预览生产构建产物
npm run lint             # 执行 eslint
npm run lint:fix         # 执行 eslint 并修复
npm run lint-staged      # 执行 lint-staged
npm run test:unit        # 运行 unit 测试
npm run commit           # 提交代码
```

## 目录结构

```sh
├──.husky/                  # husky 配置文件目录
├──.vscode/                 # vscode 配置文件目录
├── public/
└── src/
    ├── assets/             # 静态资源目录
    ├── components/         # 公共组件目录
    ├── pages/              # 页面组件目录
    ├── router/             # 路由配置目录
    ├── store/              # 状态管理配置目录
    ├── typings/            # 类型文件目录
    ├── styles/             # 通用 CSS 目录
    ├── utils/              # 工具方法目录
    ├── App.vue
    ├── main.ts
    ├── shims-vue.d.ts
├── test/unit/              # 单元测试目录
├── .cz-config.jz           # 提交选项模板文件
├── .editorconfig           # 编辑器配置文件
├── .eslintignore           # eslint 忽略文件
├── .eslintignore           # eslint 忽略文件
├── .eslintrc.js            # eslint 配置文件
├── .gitignore              # git 忽略文件
├── .prettierrc             # prettier 格式化配置文件
├── .babel.config.js        # babel 配置文件
├── .commitlint.config.js   # git 提交内容检测文件
├── index.html              # 项目主页
├── jest.config.js          # 测试配置文件
├── LICENSE                 # 授权文件
├── package.json
├── README.md               # 文档
├── tsconfig.json           # TypeScript 配置文件
├── vite.config.ts          # vite 配置文件
```

## Todo List

vue-jest 版本冲突问题，用^26 代替^27，影响：jest、babel-jest、ts-jest。[Github](https://github.com/vuejs/vue-jest/issues/351)
