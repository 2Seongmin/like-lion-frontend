import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './assets/fonts/font.css';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Login from './components/login.jsx';
import Signup from './components/signup.jsx';
import News from './components/news.jsx';
import Media from './components/media.jsx';

function App() {

  const channel = "로보뉴스"
  const title = "[리포트 브리핑] 삼성전자, ‘기회가 왔다’ 목표가 94,000원"
  const contents = "[서울 = 뉴스핌]  로보뉴스 = 한국 투자 증권에서 03일 삼성 전자에 대해  ‘기회가 왔다’라며 투자의견 ‘매수(유지)’의 신규 리포트를 발행하였고, 목표가 94,000원으로 내놓았다..."
  const image = "/image/news.jpg"


  return (
    <Router>
      <div>
        <div className='header'>
          <Header />
        </div>
        <div className='content'>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/news" element={<News 
                                            channel={channel}
                                            title={title}
                                            contents={contents}
                                            image={image}
                                          />} />
            <Route path="/media" element={<Media />} />
          </Routes>
        </div>
        <div className='footer'>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
