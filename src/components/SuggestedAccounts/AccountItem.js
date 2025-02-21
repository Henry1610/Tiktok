import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AccountItem.module.scss'
import classNames from 'classnames/bind';
import PropTypes from 'prop-types'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from 'components/Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles)
function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <div className={cx('preview')}>
                        <AccountPreview/>
                    </div>
                </PopperWrapper>
            </div>
        )

    }
    return (
        <Tippy
            interactive
            
            offset={[-20,10]}
            placement='bottom'
            delay={[800, 0]}
            render={renderPreview}
        >
            <div className={cx('account-item')}>
                <img
                    className={cx('avatar')}
                    src='https://yt3.ggpht.com/YwbGovLXEXu3Ji5me1LAYuhOPMl7Z2xgIRpxwRHMo39dIr41PaPBb31Yhkc_VAOd4s7OqVRA=s88-c-k-c0x00ffffff-no-rj'
                    alt="" />
                <div className={cx('item-info')}>
                    <p className={cx('nickname')}>
                        <strong>quocnguyenphu</strong>
                        <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
                    </p>
                    <p className={cx('name')}>Quoc Nguyen Phu</p>

                </div>
            </div>
        </Tippy>);
}
AccountItem.propTypes = {

};
export default AccountItem;