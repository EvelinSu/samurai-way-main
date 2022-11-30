import React, {useEffect, useState} from 'react';
import {SPagination, SPaginationItem} from "./styled";
import ArrowIcon from "../../assets/icons/ArrowIcon";
import {SText} from '../Text/SText';
import {useHistory , useParams} from "react-router-dom";
import {PATH} from "../../../bll/types";

type TPaginationProps = {
    totalPagesCount: number
    filterName?: string
}

const initialState = {
    minPageCount: 1,
    pageCount: 8,
}

const Pagination: React.FC<TPaginationProps> = React.memo((props) => {

    const navigate = useHistory()
    const {page} = useParams<{ page: string }>()

    //pagination logic
    const [visiblePages, setVisiblePages] = useState([initialState.minPageCount, initialState.pageCount])
    // const staticPages = [initialState.minPageCount, props.totalPagesCount]

    const refreshPages = () => {
        let pages: number[] = []

        for (let i = visiblePages[0]; i <= props.totalPagesCount && i < visiblePages[1]; i++) {
            if (i < visiblePages[1]) pages.push(i)
        }
        return pages
    }

    useEffect(() => {
        refreshPages()
    }, [visiblePages])

    useEffect(() => {
        if (page && +page > props.totalPagesCount) navigate.push(String(props.totalPagesCount))
    }, [props.totalPagesCount])

    //

    const pageCount = initialState.pageCount - 1

    const onArrowClick = (direction: 'backward' | 'forward') => {
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

    return (
        <SPagination>
            <ArrowIcon
                onClick={() => onArrowClick('backward')}
                isDisabled={visiblePages[0] === 1}
            />
            {/*{visiblePages[0] !== 1 &&*/}
            {/*    <>*/}
            {/*        <SPaginationItem*/}
            {/*            key={staticPages[0]}*/}
            {/*            isActive={+page ? +page === staticPages[0] : staticPages[0] === 1}*/}
            {/*            onClick={() => onClickHandler(staticPages[0])}*/}
            {/*        >*/}
            {/*            {staticPages[0]}*/}
            {/*        </SPaginationItem>*/}
            {/*        <SText opacity={0.4}>. . . </SText>*/}
            {/*    </>*/}
            {/*}*/}
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
            {/*{visiblePages[1] < props.totalPagesCount &&*/}
            {/*    <>*/}
            {/*        <SText opacity={0.4}>. . . </SText>*/}
            {/*        <SPaginationItem*/}
            {/*            key={staticPages[1]}*/}
            {/*            isActive={+page ? +page === staticPages[1] : staticPages[1] === 1}*/}
            {/*            onClick={() => onClickHandler(staticPages[1])}*/}
            {/*        >*/}
            {/*            {staticPages[1]}*/}
            {/*        </SPaginationItem>*/}
            {/*    </>*/}
            {/*}*/}
            {
                visiblePages[1] < props.totalPagesCount
                && visiblePages[1] > initialState.pageCount - 1
                && <SText opacity={0.4}>. . . {props.totalPagesCount}</SText>
            }
            <ArrowIcon
                onClick={() => onArrowClick('forward')}
                rotate={"180deg"}
                isDisabled={visiblePages[1] >= props.totalPagesCount}
            />
        </SPagination>
    );
});

export default Pagination;
