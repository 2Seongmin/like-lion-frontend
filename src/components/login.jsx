import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./css/login.css";

const Login = () => {
    const [email, setUseremail] = useState('');
    const [password, setPassword] = useState('');
    const onChangeUseremail = e => setUseremail(e.target.value);
    const onChangepwd = e => setPassword(e.target.value);

    const onClick = () => {
        alert('로그인 되었습니다.');
    };
    
    return (
        <div>
            <div className="login_input">
                <p className="maintitle">사용자 로그인</p>
                <div>
                    <p>이메일 주소</p>
                    <input
                        type="text"
                        className="email"
                        value={email}
                        onChange={onChangeUseremail}
                    />
                </div>
                <div>
                    <p>비밀번호</p>
                    <input
                        type="text"
                        className="password"
                        value={password}
                        onChange={onChangepwd}
                    />
                </div>
                <div className="idremember">
                    <input type="checkbox"/> 아이디 기억하기
                </div>
            </div>
            <div>
                <button onClick={onClick} className="buttontext">로그인</button>
            </div>
            <div className="emaillogin">
                <table>
                    <caption>
                        <Link to="/signup">이메일로 회원가입</Link>
                    </caption>
                    <tr>
                        <td><img src="/image/kakao.jpg" alt="kakao" /></td>
                        <td><img src="/image/naver.jpg" alt="naver" /></td>
                        <td><img src="/image/google.png" alt="google" /></td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default Login;
