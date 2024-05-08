import logo from './logo.svg';
import './App.css';

import Login from './Login';
import Button from './Button';
import News from './News';
import Textbook from './Textbook';
import Text from './Text';


function App() {
  const name = "이성민";
  const button = "버튼 텍스트";
  const channel = "로보뉴스"
  const title = "[리포트 브리핑] 삼성전자, ‘기회가 왔다’ 목표가 94,000원"
  const contents = "[서울 = 뉴스핌]  로보뉴스 = 한국 투자 증권에서 03일 삼성 전자에 대해  ‘기회가 왔다’라며 투자의견 ‘매수(유지)’의 신규 리포트를 발행하였고, 목표가 94,000원으로 내놓았다..."
  const image = "/image/news.jpg"
  const text = "주식 기본 용어, 알고 시작하자!"
  const listimage = "/image/chart.jpg"
  const maintitle = "제목"
  const subtitle = "부제목"

  return (
    <div>
      <Login name={name} />
      <Button button={button} />
      <News 
        channel={channel}
        title={title}
        contents={contents}
        image={image}
      />
      <Textbook
        text={text}
        listimage={listimage}
      />
      <Text
        maintitle={maintitle}
        subtitle={subtitle}
      />
    </div>
  );
}


export default App;
