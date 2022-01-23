import { useMutation, useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { listShopQuery } from "../../constants/schemas";



const AllShopsComp = () => {
    const navigate = useNavigate()
    const {loading, data, error} = useQuery(listShopQuery)
    return (

    <section className="shops">
        
        <div className="container">
            {/*tAG */}
        <h2>#Hot and Trending Shops</h2>
            <div className="grid grid-5 gap-1">
            
            {/* start of card */}
            {data ? data.shops.map(prod => {
                return (<div className="card" onClick={e=>navigate("/d/shop/"+prod.id)}>
                    {/* <Image publicId={prod.images?prod.images[0].public_id:""} version="1573726751" cloud_name={config.cloud_name} secure="true" alt="Casual Jacket" height="200" width="200" crop="thumb" /> */}
                    <img 
                    // src={prod.images.length!=0?prod.images[0].src:"https://images.pexels.com/photos/8105066/pexels-photo-8105066.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
                    />
                    <div className="card-body">
                        <div className="card-title flex">
                            {prod.name}

                        </div>
                        <div className="rating">
                            <h6 className="text-secondary lh-1">
                            <i className="fa fa-fire pr-1"></i>Hot in Enugu</h6>
                        </div>
                    </div>
                </div>)}):null}
            {/* end of card */}

            
            
        </div>
        
        </div>
    </section>
    )
}

export default AllShopsComp;