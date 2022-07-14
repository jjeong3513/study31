import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import "./Nav.css";

const Nav = ({auth,setAuth}) => {
    const navigate = useNavigate()
    const goToLogin = () => {
        navigate('/login')
    }

    return (
        <nav className="nav">
             <Link to='/'><h1 className="nav-title">SHOP</h1></Link>
            <div>
                {
                    auth ?
                    <span  onClick={()=>setAuth(false)}>
                        로그아웃
                    </span>:
                    <span onClick={()=>goToLogin()}>
                        로그인
                    </span>

                }
            </div>
        </nav>
    );
};

export default Nav;