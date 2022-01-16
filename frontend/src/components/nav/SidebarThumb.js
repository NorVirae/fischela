import React, { useState } from 'react';
import cx from 'classnames';


 const SidebarThumb = ({onClick}) => {
     const [bubble, setBubble] = useState(false)
     const bubbleIt = () =>{
        setBubble(!bubble)
     }

     const handleOnclick = () => {
        bubbleIt()
        onClick()
        bubbleIt()

     }
    return <div className={cx('btn-reveal hide-lg', {bubble:bubble})}>
                {bubble?<i className={cx("fas fa-times")} onClick={e=>handleOnclick()}></i>:
                <i onClick={e=>handleOnclick()} className='fa fa-align-justify'></i>
                }
            </div>
}


export default SidebarThumb;