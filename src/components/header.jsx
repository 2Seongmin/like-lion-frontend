import "./css/header.css";

const Header = (props) => {
    return (
        <div>
          <div className="header">
            <img src='/image/가로형로고.png' className='logo'></img>
            <p>
              <span className='text'>뉴스</span>
              <span className='text'>미디어</span>
            </p>
            <div className="search">
                <form>
                <input type='text' placeholder='Search'></input>
                <img src='/image/magnify.png'></img>
                </form>
            </div>
            <h3 className='login'>로그인</h3>
          </div>
        </div>
        );
  };
  
  export default Header;