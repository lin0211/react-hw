# WEEK2 - 주간 과제

## 과제 소개

바닐라 프로젝트에서 동적으로 렌더링했던 UI 조각을 선택.
바닐라 프로젝트에서 활용했던 데이터베이스의 데이터를 JSON 파일로 로컬 드라이브에 저장.
JSON 데이터를 불러와 마크업에 연결하여 UI를 구현.
필요한 경우, 리스트 렌더링을 활용.

<hr>

## 과제 기간

2024.01.25 ~ 2023.01.25

<hr>

## 개발 환경

- vite
- React JS
- Swiper JS
- PocketBase

<hr>

## 개발 과정

### 계획

![피그마 티빙 시안](https://github.com/FRONTENDSCHOOL8/JFAM/assets/139965934/d7c54e71-e17a-4e1b-aa87-b0222f9254e1)

- 티빙 바닐라 프로젝트의 메인 페이지의 꼭 봐야하는 콘텐츠 Swiper를 이용한 캐러셀 구현
- 포켓베이스를 이용한 데이터 베이스 불러오기
- 불러온 데이터 케러셀에 렌더링

### 과정

**Slide 컴포넌트 만들기**

props로 데이터를 받아 이미지 소스, 대체 텍스트, 이미지 캡션에 해당하는 데이턴 렌더링

[/src/weeks/week2-hw/components/Slide.jsx]

```jsx
const Slide = ({ data }) => {
  return (
    <figure>
      <img src={getPbImageURL(data)} alt={data.title} />
      <figcaption>{data.title}</figcaption>
    </figure>
  );
};
```

**비동기 통신으로 포켓베이스 데이터 불러와서 저장**

[/src/weeks/week2-hw/week2-hw.jsx]

```jsx
const pbData = await pb.collection("program_thumbnail").getFullList({
  sort: "@random",
});
```

**Swiper 컴포넌트 사용**

Swiper React Components 사용

- 슬라이드의 갭을 8로, 화면에 보이는 슬라이드 갯수를 6.5로 속성에 넣어줌

**포켓베이스 데이터를 map을 이용하여 리스트 렌더링**

- && 조건식을 이용하여 pbData 값이 있을때 데이터를 SwiperSlide 컴포넌트로 재 생산
- SwiperSlide 리스트에 key 속성을 만들어 데이터 식별을 도움
- Slide 컴포넌트 속성으로 데이터 전달

[/src/weeks/week1/week1.jsx]

```jsx
<Swiper spaceBetween={8} slidesPerView={6.5}>
  {pbData &&
    pbData.map((item) => {
      return (
        <SwiperSlide key={item.id}>
          <Slide data={item} />
        </SwiperSlide>
      );
    })}
</Swiper>
```

### 결과

![결과](https://github.com/FRONTENDSCHOOL8/JFAM/assets/139965934/adfa7abb-7e11-4247-ae1f-21ea3dee1f0d)
