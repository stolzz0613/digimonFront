import React from 'react'
import "./styles.scss"

export default function Pagination({ setPage}) {

    const changePage = (isBack) => {
        if (isBack) {
            setPage(page => page - 12);
        } else {     
            setPage(page => page + 12);
        }
        window.scrollTo(0, 0);
    }

    return (
        <>
            <button className='button' onClick={() => changePage(true)}>BACK</button>
            <button className='button' onClick={() => changePage(false)}>NEXT</button>
        </>
    )
}
