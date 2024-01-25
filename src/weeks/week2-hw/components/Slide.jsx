import { getPbImageURL } from "../pocketbase/pocketbase";
const Slide = ({ data }) => {
  return (
    <figure>
      <img src={getPbImageURL(data)} alt={data.title} />
      <figcaption>{data.title}</figcaption>
    </figure>
  );
};

export default Slide;
