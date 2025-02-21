import styles from './Menu.module.scss'
import classNames from "classnames/bind"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import propTypes from 'prop-types'

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

Header.propTypes={
    onBack:propTypes.func.isRequired,
    title:propTypes.string.isRequired
}
export default Header

