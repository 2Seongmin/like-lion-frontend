import React, { useState } from "react";
import "./css/signup.css";

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPwd] = useState('');
    const [re_password, setRepwd] = useState('');
    const onChangename = e => setName(e.target.value);
    const onChangeemail = e => setEmail(e.target.value);
    const onChangepwd = e => setPwd(e.target.value);
    const onChangerepwd = e => setRepwd(e.target.value);

    const onClickemail =() => {
        alert('이메일 인증되었습니다.');
    }
    const onClick = () => {
        alert('회원가입이 되었습니다.');
    };

    return (
        <div>
            <div>
                <p className="maintitle">회원가입</p>
                <div>
                    <p>이름</p>
                    <input
                        type="text"
                        className="name"
                        value={name}
                        onChange={onChangename}
                    />
                </div>
                <div className="emailinput">
                    <p>이메일</p>
                    <input
                        type="text"
                        className="email"
                        value={email}
                        onChange={onChangeemail}
                    />
                    <button onClick={onClickemail} className="emailbutton">인증하기</button>
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
                <div>
                    <p>비밀번호 재입력</p>
                    <input
                        type="text"
                        className="re_password"
                        value={re_password}
                        onChange={onChangerepwd}
                    />
                </div>
            </div>
            <div>
                <button onClick={onClick} className="buttontext">회원가입</button>
            </div>
        </div>
    );
};

export default Signup;