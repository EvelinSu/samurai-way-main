import React, {useEffect, useState} from 'react';
import {SPagination, SPaginationItem} from "./styled";
import ArrowIcon from "../../assets/icons/ArrowIcon";
import {SText} from '../Text/SText';
import {useHistory, useParams} from "react-router-dom";
import {PATH} from "../../routes/types";

type TPaginationProps = {
    totalPagesCount: number
    filterName?: string
}

const initialState = {
    minPageCount: 1,
    pageCount: 8,
}

const pageCount = initialState.pageCount - 1

const Pagination: React.FC<TPaginationProps> = React.memo((props) => {

    const navigate = useHistory()
    const {page} = useParams<{ page: string }>()

    const [visiblePages, setVisiblePages] = useState([initialState.minPageCount, initialState.pageCount])

    const refreshPages = () => {
        let pages: number[] = []

        for (let i = visiblePages[0]; i <= props.totalPagesCount && i < visiblePages[1]; i++) {
            if (i < visiblePages[1]) pages.push(i)
        }
        return pages
    }

    const onArrowClickHandler = (direction: 'backward' | 'forward') => {
        if (direction === "backward" && visiblePages[0] > 1) {
            setVisiblePages([visiblePages[0] - pageCount, visiblePages[1] - pageCount])
        }
        if (direction === "forward" && visiblePages[1] < props.totalPagesCount) {
            setVisiblePages([visiblePages[0] + pageCount, visiblePages[1] + pageCount])
        }
    }
    const onClickHandler = (el: number) => {
        let filterName = '/' + props.filterName
        navigate.push(`${PATH.users}/${el}${filterName}`)
    }

    useEffect(() => {
        refreshPages()
    }, [visiblePages])

    useEffect(() => {
        if (page && +page > props.totalPagesCount) navigate.push(String(props.totalPagesCount))
    }, [props.totalPagesCount])

    return (
        <SPagination>
            <ArrowIcon
                onClick={() => onArrowClickHandler('backward')}
                isDisabled={visiblePages[0] === 1}
            />
            {refreshPages().map((el) => {
                return (
                    <SPaginationItem
                        key={el}
                        isActive={page ? +page === el : el === 1}
                        onClick={() => onClickHandler(el)}
                    >
                        {el}
                    </SPaginationItem>
                )
            })}
            {
                visiblePages[1] < props.totalPagesCount
                && visiblePages[1] > initialState.pageCount - 1
                && <SText opacity={0.4}>. . . {props.totalPagesCount}</SText>
            }
            <ArrowIcon
                onClick={() => onArrowClickHandler('forward')}
                rotate={"180deg"}
                isDisabled={visiblePages[1] >= props.totalPagesCount}
            />
        </SPagination>
    );
});

export default Pagination;
