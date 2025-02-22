import styles from './Menu.module.scss'
import classNames from "classnames/bind"
import Button from 'components/Button';
import propTypes from 'prop-types'

const cx = classNames.bind(styles)

function MenuItem({ data, onClick }) {
    const classes = cx('menu-item', { separate: data.separate })
    return <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick} >
        {data.title}

    </Button>;
}
MenuItem.propTypes = {
    data:propTypes.object.isRequired,
    onClick:propTypes.func,
}
export default MenuItem

