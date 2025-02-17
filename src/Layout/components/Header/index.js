import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '@/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faCoins, faEarthAsia, faEllipsisVertical, faGear, faKeyboard,  faSignOut } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import Button from '@/components/Button';
import Menu from 'components/Popper/Menu';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { InboxIcon, MessageIcon, UploadIcon } from 'components/Icons';
import Image from 'components/Image';
import Search from '../Search';
import { Link } from 'react-router-dom';
import routesConfig from '@/config/routes'

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
                <Link to={routesConfig.home} className={cx('logo-link')}> <img src={images.logo} alt="logo"/></Link>

                <Search/>



                <div className={cx('action')}>
                    {currentUser ?
                        (<>
                            <Tippy content='Upload video' placement='bottom'>
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>

                            <button className={cx('action-btn')}>
                                <MessageIcon />
                            </button>
                            <button className={cx('action-btn')}>
                                <InboxIcon />
                                <span className={cx('badge')}>12</span>
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

                                    fallback="https://yt3.ggpht.com/YwbGovLXEXu3Ji5me1LAYuhOPMl7Z2xgIRpxwRHMo39dIr41PaPBb31Yhkc_VAOd4s7OqVRA=s88-c-k-c0x00ffffff-no-rj"
                                    alt='Nguyen Van A'
                                    src="https://example.com/ảnh-không-tồn-tại.jpg" />
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
