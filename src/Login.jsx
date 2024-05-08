const Login = (props) => {
    return (
        <div className='App'>
          <div className="header">
            <img src='/image/가로형로고.png' className='logo'></img>
            <p>
              <span className='text'>뉴스</span>
              <span className='text'>미디어</span>
            </p>
            <form className='search'>
              <input type='text' placeholder='Search'></input>
              <img src='/image/magnify.png'></img>
            </form>
            <h3 className='login'>로그인</h3>
          </div>

          <div className="header">
            <img src='/image/가로형로고.png' className='logo'></img>
            <p>
              <span className='text'>뉴스</span>
              <span className='text'>미디어</span>
            </p>
            <form className='search'>
              <input type='text' placeholder='Search'></input>
              <img src='/image/magnify.png'></img>
            </form>
            <h3 className='login'>{props.name} <img src="/image/기본프로필.png"></img></h3>          
          </div>
    
          <div className='footer'>
          <ul>
                <li>이용약관</li>
                <li>개인정보처리방침</li>
                <li>고객센터</li>
                <li>사업자정보확인</li>
            </ul>
          </div>
        </div>
      );
  };
  
  export default Login;