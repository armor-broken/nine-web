1. 创建项目

```
npx create-react-app nine-web --template typescript
```

2. tsconfig 设置绝对路径地址: "baseUrl": "./src"
3. 格式化设置（https://prettier.io/docs/en/install.html）
   - 安装：yarn add --dev --exact prettier
   - 配置文件：echo {}> .prettierrc.json
   - git commit 之前格式化，配置：https://prettier.io/docs/en/precommit.html

```
npx mrm lint-staged
```

- 解决 ESLint 冲突：
  - yarn add eslint-config-prettier -D

```
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest",
      "prettier"
    ]
  },
```

4. 规范 git 提交：https://github.com/conventional-changelog/commitlint
   - yarn add @commitlint/{config-conventional,cli}

```
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "commit-msg": "commitlint -E HUSKY_GIT_PARMAMS"
    }
  },
```

- 提交规则：https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional

5. MOCK 方案（json-server）
   https://github.com/typicode/json-server
   - 全局安装：npm install -g json-server
   - 项目安装：yarn add json-server -D
   - 创建文件夹（`__`意思为与项目无关辅助存在）：`__json_server_mock__`

6. commitlint
- # 主要type
feat:     增加新功能
fix:      修复bug

# 特殊type
docs:     只改动了文档相关的内容
style:    不影响代码含义的改动，例如去掉空格、改变缩进、增删分号
build:    构造工具的或者外部依赖的改动，例如webpack，npm
refactor: 代码重构时使用
revert:   执行git revert打印的message

# 暂不使用type
test:     添加测试或者修改现有测试
perf:     提高性能的改动
ci:       与CI（持续集成服务）有关的改动
chore:    不修改src或者test的其余修改，例如构建过程或辅助工具的变动