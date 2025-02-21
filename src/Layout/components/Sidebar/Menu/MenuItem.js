import { NavLink } from "react-router-dom";
import PropTypes from "prop-types"
import classNames  from 'classnames/bind';
import styles from './MenuItem.module.scss'

const cx=classNames.bind(styles)

function MenuItem({title,to,icon,activeIcon}) {
    return (  <NavLink to={to} className={(nav)=>cx('menu-item',{active:nav.isActive})} >
       
        <span className={cx('icon')}> {icon}</span>
        <span className={cx('activeIcon')}>{activeIcon}</span>

        <span className={cx('title')}>{title}</span>
    </NavLink>);
}
MenuItem.propTypes={
    title:PropTypes.string.isRequired,
    icon:PropTypes.node.isRequired,
    to:PropTypes.string.isRequired
}
export default MenuItem;