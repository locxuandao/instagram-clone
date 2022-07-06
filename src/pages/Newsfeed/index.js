import styles from './Newsfeed.module.scss';
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function Newsfeed() {
    return ( 
        <div className={cx('wrapper')}>this is news</div>
     );
}

export default Newsfeed;