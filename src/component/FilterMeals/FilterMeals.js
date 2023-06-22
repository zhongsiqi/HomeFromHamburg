import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import classes from './FilterMeals.module.css';

const FilterMeals = (props) => {

    const [keyword, setKeyword] = useState('');

    //通过Effect来改造练习
    useEffect(() => {

        //降低数据过滤次数，提高用户体验
        //用户输入完了你再过过滤，用户输入的过程中，不要过滤
        //当用户停止输入动作1s后执行
        const timer = setTimeout(() => {
            props.onFilter(keyword);
        }, 1000);

        // console.log('Effect执行了')

        //这个函数可以称其为清理函数，会在下次Effect执行前调用
        //可以在这个函数中，做一些工作来清楚上次Effect执行所带来的影响
        return () => {
            clearTimeout(timer);
        };

    }, [keyword]);

    const inputChangeHandler = e => {
        // setKeyword(e.target.value);
        setKeyword(e.target.value.trim());
        // props.onFilter(keyword);
    };

    return (
        <div className={classes.FilterMeals}>
            <div className={classes.InputOuter}>
                <input
                    value={keyword}
                    onChange={inputChangeHandler}
                    className={classes.SearchInput}
                    type="text"
                    placeholder={"请输入关键字"} />
                <FontAwesomeIcon
                    className={classes.SearchIcon}
                    icon={faSearch} />
            </div>
        </div>
    );
};

export default FilterMeals;
