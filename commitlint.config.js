module.exports = { 
  extends: ["@commitlint/config-conventional"],
  rule: {
    'body-max-line-length': [2, 'always', 200],
    'body-min-length': [2, 'always', 10],
    'subject-max-length': [2, 'always', 50],
    'subject-min-length': [2, 'always', 10]
  }

};
