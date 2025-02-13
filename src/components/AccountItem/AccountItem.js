import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} 
            src="https://yt3.ggpht.com/a0_cx-_0C__vVw6xb3lP64_Z_vQL55wjZEjayJNX-MKaAgLgneYorFrligf5QAycRYiqBN3hOA=s68-c-k-c0x00ffffff-no-rj" alt="Hoa" />
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