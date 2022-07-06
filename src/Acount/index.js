import styles from './Acount.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)

function Acount() {
    return (
      <div className={cx('wrapper')}>
         <div className={cx('avatar')}>
            <img src='https://icdn.dantri.com.vn/thumb_w/640/2017/1-1510967806416.jpg' alt='avatar'/>
         </div>
         <div className={cx('info')}>
            <h2 className={cx('displayName')}>locxuan.dao</h2>
            <p className={cx('discriptionName')}>Đào Xuân Lộc</p>
         </div>
      </div>
    );
}

export default Acount;