import styles from './AccountItem.module.scss'
import classNames from 'classnames/bind';
import AccountItem from './AccountItem';
import PropTypes from 'prop-types'
const cx = classNames.bind(styles)
function SuggestedAccounts({ label }) {
    return (
    <div className={cx('wrapper')}>
        <p className={cx('label')}>{label}</p>
        <AccountItem />
        <AccountItem />
        <AccountItem />
        <AccountItem />
        <AccountItem />
        <AccountItem />
        <p className={cx('more-btn')}>See all</p>
        
    </div>);
}
SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
}
export default SuggestedAccounts;
