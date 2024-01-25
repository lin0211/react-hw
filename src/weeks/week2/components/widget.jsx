const Widget = ({ kind, data: { mainText, subText, image } }) => {
  const widgetKind = `widget-${kind}`;
  // const { mainText, subText, image } = data;
  return (
    <div className={`widget ${widgetKind}`}>
      <div className="text">
        <div className="mainText">{mainText}</div>
        <div className="subText">
          {subText.map((item, key) => {
            return <span key={key}>{item}</span>;
          })}
        </div>
      </div>
      {image && (
        <figure>
          <img src={image.src} alt={image.alt} />
        </figure>
      )}
    </div>
  );
};

export default Widget;
