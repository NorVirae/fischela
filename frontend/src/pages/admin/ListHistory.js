import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import AdminNav from "../../components/nav/AdminNav";
import { listUserHistoryQuery } from "../../constants/schemas";




const ListHistory = () =>  {

    const {loading, data, error} = useQuery(listUserHistoryQuery)

    useEffect(()=>{
        if(!loading){
            console.log(data, "THIS IS HISTORY DATA!")
        }
    }, [loading])
    return <>
        <div className="grid container grid-2-20-80 gap-1">

            <AdminNav/>
            <div>
                History...
                {data?data.histories.map(e=>{
                    return <div className="card p-2 my-1 flex flex-column"><div className="">{e.name}</div>
                    <div className="text-small flex justify-content-space-between">{e.description} <a className="text-underline">view detail</a></div>
                    </div>
                }):"loading..."}
            </div>
        </div>
    </>
}


export default ListHistory;