
import cx from 'classnames';
import React, { Component, useState } from 'react';
import _ from 'lodash';
import { shopProducts } from '../data/data';

 const LikeDislike = () => {
     const [product, setProducts] = useState(shopProducts())
    return <div className='flex justify-content-center pt-5'>
                _
    </div>
    
}


export default LikeDislike;










// constructor(props) {
    //     super(props)
    //     this.state = {likes:100, dislikes:25,
    //          user:{id:1, like:false, dislike:false}}
    //     this.Like = this.Like.bind(this)
    //     this.Dislike = this.Dislike.bind(this)
    // }

    // Dislike(){
        
    //     if (this.state.user.dislike){
            
    //         let dislikeys = this.state.dislikes
    //         let dislike = this.state.dislike
    //         dislikeys -= 1
    //         this.setState({dislikes:dislikeys, user:{dislike:false,like:false}})
    //     }else {
    //         if (this.state.user.like){
    //             let likeys = this.state.likes
    //             let like = this.state.like
    //             likeys -= 1
    //             this.setState({likes:likeys, user:{like:false}})
    //         }
    //         let dislikeys = this.state.dislikes
    //         let dislike = this.state.dislike
    //         dislikeys += 1
    //         this.setState({dislikes:dislikeys, user:{dislike:true,like:false}})
    //     }
    // }

    // Like(){
    //     if (this.state.user.like){
    //         let likeys = this.state.likes
    //         let like = this.state.like
    //         likeys -= 1
    //         this.setState({likes:likeys, user:{like:false, dislike:false}})
    //     }else {
    //         if (this.state.user.dislike){
    //             let dislikeys = this.state.dislikes
    //             let dislike = this.state.dislike
    //             dislikeys -= 1
    //             this.setState({dislikes:dislikeys, user:{dislike:false}})
    //         }
    //         let likeys = this.state.likes
    //         let like = this.state.like
    //         likeys += 1
    //         this.setState({likes:likeys, user:{like:true, dislike:false}})
    //     }
    // }

    

    // render() {
    //     const men = [
    //         { 'user': 'barney', 'age': 36, 'active': true },
    //         { 'user': 'fred',   'age': 40, 'active': false }
    //     ]



    //     let newss = _.includes(men[0], 36)
    //     console.log(newss)
    //     return (
    //         <>
    //             <div>
    //                 <h2>Like/Dislike</h2>
    //             </div>
    //             <style>{`
    //                 .like-button, .dislike-button {
    //                     font-size: 1rem;
    //                     padding: 5px 10px;
    //                     color:   #585858;
    //                 }

    //                 .liked, .disliked {
    //                     font-weight: bold;
    //                     color: #1565c0;
    //                 }
    //             `}</style>

    //             <div>
    //                 <button onClick={e=>this.Like()} className={cx('like-button',
    //                  {liked:this.state.user.like})}>Like|
    //                     <span className={cx('likes-counter')}>{this.state.likes}</span>
    //                 </button>
    //                 <button onClick={e=>this.Dislike()} className={cx('dislike-button',
    //                  {disliked:this.state.user.dislike})}>Dislike|
    //                     <span className={cx('dislikes-counter')}>{this.state.dislikes}</span>
    //                 </button>
    //             </div>
    //         </>
    //     );
    // }












































// import React, {Component} from 'react';
// import ClassName from "classnames";



// class Test extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {tasks:[{name:"kill chicken", active:true}], task:"task1", count:0}
//        this.handleClick = this.handleClick.bind(this)
//        this.handleChange = this.handleChange.bind(this)

//     }

//     componentDidMount(){
//         this.setCount()
//     }

   
   
//     handleClick () {
//         let listeds = this.state.tasks
//         listeds.push({name:this.state.task, active:true})
//         this.setState({tasks:listeds})
//         this.setCount()
//     }

//     handleTask(ind) {
//         let newTask = this.state.tasks
//         newTask[ind].active = !newTask[ind].active
//         this.setState({tasks:newTask})
//         this.setCount()
//     }

//     handleChange (valsx){
//         this.setState({task:valsx})
//     }

//     removeTask(inds){
//         let listTasks = this.state.tasks
//         let currentTasks = []
//         listTasks.map((tk, index)=> {
//             if (index != inds){
//                 currentTasks.push(tk)
//             }
//         })

//         console.log(currentTasks)
//         this.setCount()
//         this.setState({tasks:currentTasks})
//     }

//     setCount() {
//         let noActive = 0
//         let noInActive = 0
//         this.state.tasks.map(tk=>{
//             if (tk.active){
//                 noActive += 1;
//             }

//             else {
//                 noInActive += 1
//             }
//         })

//         this.setState({count:noActive})
//     }

//     render(props) {
//         return <>
//                 <>task count: {this.state.count}</>
//             <div className='test justify-content-center align-items-center grid'>
//                 Add Task
//                 <input placeholder='type in Task and add'
//                  onChange={e=>this.handleChange(e.target.value)}
//                  className='' 
//                  value={this.state.task} /> 
//                  <button onClick={this.handleClick}>Add Task</button>

//                  <ul>
//                      {this.state.tasks.map((it, index) => {
//                          return <><li onClick={e=>this.handleTask(index)}
//                          key={index} 
//                          className={ClassName("flex",{strike:!it.active})}>{it.name}
//                           </li><span className='remove' onClick={e=>this.removeTask(index)}>remove</span></>
//                      })}

//                  </ul>
               
//             </div>
//         </>
//     }
// }


// export default Test;