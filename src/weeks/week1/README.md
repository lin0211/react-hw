# WEEK1

## 과제 소개

JSX 또는 React API를 사용해, Vanilla 프로젝트에서 구현한
인터페이스의 일부를 마크업하여 웹 브라우저에 렌더링.

<hr>

## 과제 기간

2024.01.19 ~ 2023.01.20

<hr>

## 개발 환경

vite
React JS
Tailwind CSS

```node
$pnpm create vite //react, javascript
$pnpm add -D tailwindcss postcss autoprefixer
```

<hr>

## 개발 과정

### 계획

회원가입 피그마 시안의 태블릿 디스플레이 맞춰 jsx로 마크업, 바닐라 프로젝트와는 다르게 테일윈드로 스타일

### 과정

**- id가 "root" 요소에 Week1 컴포넌트 렌더링**
[/src/main.jsx]

```jsx
ReactDOM.createRoot(document.getElementById("root")).render(<Week1 />);
```

**- 체크리스트 데이터 분리**
[/src/weeks/week1/week1.jsx]

```jsx
const checkList = {
  all: {
    sentence: "모두 동의합니다",
    require: "",
  },
  //...
};
```

**- 데이터 값을 Object.entries를 이용하여 체크리스트 인풋 생성**
[/src/weeks/week1/week1.jsx]

```jsx
<div role="group" className="check-list flex flex-col gap-y-8pxr">
  {Object.entries(checkList).map(([key, value]) => {
    const { sentence, require } = value;
    return (
      <div key={key} role="group">
        <input className="inputList" type="checkbox" id={key} />
        <label htmlFor={key} className="inputLabel">
          <span className="ml-2">{require}</span>
          <span className="ml-1">{sentence}</span>
        </label>
      </div>
    );
  })}
</div>
```

### 결과

![mobile (1)](https://github.com/lin0211/js-homework/assets/139965934/5a2eb0c2-58e8-42e5-bc56-a3cf3f76667a)
