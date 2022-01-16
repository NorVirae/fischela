import React from "react"

const NairaFormat = (price) => {
    return <>NGN&nbsp;₦&nbsp;{Number(price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</>
}

export default NairaFormat