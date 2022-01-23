import React, {useState, useEffect}  from 'react';
import AdminNav from '../../components/nav/AdminNav';
import axios from 'axios';
import Cookie from 'js-cookie';
import { useMutation, useQuery, gql} from '@apollo/client';
import Compress from "react-image-file-resizer";


import Alert from '../../components/infos/Alert';
import { productCreateQuery } from '../../constants/schemas';
import { CreateHistory } from '../../functions/history/HistoryAction';


const ImgQuery = gql`
        mutation uploadImage($image:String!){
            uploadImage(image:$image){
                url
            }
        }
`


const Product = (props)=>{

    const [handleProductCreate, productCreateResults] = useMutation(productCreateQuery)
    const [imageLoading, setImageLoading] = useState(false)
    
    
    const [imagePath, setImagePath] = useState([])
    const [imageResults, setImageResults] = useState([])

    const [values, setValues] = useState({
        name:"white shirts on dads",
        description:"the white shirt everybody desires",
        sellerId:"",
        images:[],
        price:5000,
        quantity:40,
        brand:"palms angels",
        shipping:true,
    })

    useEffect(() => {
        // console.log(Cookie.get("productcreate"), "THIS IS FROM THE Cache")
        
      return () => {
        console.log(productCreateResults)
      };
    }, [productCreateResults])
    // console.log(Cookie.get("productcreate").productcreate, "THIS IS FROM THE Cache")



    const compressFileAndUpload = async (file, cb) =>{
        let result = ""
        console.log("I AM INSIDE COMRESS FILE FUNCTION")
       Compress.imageFileResizer(
            file, // the file from input
            480, // width
            480, // height
            "JPEG", // compress format WEBP, JPEG, PNG
            70, // quality
            0, // rotation
            async (uri) => {
    
            },
            "blob" // blob or base64 default base64
        );
        
    }
    


    const imageUploader = async (imageFile) => {
        setImageLoading(true)
        const formDat = new FormData()
        formDat.append("file", imageFile)
        formDat.append("name", "things")
        // for (var value of formDat.values()) {
        //     console.log(value);
        // }
        console.log("I AM INSIDE COMRESS IMAGE UPLOADER FUNCTION")

        const result = await axios({method:"post", url:"http://localhost:8000/image/upload", data: formDat, headers: {
            'Content-Type': 'multipart/form-data'
        }})

        setImageLoading(false)

        return(result.data)
        
    }

    

        
    
    const innitialState = Cookie.get("productcreate")

    const handleSubmit = (e) => {
        //
        e.preventDefault()
        const newValues = {...values,  sellerId:"61e5237a37296212d668ad9c"} 

        setValues(newValues)
        CreateHistory({type:"product", name:"Product Creation",sourceId:"norbertmbafrank@gmail.com", targetId:"petermbafrank@gmail.com", description:"created a product" })
        console.log(newValues)

        handleProductCreate({variables:{name:newValues.name, description:newValues.description,
                                sellerId:newValues.sellerId, images:newValues.images, price:newValues.price,
                            quantity:newValues.quantity, brand:newValues.brand, shipping:newValues.shipping}})
        

            console.log(productCreateResults)
        
    }

    
    const deleteImage = async (public_id) => {
          const result2 = await axios({method:"post", url:"http://localhost:8000/image/delete", data: {public_id}
      })

      console.log(result2)
    }

    const handleImageUpload = async (imagesi) => {
        let listOfImages = [...imagesi]
        console.log(listOfImages)
        const uploadedFileResult = await compressFileAndUpload(listOfImages[0], imageUploader)
        console.log(uploadedFileResult)

        if(listOfImages){
            console.log("I AM INSIDE HANDLE IMAGe UPLOAD FUNCTION")
            listOfImages.map( (img) => {
                console.log(img)
                console.log("I AM INSIDE IMAGE LOOP FUNCTION")

                if (img.type == "image/jpeg" || "image/png" || "image/jpg"){
                    const uploadedFileResult = compressFileAndUpload(img, imageUploader)
                    console.log(imageResults)
                        
                }else{
                    console.log("this is not an image")
                }
            })
        }
    }

    const handleFileChange = (files) => {
        if (files){
            setImageLoading(true)
            const listOfImages = [...files]
            let ct = 0
            let compressedFiles = []
            
            handleMultipleCompressAndUpload(ct, listOfImages, compressedFiles )
        }
        
    }


    const handleMultipleCompressAndUpload = (ct, toBCImageFiles, comImageFiles) => {
        if (ct >= toBCImageFiles.length){
            let ctt = 0
            let resu = []
            console.log(comImageFiles, "THIS ARE THE COMPRESSED IMAGE FILES")
            multipleImageUpload(comImageFiles,resu,  ctt )

        }else {
            // console.log(comImageFiles, "Compressed image files")
            Compress.imageFileResizer(
                toBCImageFiles[ct], // the file from input
                480, // width
                480, // height
                "JPEG", // compress format WEBP, JPEG, PNG
                70, // quality
                0, // rotation
                (uri) => {
                    comImageFiles.push(uri)
                    handleMultipleCompressAndUpload(ct + 1, toBCImageFiles, comImageFiles )
                },
                "blob" // blob or base64 default base64
            );
        }
    }

    const multipleImageUpload = (imageFiles,SimageResults, ct, ImIDs=[]) => {

        if (ct < imageFiles.length){
            const formDat = new FormData()
            formDat.append("file", imageFiles[ct])
            formDat.append("name", "things")

            console.log("I AM INSIDE COMPRESS IMAGE UPLOADER FUNCTION")

            axios({method:"post", url:"http://localhost:8000/image/upload", data: formDat, headers: {
                'Content-Type': 'multipart/form-data'
            }}).then(res => {
                SimageResults.push(res.data)
                ImIDs.push(res.data._id)
                multipleImageUpload(imageFiles,SimageResults, ct + 1, ImIDs)
            }).catch(err=>{
                console.log(err)
                setImageLoading(false)
            })

            
        }else{
            console.log("Am done")
            setImageLoading(false)
            setValues({...values, images:ImIDs})
            setImageResults(SimageResults)
            console.log(SimageResults, "THIS IS FROM HERE ELSE")
        }
    }

    const handleChange = (e) => {
        //
        
    }

    

    const productForm = ()=>(
        <form className='flex flex-column' onSubmit={handleSubmit}>
            <Alert msg="Wow"  type='success' />
            <div className={"form-group"}>
                <label className={''}>
                    <input  
                     onChange={e=>handleFileChange(e.target.files)}
                     required
                     accept='image/*'
                     name={"files"}
                     multiple
                     class="form-control-file" 
                     type={"file"} placeholder={"Name"}  />

                    
                </label>
            </div>
            

            <div className={"form-group"}>
                <input  onChange={e=>setValues({...values, name:e.target.value})} autoFocus class="form-control" type={"text"} placeholder={"Name"} value={values.name} />
            </div>


            <div className={"form-group"}>
                
                <textarea class="form-control" 
                type={"text"} 
                placeholder={"Description"} 
                value={values.description} 
                onChange={e=>setValues({...values, description:e.target.value})} >

                </textarea>
            </div>

            

            <div className={"form-group"}>
                
                <input class="form-control" type={"text"} placeholder={"Price"} value={values.price} onChange={e=>setValues({...values, price:e.target.value})} />
            </div>

            {/* {JSON.stringify(values.images)} */}

            <div className={"form-group"}>
                
                <input class="form-control" type={"text"} placeholder={"quantity"} value={values.quantity} onChange={e=>setValues({...values, quantity:e.target.value})} />
            </div>

            <div className={"form-group"}>
                
                <input class="form-control" type={"text"} placeholder={"brand"} value={values.brand} onChange={e=>setValues({...values, brand:e.target.value})} />
            </div>

            <div className={"form-group"}>
                
                <input class="form-control" type={"text"} placeholder={"shipping"} value={values.shipping} onChange={e=>setValues({...values, shipping:e.target.value})} />
            </div>

        

            <div className={"form-group"}>
                
                <button class="btn-cart" type={"submit"} onClick={handleSubmit} >Save</button>
            </div>
        </form>
    )
    return (
        <div className={"create-product "}>
            <div className={"container grid grid-2-20-80 gap-5"}>
                <div className={""}>
                    <AdminNav/>
                </div>
               
            {JSON.stringify(productCreateResults.data)}

                <div className={""}>
                   <center> <h4>Create your Product!</h4></center>
                   <div className='flex'>{!imageLoading ? imageResults.length != 0?
                   imageResults.map(imagP=>(<div key={imagP.public_id} className='preview-img-container'>
                       <span onClick={e=>deleteImage(imagP.public_id)} className='image-close fas fa-times'></span>
                       <img className='image-preview' src={imagP.url} />
                       </div>)):null:
                       <i className="fas fa-spinner fa-pulse fa-2x m-3"></i>}</div>
                    {productForm()}
                </div>
            </div>
            
        </div>
    )
}

export default Product