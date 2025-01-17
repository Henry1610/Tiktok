import styles from './Header.module.scss'
import classNames from 'classnames/bind';
import images from "@/assets/images";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)
function Header() {
    return (<header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt="TikTok"/>
            </div>
            <div className={cx('search')}>
                    <input placeholder='Search accounts and videos' spellCheck={false}></input>
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark}/>
                        
                    </button>
                    {/* {loading} */}
                    <button className={cx('search-btn')}>
                        {}
                    </button>
                </div>
        </div>

    </header>);
}

export default Header;