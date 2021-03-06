# @nice-move/prettier-config [<img src="https://raw.githubusercontent.com/prettier/prettier-logo/master/images/prettier-icon-light.png" alt="prettier" height="80" align="right">][prettier]

A [prettier] config created by personal preferences.

[![npm][npm-badge]][npm-url]
[![github][github-badge]][github-url]
![node][node-badge]

[prettier]: https://prettier.io/
[npm-url]: https://www.npmjs.com/package/@nice-move/prettier-config
[npm-badge]: https://img.shields.io/npm/v/@nice-move/prettier-config.svg?style=flat-square&logo=npm
[github-url]: https://github.com/airkro/nice-move/tree/master/packages/prettier-config
[github-badge]: https://img.shields.io/npm/l/@nice-move/prettier-config.svg?style=flat-square&colorB=blue&logo=github
[node-badge]: https://img.shields.io/node/v/@nice-move/prettier-config.svg?style=flat-square&colorB=green&logo=node.js

## Extname support

- .gql .md
- .css .less .scss
- .cjs .mjs .js .jsx
- .vue .html .xml .svg
- .json .yml .yaml .toml
- .npmrc .yarnrc .editorconfig

## Installation

```bash
npm install prettier @nice-move/prettier-config --save-dev
```

## Usage

Create: .editorconfig

```ini
[*]
charset = utf-8
end_of_line = lf
indent_size = 2
indent_style = space
insert_final_newline = true
max_line_length = 80
quote_type = single
tab_width = 2
trim_trailing_whitespace = true
```

Add to package.json

```json
{
  "prettier": "@nice-move/prettier-config"
}
```

Then run

```bash
prettier --write **/*.{js,jsx,vue,css,scss,md}
```

## Tips

This config including [@nice-move/prettier-plugin-package-json
](https://github.com/airkro/nice-move/tree/master/packages/prettier-plugin-package-json#readme)
