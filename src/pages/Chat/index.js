import styles from './Chat.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)

function Chat() {
    return (
        <div className={cx('wrapper')}>this is chat</div>
    );
}

export default Chat;