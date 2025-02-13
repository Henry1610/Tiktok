import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '@/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Wrapper as PopperWrapper } from 'components/Popper';
import { faCircleQuestion, faCircleXmark, faCloudUpload, faCoins, faEarthAsia, faEllipsisVertical, faGear, faKeyboard, faMagnifyingGlass, faMessage, faSignOut, faSpinner } from '@fortawesome/free-solid-svg-icons';
import TippyHeadless from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { useEffect, useState } from 'react';
import AccountItem from 'components/AccountItem/AccountItem';
import Button from '@/components/Button';
import Menu from 'components/Popper/Menu';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { MessageIcon, SearchIcon, UploadIcon } from 'components/Icons';
import Image from 'components/Image';
const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon className={cx('abc')} icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Languge'
            , data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tieng Viet'
                }
            ]
        }
    },
    {
        icon: <FontAwesomeIcon className={cx('abc')} icon={faCircleQuestion} />,
        title: 'Feedback ',
        to: "/feedback"
    },
    {
        icon: <FontAwesomeIcon className={cx('abc')} icon={faKeyboard} />,
        title: 'Keyboard shortcuts'
    },
]
function Header() {
    const [searchResult, setSearchResult] = useState([])
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2])
        }, 0)
    })

    const userMenu = [
        {
            icon: <FontAwesomeIcon className={cx('abc')} icon={faUser} />,
            title: 'View profile ',
            to: "/feedback"
        },
        {
            icon: <FontAwesomeIcon className={cx('abc')} icon={faCoins} />,
            title: 'Get coin ',
            to: "/coin"
        },
        {
            icon: <FontAwesomeIcon className={cx('abc')} icon={faGear} />,
            title: 'Settings ',
            to: "/settings"
        }, ...MENU_ITEMS
        , {
            icon: <FontAwesomeIcon className={cx('abc')} icon={faSignOut} />,
            title: 'Log out ',
            to: "/logout"
            , separate: true
        }
    ]
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);

    }
    const currentUser = true;
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
                    visible={searchResult.length < 0}
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
                            <SearchIcon />
                        </button>
                    </div>
                </Tippy>



                <div className={cx('action')}>
                    {currentUser ?
                        (<>
                            <Tippy content='Upload video' placement='bottom'>
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>

                            <button className={cx('action-btn')}>
                                <MessageIcon/>
                            </button>
                        </>) :
                        (<>
                            <Button text>Register</Button>
                            <Button primary>Log in</Button>


                        </>)}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <div>
                                <Image 
                                className={cx('user-avatar')} 
                                alt='Nguyen Van A' 
                                src="https://yt3.ggpht.com/a0_cx-_0C__vVw6xb3lP64_Z_vQL55wjZEjayJNX-MKaAgLgneYorFrligf5QAycRYiqBN3hOA=s68-c-k-c0x00ffffff-no-rj" />
                            </div>)
                            :
                            (<button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} className={cx('aa')} />
                            </button>
                            )}
                    </Menu>
                </div>




            </div>
        </header>
    );
}

export default Header;
