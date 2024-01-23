# WEEK1

## 과제 소개

jsx를 이용한 위젯 구현

<hr>

## 과제 기간

2024.01.22(1일)

<hr>

## 개발 환경

vite
React JS

<hr>

## 개발 과정

### 계획

날씨 및 주식 관련 위젯을 캐러셀로 넘여볼 수 있게 구현 (swiper 사용x)

### 과정

**- props로 넘겨줄 데이터 분리**
[/src/weeks/week2/week2_widget.jsx]

- 날씨, 주식의 경우 받아오는 데이터의 유형이 많이 달라. 어떻게 데이터를 구조화 할지 고민이 되었다. 큰 글씨가 올 부분을 mainText로 지정했으나, 데이터에 어울리는 명칭이 아니라 추후 고민 필요.

```jsx
const widgetData = {
  weather: {
    mainText: "-0.9°",
    subText: ["어제보다 1.3° 낮아요"],
    image: {
      name: "Partly Cloudy",
      src: "week2/weather/partly_cloudy.png",
      alt: "부분적으로 구름",
    },
  },
  fineDust: {
    mainText: "13 좋음",
    subText: ["미세먼지"],
    image: {
      name: "Fine Dust",
      src: "week2/weather/fineDust.png",
      alt: "미세먼지 좋음",
    },
  },
  kosdaq: {
    mainText: "859.65",
    subText: ["코스닥", "⏷ 0.97%"],
  },
};
```

**- Widget 컴포넌트 props의 구조분해할당**
[/src/weeks/week2/components/widget.jsx]

- 직접 props를 구조분해할당을 해주었다. 받아오는 props들 유효성 검사를 해야한다는 eslint 오류 계속 발생하였으나 뤼튼에 물어보니 propstype 패키지 설치를 권함.. 다른 방법을 없는지 궁금해졌다. (조건문으로 직접 유효성 검사를 넣어주어도 동일한 오류 발생)

```jsx
const Widget = ({ kind, data }) => {
  const widgetKind = `widget-${kind}`;
  const { mainText, subText, image } = data;
  //...
};
```

**- props에 image 데이터가 있다면 렌더링**
[/src/weeks/week2/components/widget.jsx]

- && 조건을 이용하여 image 데이터가 있을 경우 figure 요소 반환하여 렌더링 하도록 실행

```jsx
{
  image && (
    <figure>
      <img src={image.src} alt={image.alt} />
    </figure>
  );
}
```

<hr>

## 결과

![widget 결과](https://github.com/lin0211/react-hw/assets/139965934/998047bf-beb8-4074-bd64-0e0ca236c129)

<hr>

## 생각

props에 복잡한 오브젝트를 한번에 넣는것이 옳은 일인지 궁금해졌다. 또한 props들 유효성 검사가 필요하다고 하는 eslint 오류에 대응할 방법이 알고 싶어 졌다.
