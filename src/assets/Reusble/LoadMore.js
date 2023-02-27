import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../css/style.css"
import style from "../css/stylebk.css"

export const LoadMoreBtn = ({LoadMore}) => {
  return (
    <div className="load-bg text-center mb-5 mt-3 d-none d-lg-block">
        <button typ="button" className="load-more text-uppercase " onClick={LoadMore}>
            Load more items
        </button>
    </div>
  )
}
