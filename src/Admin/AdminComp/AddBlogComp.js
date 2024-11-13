import React, { useRef, useState } from 'react'

const AddBlogComp = () => {
const [obj,setobj]= useState({})
const[input,setinput]=useState([])
const [headimg,setheadimg]= useState(null)
const img= useRef()
const moreimg= useRef()
const[image,setimage]= useState([])
const[error,seterror]=useState(null)

function set(event){
setobj({...obj,[event.target.name]:event.target.value})
}
 const Create=()=>{
setinput(input=>[...input,{id:input.length+1}])
}
const radio=(event)=>{
    setobj({...obj,"Status":event.target.id})
}
const set1=(event,Obj,index)=>{
const result= {...Obj,[event.target.name]:event.target.value}
input.splice(index,1,result)
setinput([...input])
}
// console.log(input)
const upload=(event)=>{
const file= event.target.files[0]

if(!file) return alert("No Iimage is selected")
    const ext= file.type.split("/")
if(ext[0]!=="image") return alert("Only Images can be uploaded")
    if(ext[1]=="png" ||ext[1]=="jpg" ||ext[1]=="jpeg" ||ext[1]=="PNG" ||ext[1]=="jfif") 
        {
            return setheadimg(file)
        }
        return alert("Only png,jpg,jpeg & jfif file types are supported")
}
const uploads=(event)=>{
    const file= event.target.files
    if(!file) return alert("No Iimage is selected")
        if(file.length>10) return alert("Only 10 images can be uploaded")

      let status= image
    let count=0
    for(let i=0; i<file.length;i++){
        if(status.length>9) {
            alert("Only 10 images can be uploaded")
            break;
        }

        const ext=file[1].type.split("/")
        if(ext[0]!=="image"){
            count++
        }
        else{
            if(ext[1]=="png" ||ext[1]=="jpg" ||ext[1]=="jpeg" ||ext[1]=="PNG" ||ext[1]=="jfif") 
         {
            status.push(file[i])
         }         
         else{
            count++
         }
        }
    }
    setimage([...status])
    seterror(count)
    }
    // console.log(image,error)
    const remove=(index)=>{
image.splice(index,1)
setimage([...image])
    }
const save=()=>{
    if(!obj.Title ||!obj.Author ||!obj.Category ||!obj.Tags ||!obj.Description ||!obj.Heading ) return alert("Field is empty")
        if(!obj.headimg) return alert("Upload Heading Image")
}
    return (
        <div>
            <div className="checkout-wrap ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-8 col-xl-7 col-lg-7">
                            <form action="#" className="checkout-form">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <h3 className="checkout-box-title">Add Your Blogs Here....</h3>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input type="text" onChange={set} name="Title" placeholder="Title" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input type="text" name="Author" onChange={set} placeholder="Author" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input type="email" name="Heading" onChange={set} placeholder="Heading" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <textarea name='Description' onChange={set} placeholder='Description'></textarea>
                                             </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input type="text" name="Category" onChange={set} placeholder="Category" />
                                        </div>
                                    </div>
                                    <div>
                                        <span style={{fontSize:"20px"}}>Status:</span>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="d-flex align-items-center">
                                                                                        
                                            <div className="checkbox style-two form-group me-5">
                                                <input type="radio" id="Active" onClick={radio} name='Status' />
                                                <label htmlFor="Active">Active</label>
                                            </div>
                                            <div className="checkbox style-two form-group">
                                                <input type="radio" onClick={radio} name='Status' id="In-Active" />
                                                <label htmlFor="In-Active">In-Active</label>
                                            </div>
                                        </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input name='Tags' onChange={set} placeholder='Tags'></input>
                                             </div>
                                    </div>
                                    <button className="btn-two w-100 d-block" style={{height:"48px", padding:"9px"}} onClick={Create}>Create Sub-Heading<i className="flaticon-right-arrow" /></button>
                                    {
                                        input.map(function(input,index){
                                            return(
                                                <div className='row' key={index}>
                                                    <div className="col-lg-6">
                                        <div className="form-group">
                                    <input type='text' name='Sub_Heading' onChange={(e)=>set1(e,input,index)} placeholder={`Enter the Sub Heading-${input.id}`}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                        <input type='text' name='Sub_Heading_Description' onChange={(e)=>set1(e,input,index)} placeholder={`Enter the Sub Heading Description-${input.id}`}/>
                                        </div>
                                    </div>
                                                </div>
                                            )

                                        })
                                    }
                                    
                                    </div>
                                    <div className="col-lg-12 mt-4">
                                        <div className="form-group mb-0">
                                            <button type="button" onClick={save} className="btn-one">Save Information<i className="flaticon-right-arrow" /></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-xxl-4 col-xl-5 col-lg-5">
                            <div className="sidebar">
                                <div className="checkout-box">
                                    <h4 className="cart-box-title">Heading Image</h4>
                                    <div className="cart-total">
                                        <div className="cart-total-wrap">
                                            <div className="cart-total-item">
                                               <img className='img-thumbnail' height={"100%"} width={"100%"} src={headimg?URL.createObjectURL(headimg):'assets/img/newsletter-bg.webp'}/>
                                            </div>
                                        </div>
                                        <input type='file' hidden onChange={upload} ref={img} accept='image/*'/>
                                        <a onClick={()=>img.current.click()} className="btn-two w-100 d-block">Upload Heading Image<i className="flaticon-right-arrow" /></a>
                                      </div>
                                </div>
                                <div className="checkout-box">
                                    <h4 className="cart-box-title">Upload More Images</h4>
                                    <div className="checkout-details">
                                        {
                                            image.map(function(Obj,index){
                                                return(
                                                    <div key={index} className='myimages'>
                                                    <img src={Obj?URL.createObjectURL(Obj):'assets/img/newsletter-bg.webp'}/>
                                                    <i onClick={()=>remove(index)}>X</i>
                                                    </div>
                                                )
                                            })
                                        }

                                            </div>
                                            <div className="checkout-footer mt-4">
                                                <input accept='image/*' multiple={true} hidden ref={moreimg} type='file' onChange={uploads}/>
                                                <button type="button" onClick={()=>moreimg.current.click()} className="btn-one d-block w-100 mt-10">Upload More Images<i className="flaticon-right-arrow" /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default AddBlogComp