import classNames from "classnames/bind";
import styles from "./AccountPreview.module.scss"
import Button from "components/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)

function AccountPreview() {
    return (<div className={cx('wrapper')}>
        <header className={cx('header')}>
            <img className={cx('avatar')}
                src="https://yt3.ggpht.com/YwbGovLXEXu3Ji5me1LAYuhOPMl7Z2xgIRpxwRHMo39dIr41PaPBb31Yhkc_VAOd4s7OqVRA=s88-c-k-c0x00ffffff-no-rj"
                alt="" />
                <div><Button primary className={cx('follow-btn')}>Follow</Button></div>
            
        </header>
        <div className={cx('body')}>
            <p className={cx('nickname')}>
                <strong>quocnguyenphu</strong>
                <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
            </p>
            <p className={cx('name')}>Quoc Nguyen Phu</p>
            <p className={cx('analytics')}>
                <strong className={cx('value')}>8.2M </strong>
                <span className={cx('label')}>Follower</span>
                <strong className={cx('value')}>8.2M </strong>
                <span className={cx('label')}>Follower</span>
            </p>
        </div>
    </div>);
}

export default AccountPreview;