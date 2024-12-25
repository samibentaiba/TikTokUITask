import classNames from 'classnames/bind';
import styles from './Live.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Live() {
    return (
        <div className={cx('error-page')}>
           
            <h1> This page is not done yet 🥹</h1>
            <p>I'll update it later when I have an idea.</p>
        </div>
    );
}

export default Live;