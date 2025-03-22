module.exports = { 
  extends: ["@commitlint/config-conventional"],
  rules: {
    'header-max-length': [2, 'always', 200],
    'header-min-length': [2, 'always', 20],
    'body-max-line-length': [2, 'always', 200],
    'body-min-length': [2, 'always', 20],
    'subject-max-length': [2, 'always', 50],
    'subject-min-length': [2, 'always', 0],
  }

};
