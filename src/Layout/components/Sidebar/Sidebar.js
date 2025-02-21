import { HomeActiveIcon, HomeIcon, LiveActiveIcon, LiveIcon, UserGroupActiveIcon, UserGroupIcon } from 'components/Icons';
import Menu,{MenuItem} from './Menu';
import styles from './Sidebar.module.scss'
import classNames  from 'classnames/bind';
import config from 'config';
import SuggestedAccounts from 'components/SuggestedAccounts/SuggestedAccounts';
const cx=classNames.bind(styles)
function Sidebar() {
    return ( <aside className={cx('wrapper')}>
        <Menu>
            <MenuItem title='For You' to={config.routes.home} icon={<HomeIcon/>} activeIcon={<HomeActiveIcon/>}/>
            <MenuItem title='Following' to={config.routes.following} icon={<UserGroupIcon/>} activeIcon={<UserGroupActiveIcon/>}/>
            <MenuItem title='Live' to={config.routes.live} icon={<LiveIcon/>} activeIcon={<LiveActiveIcon/>}/>

        </Menu>
        <SuggestedAccounts label="Suggested accounts"/>
        <SuggestedAccounts label="Suggested accounts"/>

    </aside > );
}

export default Sidebar;