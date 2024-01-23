import Widget from "./components/widget";

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

const Week2 = () => {
  return (
    <div className="carousel">
      <div className="carousel-inner">
        <Widget kind="weather" data={widgetData.weather} />
        <Widget kind="fineDust" data={widgetData.fineDust} />
        <Widget kind="kosdaq" data={widgetData.kosdaq} />
      </div>
    </div>
  );
};

export default Week2;
