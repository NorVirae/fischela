import {gql, useQuery} from '@apollo/client';
import {useState, useEffect} from 'react';


const musicQuery = gql`
       query musicQuery {
            books{
                id
                name
                genre
            }
        }
    `


const BookList = (props) => {

    
    // const displayBooks = () =>{
    //     if (){
    //         setListBooks(null)
    //     }else{
    //         setListBooks(props.data.books) 
    //     }
    // }
    const [listBooks, setListBooks] = useState([])
    const {loading, data, error} = useQuery(musicQuery)

    useEffect(()=>{
        console.log(data)
    }, [data])

    return (
            <div className="music-list-container">
                <ul className="music-list">

                {!loading? data.books.map(res=>{
                    
                    return <li key={res.id}>{res.name}</li>}
                ):<div className='loading'>Loading..</div>}
                    
                </ul>
            </div>
    )
}


export default (BookList);