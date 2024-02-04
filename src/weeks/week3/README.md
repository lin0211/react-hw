# WEEK3

## 과제 소개

포켓베이스의 데이터 API 연동하여 데이터의 Create, Read, Delete 기능 구현하기

<hr>

## 과제 기간

2024.02.02 ~ 2023.02.04

<hr>

## 개발 환경

vite
React JS
Tailwind CSS
PocketBase

<hr>

## 개발 과정

### 계획

- 바닐라 프로젝트의 데이터 베이스 불러와 렌더링 하는 파트가 이전 과제와 큰 다름이 없음으로 자율주제로 CRUD 기능을 만들어 보고자 한다.
- 포켓 베이스 'Movie-Review' collection 데이터를 불러와(read) 리스트를 화면에 렌더링한다.
- 영화의 리뷰와 별점을 폼에 적어 제출하여 포켓 베이스 데이터에 추가(create)한다.
- ❌ 버튼으로 데이터 삭제(delete)
- 커스텀 훅 만들기

### 과정

**READ 데이터 렌더링**

포켓베이스에서 가져온 데이터를 useState Hook 사용으로 상태 관리.
useEffect Hook으로 초기 렌더링에만 불러오록 하여 불필요한 렌더링을 막는다.

[/src/weeks/week3/week3.jsx]

```jsx
const [movieReviewLists, setMovieReviewLists] = useState([]);

const getPbDataLists = async () => {
  return await pb
    .collection("Movie_Review")
    .getFullList({
      sort: "created",
    })
    .then((data) => {
      setMovieReviewLists(data);
    });
};

useEffect(() => {
  getPbDataLists();
}, []);
```

\_더 좋은 방식으로 하는 방법이 있을까?-

**포켓베이스에 데이터 전송 / 삭제 함수**

- 전송 삭제 후 다시 리스트를 새로 렌더링 하기 위해 getPbDataLists 함수 사용

[/src/weeks/week3/week3.jsx]

```jsx
const createPbDataList = async (data) => {
  await pb.collection("Movie_Review").create(data);
  getPbDataLists();
};

const deletePbDataList = async (id) => {
  await pb.collection("Movie_Review").delete(id);
  getPbDataLists();
};
```

**기존방식으로 Form 입력 데이터 가져와 전송**

[/src/weeks/week3/week3.jsx]

```jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const inputData = Object.fromEntries(formData.entries());
  const data = {
    title: inputData.inputMovieTitle,
    review: inputData.inputMovieReview,
    rate: inputData.inputMovieRate,
  };
  createPbDataList(data);
  handleFormReset();
};
```

**리액트 방식으로 input의 value 관리**

[/src/weeks/week3/week3.jsx]

```jsx
const handleChange = (e) => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const { name, value } = e.target;
  const nextFormData = {
    ...formData,
    [name]: value,
  };
  setFormData(nextFormData);

  return (
    <FormInputText
      //...
      value={formData.inputMovieTitle}
      onChange={handleChange}
    />
  );
};
```

_form을 submit을 하였을때 데이터 값을 기존의 방식으로 불러왔기 때문에 이 경우 리액트 제어가 꼭 필요한가에 대한 고민이 들었다._
_하지만 submit이 끝나고 입력된 데이터 값을 초기화 하고 싶었기 때문에 (제어가 필요) 넣어주었다._

**컴포넌트 함수**

[/src/weeks/week3/component/container]
[/src/weeks/week3/component/formInput]

- 구역을 구분하기 위한 Container 컴포넌트
- 폼의 input과 label을 묶은 단위의 컴포넌트

<hr>

## 결과

![week3](https://github.com/lin0211/react-hw/assets/139965934/3aca1383-8dcd-4b63-b100-ad978ad59adb)

<hr>

## 고민

_커스텀 훅을.. 어떤 것을 만들면 좋을지 모르겠어서.. 결국 미래의 나에게 넘겨두었다._
