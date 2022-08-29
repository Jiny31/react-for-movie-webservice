import {useState, useEffect} from "react";

function App() {
  const[loading, setLoading]= useState(true);
  const[coin, setCoin]= useState([]);
  const[searchCoin, setSearchCoin]= useState([]);

  useEffect( () => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json)=>{
      setCoin(json);
      setLoading(false);
      });
  }, []) // 빈배열이면 한번만 실행

  const onChange = ((event) => {
    setSearchCoin(event.target.value);
  })

  return (
    <div className="App">
      <h1>The Coins! ({coin.length}s)</h1>
      <input 
        type="text"
        value={searchCoin}
        onChange={onChange}
        placeholder="Search Coin !"/>
      <hr/>
      {loading ? <strong> Loading ... </strong> : null}
       {coin.filter(
          coin => coin.id.indexOf(searchCoin) !== -1
          ).map((item) =>
          <li >
            {item.name}  ({item.symbol}) : \{Math.round(item.quotes.USD.price)}원
          </li>
       )}
    </div>
  );
}

export default App;

// ✔️ filter() 메서드: 자바스크립트 배열의 내장 함수
// 주어진 함수의 테스트를 통과하는 모든 요소를 모아(true면 요소를 유지, false면 버림) 새로운 배열로 반환함. callback 함수는 호출되는 배열을 변화시키지 않음.