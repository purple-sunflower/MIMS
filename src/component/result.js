// 검색 결과는 여기에 표시되도록 ! 임시임 ㅠㅠ
import Header from "./header";

function Result(props) {
  return (
    <div className="result">
      <Header/>
      {props.renderArtists}
    </div>
  );
}

export default Result;