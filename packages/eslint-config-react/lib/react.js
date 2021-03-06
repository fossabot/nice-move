const { env, parser } = require('./babel');

module.exports = {
  env,
  parser,
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/static-property-placement': ['error', 'static public field'],
    'react/destructuring-assignment': 'off',
    'react/jsx-boolean-value': ['error', 'always'],
    'react/state-in-constructor': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
};
