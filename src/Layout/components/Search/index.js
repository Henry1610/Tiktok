import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Wrapper as PopperWrapper } from 'components/Popper';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import TippyHeadless from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import AccountItem from 'components/AccountItem/AccountItem';
import { SearchIcon } from 'components/Icons';
import { useEffect, useState,useRef } from 'react';

const cx = classNames.bind(styles);
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [showResult,setShowResult]=useState('true');
    const [searchResult, setSearchResult] = useState([]);;
    const inputRef=useRef()
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1,2,3])
        }, 0)
    })
    const handleClear=()=>{
        setSearchValue('');
        console.log(searchResult);

        setSearchResult([0])
        
        inputRef.current.focus()
    }
    const handleHideResult=()=>{
        setShowResult(false);
    }
    return (
        <TippyHeadless
            interactive
            visible={showResult&&searchResult.length > 0}
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
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onFocus={()=>setShowResult(true)}
                />
                {!!searchValue &&
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} className={cx('')} />
                    </button>}


                {/* <FontAwesomeIcon icon={faSpinner} className={cx('loading')} /> */}

                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </TippyHeadless>
    );
}

export default Search;