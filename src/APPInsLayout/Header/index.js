import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { CircleIcon, CompassIcon, HomeIcon, MessageIcon, SearchIcon, TymIcon } from '../../Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import Acount from '../../Acount';




const cx = classNames.bind(styles)
function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <img className={cx('logo')} src='https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png' alt='logo'/>
                <Tippy 
                   appendTo={document.body}
                   interactive={true}
                   placement='bottom'
                   render={attrs => (
                    <div className={cx('tippy-search')} tabIndex="-1" {...attrs}>
                           <Acount/>
                           <Acount/>
                           <Acount/>
                    </div>)}
                >
                    <div className={cx('search')}>
                        <SearchIcon className={cx('search-icon')}/>
                        <input placeholder='Tìm kiếm'/>
                        <FontAwesomeIcon className={cx('clear-icon')} icon={faCircleXmark}/>
                    </div>
                </Tippy>
                <div className={cx('actions')}>
                    <HomeIcon className={cx('actions-icon')}/>
                    <MessageIcon className={cx('actions-icon')}/>
                    <CircleIcon className={cx('actions-icon')}/>
                    <CompassIcon className={cx('actions-icon')}/>
                    <TymIcon className={cx('actions-icon')}/>
                    <div className={cx('profileAvatar')}>
                        <img src='https://icdn.dantri.com.vn/thumb_w/640/2017/1-1510967806416.jpg' alt='avatar'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;