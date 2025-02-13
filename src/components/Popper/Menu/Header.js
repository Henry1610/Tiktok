import Button from "@/components/Button";
import styles from './Menu.module.scss'
import classNames from "classnames/bind"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const cx=classNames.bind(styles)

function Header({ title,onBack }) {
    return <header className={cx('header')}  >
        <button className={cx('back-btn')}>
            <FontAwesomeIcon icon={faChevronLeft} className={cx('')} onClick={onBack}/>
            <h4 className={cx('header-title')}>
                {title}
            </h4>
        </button>

    </header>;

}
export default Header

