import React, {useEffect, useState} from 'react';
import {SPagination, SPaginationItem} from "./styled";
import ArrowIcon from "../../assets/icons/ArrowIcon";
import { SText } from '../Text/SText';
import {useHistory, useLocation, useParams} from "react-router-dom";
import {PATH} from "../../redux/types";

type TPaginationProps = {
    pagesCount: number
    onClick: (activePage: number) => void
}

const Pagination: React.FC<TPaginationProps> = (props) => {

    const [visiblePages, setVisiblePages] = useState([1, 10])

    const navigate = useHistory()
    const {page} = useParams<{page: string}>()

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
    const onClickHandler = async(el: number) => {
        await navigate.push(`${PATH.users}/${el}`)
        props.onClick(el)
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
                        isActive={+page ? +page === el : el === 1 }
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
