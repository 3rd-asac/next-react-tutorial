module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: [
        // 필수
        "airbnb", // 지양하자
        "plugin:prettier/recommended",
    ],
    overrides: [
        // 꼭 필요없을 것이다
        {
            env: {
                node: true,
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script",
            },
        },
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: [
        // 필수
        "@typescript-eslint",
        "react",
        "prettier", // extends로 가는게 좋다
    ],
    rules: {
        // 필수
        // "@typescript-eslint/no-unused-vars": "warn", //사용안한 변수는 경고
        // "react/no-array-index-key": "off", // key값으로 index를 사용할수 있다.
        // "arrow-body-style": "off", //화살표 함수 안에 return을 사용 할 수 있다.
        // "react/no-unescaped-entities": "off", //문자열 내에서 " ' > } 허용
        // //"implicit-arrow-linebreak": "off", // 화살표 함수 다음에 줄 바꿈을 사용할 수 있다.
        // "spaced-comment": "on", //주석을 뒤에 달 수 있다.
        // "operator-linebreak": "on", //연산자 다음 줄 바꿈을 사용 할 수 있다.
        // "react/react-in-jsx-scope": "off", // jsx를 사용하여도 React를 꼭 import 하지 않아도 된다.
        // "react/jsx-props-no-spreading": "off", //props를 스프래드 할 수 있다.
        // "react/jsx-curly-newline": "off", // jsx안에 }를 새로운 라인에 사용할 수 있다.
        // "@typescript-eslint/no-use-before-define": ["warn"], // 선언하기 전에 사용 한다면 경고
        "react/jsx-filename-extension": [
            1,
            { extensions: [".js", ".jsx", ".tsx"] }, //jsx사용가능한 확장자 설정
        ],
        "prettier/prettier": "error", // 필요 없어보인다.
    },
};
