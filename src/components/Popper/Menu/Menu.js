import Tippy from '@tippyjs/react/headless'; // different import path!
import styles from './Menu.module.scss'
import classNames from "classnames/bind"
import { Wrapper as PopperWrapper } from 'components/Popper';
import MenuItem from "./MenuItem";
import Header from './Header';
import { useState } from 'react';
import propTypes from 'prop-types'

const cx = classNames.bind(styles)

function Menu({ children, items = [],hideOnClick=false, onChange, }) {

    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1]

    const renderItems = () => {
        return current.data.map((item, index) => {

            const isParent = !!item.children;
            return (
                <MenuItem
                
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            (setHistory((prev) => [...prev, item.children]))
                        }
                        else {
                            onChange(item)
                        }
                    }}
                />
            )
        })
    }
    const handleBack=()=>{
        setHistory(prev => prev.slice(0, prev.length - 1))

    }
    const renderResult=(attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx("menu-popper")}>
                {history.length > 1 && <Header title={current.title} onBack={handleBack} />}
                <div className={cx('menu-body')}>{renderItems()}</div>
            </PopperWrapper>
        </div>
    )
    const handleResetMenu=()=>{
        setHistory((prev)=>prev.slice(0,1))
    }
    return (<Tippy
        interactive={true} // Cho phép tương tác với menu
        hideOnClick={hideOnClick}
        placement="bottom-end"
        delay={[0, 1000]}
        offset={[12,8]}
        render={renderResult}
        onHide={handleResetMenu}
    >
        {children}
    </Tippy>


    )
}
Menu.propTypes={
    items:propTypes.array,
    children:propTypes.node.isRequired,
    onChange:propTypes.func,
    hideOnClick:propTypes.bool,
}
export default Menu