# Change Log

All notable changes to the "luaconverter" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [Unreleased]

## [0.0.5] - 2026-07-28

### Fixed
- 修复 npm 依赖的 9 个安全漏洞（8 高危），通过升级 `@vscode/test-cli` 和添加 `overrides` 覆盖 `diff`、`serialize-javascript`、`brace-expansion` 等传递依赖
- 修复 `engines.vscode` 版本与 `@types/vscode` 不一致导致的打包失败
- 为 ESLint v10 创建 `eslint.config.js` flat config 配置文件，替换已删除的 `.eslintrc.json`
- 将 `require('lua-json')` 改为 ESM `import` 语法，并添加类型声明文件

## [0.0.4] - 2024-07-28

### Added
- Initial release：支持 JSON ↔ Lua Table 互转
- 右键菜单快捷操作（JSON 文件→转换为 Lua，Lua 文件→转换为 JSON）