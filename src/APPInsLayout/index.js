import styles from './AppInsLayout.module.scss'; 
import ClassNames from 'classnames/bind'
import Header from './Header';


const cx = ClassNames.bind(styles)

function APPInsLayout({children}) {
    return(
        <div className={cx('wrapper')}>
              <Header/>
              <div className={cx('container')}>{children}</div>
        </div>
    ) ;
}

export default APPInsLayout;