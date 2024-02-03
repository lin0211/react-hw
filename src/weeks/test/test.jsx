import { useState } from "react";

export default function Test() {
  const [lists, setLists] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    setLists((prevList) => [...prevList, data]);
  };
  return (
    <div className="flex flex-col gap-4">
      <h1>Test</h1>
      <form onSubmit={handleSubmit} className="flex flex-col bg-gray-800">
        <h2> 폼</h2>
        <input
          className="bg-transparent border border-white text-center"
          type="text"
          name="title"
          placeholder="title"
        />
        <input
          className="bg-transparent border border-white text-center"
          type="text"
          name="review"
          placeholder="review"
        />
        <button type="submit" className="border p-1">
          submit
        </button>
        <button type="reset" className="border p-1">
          reset
        </button>
      </form>
      <div className="bg-gray-800">
        <h2>리스트</h2>
        {lists &&
          lists.map((a, index) => {
            return <div key={index}>{a.title}</div>;
          })}
      </div>
    </div>
  );
}
