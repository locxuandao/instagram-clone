import styles from './Profile.module.scss';
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function Profile() {
    return (
        <div className={cx('wrapper')}>this is profile</div>
      );
}

export default Profile;