import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Wrapper as PopperWrapper } from 'components/Popper';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import TippyHeadless from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import AccountItem from 'components/AccountItem/AccountItem';
import { SearchIcon } from 'components/Icons';
import { useEffect, useState, useRef } from 'react';
import { useDebounce } from 'hooks';
import *  as searchServices from '@/apiServices/searchServices'
const cx = classNames.bind(styles);
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [showResult, setShowResult] = useState('true');
    const [searchResult, setSearchResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef()
    const debounced = useDebounce(searchValue, 500);
    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([])
            return;
        }
        setLoading(true)
        const fetchApi = async () => {
            setLoading(true)
            const result = await searchServices.search(debounced);
            setSearchResult(result)
            setLoading(false)
        }

        fetchApi();
    }, [debounced])
    const handleClear = () => {
        setSearchValue('');
        console.log(searchResult);

        setSearchResult([0])

        inputRef.current.focus()
    }
    const handleChange = (e) => {
        const seachValue = e.target.value
        if (!seachValue.startsWith(' ')) {
            setSearchValue(seachValue)

        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handleHideResult = () => {
        setShowResult(false);
    }
    return (
        <div>
            <TippyHeadless
                appendTo={() => document.body}
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) =>
                (<div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {searchResult.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
                    </PopperWrapper>
                </div>)

                }
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        onChange={handleChange}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading &&
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} className={cx('')} />
                        </button>}


                    {loading && <FontAwesomeIcon icon={faSpinner} className={cx('loading')} />}

                    <button className={cx('search-btn')} onMouseDown={handleSubmit}>
                        <SearchIcon />
                    </button>
                </div>
            </TippyHeadless>
        </div>

    );
}

export default Search;