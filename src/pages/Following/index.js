import classNames from 'classnames/bind';
import styles from './Following.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Following() {
    return (
        <div className={cx('error-page')}>
            
            <h1> Sorry - This page is not done yet 🥹</h1>
            <p>This page is probably used to put cute videos of my girlfriend here.</p>
        </div>
    );
}

export default Following;
