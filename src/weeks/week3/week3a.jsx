import { useState, useEffect } from "react";
import { Container } from "./component";
import PocketBase from "pocketbase";

const pb = new PocketBase(import.meta.env.VITE_PB_API);
pb.autoCancellation(false);

const INITIAL_FORM_DATA = {
  title: "",
  review: "",
  rate: "",
};

function Week3() {
  const style = {
    containerStyle:
      "border-4 border-white border-dashed m-6 relative rounded p-6 min-height-fit",
    titleStyle: "absolute top-[-14px] bg-slate-600 px-4",
    buttonStyle: "w-100pxr border rounded mx-1",
  };

  const [movieReviewLists, setMovieReviewLists] = useState([]);

  const transferToStarRate = (rate) => {
    const rateNumber = rate.slice(-1);
    return "⭐".repeat(rateNumber);
  };

  const getPbDataLists = async () => {
    return await pb
      .collection("Movie_Review")
      .getFullList({
        sort: "-created",
      })
      .then((data) => {
        setMovieReviewLists(data);
      });
  };

  const createPbDataList = async (data) => {
    await pb.collection("Movie_Review").create(data);
    getPbDataLists();
  };

  const deletePbDataList = async (id) => {
    await pb.collection("Movie_Review").delete(id);
    getPbDataLists();
  };

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
  };

  useEffect(() => {
    getPbDataLists();
  }, []);

  return (
    <section>
      <h1>내 맘대로 영화 평가</h1>
      <Container
        as="article"
        title="리스트"
        style={style.containerStyle}
        titleStyle={style.titleStyle}
      >
        <table className="border-separate border-spacing-1pxr m-auto">
          <thead className="bg-gray-800">
            <tr className="border border-white">
              <th scope="col" className="align-middle p-1 lg:p-3">
                No.
              </th>
              <th scope="col" className="align-middle p-1 lg:p-3">
                Title
              </th>
              <th scope="col" className="align-middle p-1 lg:p-3">
                Review
              </th>
              <th scope="col" className="align-middle p-1 lg:p-3">
                Rate
              </th>
              <th scope="col" className="align-middle p-1 lg:p-3">
                Delete
              </th>
            </tr>
          </thead>
          <tbody className="bg-gray-700">
            {movieReviewLists &&
              movieReviewLists.map((list, index) => {
                return (
                  <tr key={list.id}>
                    <td className="align-middle p-1 lg:p-2">{index + 1}</td>
                    <td className="align-middle p-1 lg:p-2">{list.title}</td>
                    <td className="align-middle p-1 lg:p-2">{list.review}</td>
                    <td className="align-middle p-1 lg:p-2">
                      {transferToStarRate(list.rate)}
                    </td>
                    <td className="align-middle">
                      <button onClick={() => deletePbDataList(list.id)}>
                        ❌
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </Container>
      <Container
        as="article"
        title="영화 추가"
        style={style.containerStyle}
        titleStyle={style.titleStyle}
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <ul className="flex flex-col gap-2 justify-center flex-wrap">
            <li>
              <label htmlFor="inputMovieTitle" className="sr-only"></label>
              <input
                type="text"
                name="inputMovieTitle"
                id="inputMovieTitle"
                placeholder="영화 제목"
                className="bg-transparent border-b p-1 w-[50vw]"
                defaultValue={INITIAL_FORM_DATA.title}
              />
            </li>
            <li>
              <label htmlFor="inputMovieReview" className="sr-only"></label>
              <input
                type="text"
                name="inputMovieReview"
                id="inputMovieReview"
                placeholder="영화 리뷰"
                className="bg-transparent border-b p-1 w-[50vw]"
                defaultValue={INITIAL_FORM_DATA.review}
              />
            </li>
            <li>
              <label htmlFor="inputMovieRate" className="sr-only"></label>
              <select
                name="inputMovieRate"
                id="inputMovieRate"
                className="bg-transparent border p-1"
                defaultValue={INITIAL_FORM_DATA.rate}
              >
                <option value="">별점</option>
                <option value="별점5">⭐⭐⭐⭐⭐</option>
                <option value="별점4">⭐⭐⭐⭐</option>
                <option value="별점3">⭐⭐⭐</option>
                <option value="별점2">⭐⭐</option>
                <option value="별점1">⭐</option>
              </select>
            </li>
          </ul>
          <div role="group" className="">
            <button type="submit" className={style.buttonStyle}>
              추가
            </button>
            <button type="reset" className={style.buttonStyle}>
              지우기
            </button>
          </div>
        </form>
      </Container>
    </section>
  );
}

export default Week3;
