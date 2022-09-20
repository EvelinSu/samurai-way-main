import React, {useEffect, useState} from 'react';
import {SPagination, SPaginationItem} from "./styled";
import ArrowIcon from "../../assets/icons/ArrowIcon";
import { SText } from '../Text/SText';

type TPaginationProps = {
    pagesCount: number
    onClick: (activePage: number) => void
    activePage?: number
}

const Pagination: React.FC<TPaginationProps> = (props) => {

    const [activePage, setActivePage] = useState(props.activePage || 1)
    const [visiblePages, setVisiblePages] = useState([1, 10])

    //pagination logic

    const pages = []
    for (let i = visiblePages[0]; i <= props.pagesCount && i < visiblePages[1]; i++) {
        if (i < visiblePages[1]) pages.push(i)
    }

    //

    const onArrowClick = (direction: 'backward' | 'forward') => {
        if (direction === "backward" && visiblePages[0] > 1) setVisiblePages([visiblePages[0] - 9, visiblePages[1] - 9])
        if (direction === "forward" && visiblePages[1] < props.pagesCount) {
            setVisiblePages(
                [visiblePages[0] + 9, visiblePages[1] + 9])
        }
    }

    const onClickHandler = (el: number) => {
        props.onClick(el)
        setActivePage(el)
    }

    return (
        <SPagination>
            <ArrowIcon
                onClick={() => onArrowClick('backward')}
                isDisabled={visiblePages[0] === 1}
            />
            {pages.map((el, i) => {
                return (
                    <SPaginationItem
                        key={el}
                        isActive={activePage === el}
                        onClick={() => onClickHandler(el)}
                    >
                        {el}
                    </SPaginationItem>
                )
            })}
            {props.pagesCount > visiblePages[1] && (
                <SText opacity={0.4}>. . . {props.pagesCount}</SText>
            )}
            <ArrowIcon
                onClick={() => onArrowClick('forward')}
                rotate={"180deg"}
                isDisabled={visiblePages[1] >= props.pagesCount}
            />
        </SPagination>
    );
};

export default Pagination;
