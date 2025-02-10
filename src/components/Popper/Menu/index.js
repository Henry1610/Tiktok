import Tippy from '@tippyjs/react/headless'; // different import path!
import styles from './Menu.module.scss'
import classNames from "classnames/bind"
import { Wrapper as PopperWrapper } from 'components/Popper';
import MenuItem from "./MenuItem";
const cx=classNames.bind(styles)
function Menu({children,items=[]}){
    const renderItems=()=>{
        return items.map((item,index)=>
            <MenuItem key={index} data={item}/>
    )
    }
    return(<Tippy
        interactive={true} // Cho phép tương tác với menu
        placement="bottom-end"
        delay= {[0, 1000]}
        render={(attrs) => (
            <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
                <PopperWrapper className={cx("menu-popper")}>
                    {renderItems()}
                </PopperWrapper>
            </div>
        )}
    >   
        {children}
    </Tippy>
    
    
    )
}
export default Menu