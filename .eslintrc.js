module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    extends: "airbnb-base",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        eqeqeq: ["error", "always"],
        quotes: ["error", "single"],
        "indent": ["error", 4],
        "linebreak-style": ["error", "unix"],
        "comma-style": ["error", "last"],
    }
};
