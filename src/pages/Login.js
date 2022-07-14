import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({setAuth}) => {
    const navigate = useNavigate();
    const login = (e) => {
        e.preventDefault();
        setAuth(true)
        navigate('/')
    } 
    return (
            <div>
             <form onSubmit={(e)=>{login(e)}}>
                <div>
                    <div><label htmlFor='userId'>아이디</label></div>
                    <div><input type="text" id="userId"  placeholder='Email aadress' /></div>
                </div>
                <div>
                    <div><label htmlFor='userPass'>비밀번호</label></div>
                    <div><input type="password"  id="userPass" /></div>
                </div>
                <div>
                   <input type="submit" value="로그인" />
                </div>
              </form>
            </div>
          );
 }
        

export default Login;