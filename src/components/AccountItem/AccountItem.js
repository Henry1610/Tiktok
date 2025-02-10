import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} 
            src="https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/6568074f153f375039f84ab8136d812c.jpeg?lk3s=a5d48078&amp;nonce=93323&amp;refresh_token=c97e19a0b8c092cd1e7036d9b2cc4465&amp;x-expires=1738854000&amp;x-signature=m70xf%2FN%2BYKnUEutlu6EJvAAzfsY%3D&amp;shp=a5d48078&amp;shcp=81f88b70" alt="Hoa" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon  className={cx('check')} icon={faCheckCircle}/>
                </h4>
                <span className={cx('username')}>Nguyen Van A</span>


            </div>
        </div>
    )
}
export default AccountItem