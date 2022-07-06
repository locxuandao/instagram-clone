import styles from './Login.module.scss';
import className from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookSquare} from '@fortawesome/free-brands-svg-icons';

import { auth } from '../../firebase/config';
import { FacebookAuthProvider } from "firebase/auth";

import { useNavigate } from 'react-router-dom';



const cx = className.bind(styles)
const fbProvider =  new FacebookAuthProvider()  

function Login() {
   let navagatie = useNavigate()

 const handleFabookLogin = () => {
    auth.signInWithPopup(fbProvider);
 }
 auth.onAuthStateChanged((user) => {
     if(user) { navagatie('/app')}
       
     
 })
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                 <div className={cx('img')}>
                     <img src='https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png' alt='img'/>
                 </div>
                <div className={cx('login')}>
                        <img src='https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png' alt='img'/>
                        <input className={cx('input1')} placeholder='Số điện thoại,tên người dùng hoặc email'/>
                        <input className={cx('input2')} placeholder='Mật khẩu'/>
                        <button className={cx('btn-login')} onClick={handleFabookLogin}>Đăng nhập</button>
                        <div className={cx('border-bottom')}>
                            <div className={cx('left')}></div>
                            <p>Hoặc</p>
                            <div className={cx('right')}></div>
                        </div>
                        <button className={cx('btn-login-fb')} onClick={handleFabookLogin}><FontAwesomeIcon icon={faFacebookSquare} /> Đăng nhập bằng Facebook</button>
                        <a className={cx('forget-password')} href="https://www.instagram.com/accounts/password/reset/">Quên mật khẩu ?</a>
                        
                </div>
            </div>
            <div className={cx('footer')}>
                   <p>Tiếng Việt</p>
                   <p>© 2022 Instagram-clone from locxuan.dao</p>
            </div>
        </div>
    )
    
}

export default Login;