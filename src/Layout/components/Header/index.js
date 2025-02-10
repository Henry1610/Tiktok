import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '@/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Wrapper as PopperWrapper } from 'components/Popper';
import { faCircleQuestion, faCircleXmark, faEarthAsia, faEllipsisVertical, faKeyboard, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { useEffect, useState } from 'react';
import AccountItem from 'components/AccountItem/AccountItem';
import Button from '@/components/Button';
import Menu from 'components/Popper/Menu';
const cx = classNames.bind(styles);
const MENU_ITEMS=[
    {
        icon:<FontAwesomeIcon className={cx('abc')} icon={faEarthAsia} /> ,
        title:'English'
    },
    {
        icon:<FontAwesomeIcon className={cx('abc')} icon={faCircleQuestion}/> ,
        title:'Feedback ',
        to:"/feedback"
    },
    {
        icon:<FontAwesomeIcon className={cx('abc')} icon={faKeyboard}/> ,
        title:'Keyboard shortcuts'
    },
]
function Header() {
    const [searchResult, setSearchResult] = useState([])
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2])
        }, 0)
    })
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                <div className={cx('logo')}>
                    <img src={images.logo} alt="TikTok" />
                </div>

                {/* Search */}
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) =>
                    (<div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                        </PopperWrapper>
                    </div>)

                    }
                >
                    <div className={cx('search')}>
                        <input
                            placeholder="Search accounts and videos"
                            spellCheck={false}
                        />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} className={cx('')} />
                        </button>

                        <FontAwesomeIcon icon={faSpinner} className={cx('loading')} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('')} />
                        </button>
                    </div>
                </Tippy>

                {/* Actions */}
                <div className={cx('action')}>
                    <Button text>Register</Button>
                    <Button primary>Log in</Button>

                    <Menu items={MENU_ITEMS}>
                        <button className={cx('more-btn')}><FontAwesomeIcon icon={faEllipsisVertical} className={cx('aa')}></FontAwesomeIcon></button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
