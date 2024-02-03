import { useState } from "react";
import { Container, FormInput, RateCheckBox } from "./component";
import { useId } from "react";

const INITIAL_MY_MOVIE_DATA = {
  id: "",
  movieTitle: "",
  movieReview: "",
  movieRate: 5,
};

function Week3() {
  const style = {
    containerStyle:
      "border-4 border-white border-dashed m-6 relative rounded py-6 min-height-fit",
    titleStyle: "absolute top-[-14px] bg-slate-600 px-4",
    labelStyle: "inline-block w-14",
    inputStyle: "inputText",
    tableStyle: "mt-2 border-2 border-solid m-auto",
    borderStyle: "p-2 border border-solid border-white",
    buttonStyle:
      "border-2 border-solid border-slate-600 w-[40%] md:max-w-250pxr m-auto bg-white text-slate-600",
  };

  // const [myMovieFormData, setMyMovieFormData] = useState(INITIAL_MY_MOVIE_DATA);
  const [myMovieList, setMyMovieList] = useState([]);

  // setMyMovieList({
  //   id: "01",
  //   movieTitle: "콘스탄틴",
  //   movieReview: "짱이지",
  //   movieRate: 5,
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setMyMovieFormData({ ...myMovieFormData, [name]: value });
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    setMyMovieList((prevMyMovieList) => [...prevMyMovieList, data]);
    // console.log(data);
    // setMyMovieFormData(INITIAL_MY_MOVIE_DATA);
  };
  // console.log(myMovieList);

  return (
    <section>
      <h1>내 맘대로 영화 평가</h1>
      <Container
        as="article"
        title="영화 추가"
        style={style.containerStyle}
        titleStyle={style.titleStyle}
      >
        <form onSubmit={handleSubmit}>
          <ul className="flex flex-col gap-2">
            <FormInput
              as="li"
              label="제목"
              name="movieTitle"
              defaultValue={INITIAL_MY_MOVIE_DATA.movieTitle}
              // value={myMovieFormData.movieTitle}
              division=":"
              labelTailWindCss={style.labelStyle}
              inputTailWindCss={style.inputStyle}
              // onChange={handleChange}
            ></FormInput>
            <FormInput
              as="li"
              label="리뷰"
              name="movieReview"
              defaultValue={INITIAL_MY_MOVIE_DATA.movieReview}
              // value={myMovieFormData.movieReview}
              division=":"
              labelTailWindCss={style.labelStyle}
              inputTailWindCss={style.inputStyle}
              // onChange={handleChange}
            ></FormInput>
            <li>
              {/* <RateCheckBox
                // value={myMovieFormData.movieRate}
                defaultValue={INITIAL_MY_MOVIE_DATA.movieRate}
              ></RateCheckBox> */}
            </li>
            <li>
              <button className={style.buttonStyle} type="submit">
                추가
              </button>
              <button className={style.buttonStyle} type="reset">
                리셋
              </button>
            </li>
          </ul>
        </form>
      </Container>
      <Container
        as="article"
        title="리스트"
        style={style.containerStyle}
        titleStyle={style.titleStyle}
      >
        <table className={style.tableStyle}>
          <colgroup>
            <col width={150} />
            <col width={300} />
            <col width={100} />
          </colgroup>
          <thead>
            <tr>
              <th scope="col" className={style.borderStyle}>
                제목
              </th>
              <th scope="col" className={style.borderStyle}>
                코멘트
              </th>
              <th scope="col" className={style.borderStyle}>
                별점
              </th>
            </tr>
          </thead>
          {myMovieList &&
            myMovieList.map((list) => {
              console.log(list);
              return <div key={list.id}>{list.title}</div>;
            })}
          <tbody>
            {/* {myMovieList &&
              myMovieList.map((a, index) => {
                return (
                  <tr key={`NEMAMDAERO+ ${index}`}>
                    <td>{a.title}</td>
                    <td>{a.comment}</td>
                    <td>{a.rate}</td>
                  </tr>
                );
              })} */}
          </tbody>
        </table>
      </Container>
    </section>
  );
}

export default Week3;
