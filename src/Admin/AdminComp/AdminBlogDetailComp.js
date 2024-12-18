import React from 'react'
import { replace, useNavigate } from 'react-router-dom'

const AdminBlogDetailComp = (props) => {

     console.log(props)

    const GetDate=(date)=>{
        if(!date) return "-----"

        const d= new Date(date)
            return (`${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`)
    }
    const navigate=useNavigate()
    const open=(key)=>{
        localStorage.setItem("CurrentBlog",JSON.stringify(key))
        navigate("/AdminBlogDetail",{replace:true})
        props.fun(key)

          }
  return (
    <div className="news-details-wrap ptb-100">
                <div className="container">
                    <div className="row gx-55 gx-5">
                        <div className="col-lg-8">
                            <article>
                                <div className="news-img">
                                    <img loading='lazy' src={props?.data?.Image?.url} alt="Image" />
                                    <a  className="news-cat">{props?.data?.Category}</a>
                                </div>
                                <ul className="news-metainfo list-style">
                                    <li><i className="fi fi-rr-calendar-minus" /><a >{GetDate(props?.data?.Date)}</a></li>
                                    <li><i className="fi fi-rr-user" />{props?.data?.Author}</li>
                                </ul>
                                <div className="news-para">
                                    <h1>{props?.data?.Heading}</h1>
                                    <p>{props?.data?.Description}</p>
                                </div>
                                {
                                    props?.data?.Images?.map(function(obj,index){
                                        return(
                                
                                <div key={index} className="col-md-6">
                                    <div className="news-img">
                                       <img src={obj?.urls?obj.urls:"assets/img/news/single-news-5.webp"} alt='Images'/>
                                    </div>
                                </div>
                                    )

                                    })

                                }
                               
                              {
                                props?.data?.Sub_Headings?.map(function(obj,index){
                                 return(   <div className="news-para">
                                    <h5>{obj?.Sub_Heading}</h5>
                                    <p>{obj?.Sub_Heading_Description}</p>
                                        </div>
                                 )
                                })
                              }
                                </article>

                            {
                                props?.previous?<a onClick={()=>open(props.previous)} className="prev-post" href="#">
                                    <span>PREVIOUS</span>
                                    <h6>{props.alldata[props.previous].Title}</h6>
                                </a>:<a></a>
                            }
                            {
                                props?.next && <a onClick={()=>open(props.previous)}  className="next-post" href="#">
                                    <span>NEXT</span>
                                    <h6>{props.alldata[props.next].Title}</h6>
                                </a>
                            }
                                
                            </div>
                            <h3 className="comment-box-title">3 Comments</h3>
                            <div className="comment-item-wrap">
                                <div className="comment-item">
                                    <div className="comment-author-img">
                                        <img src="assets/img/author/author-thumb-1.webp" alt="Image" />
                                    </div>
                                    <div className="comment-author-wrap">
                                        <div className="comment-author-info">
                                            <div className="row align-items-start">
                                                <div className="col-md-9 col-sm-12 col-12 order-md-1 order-sm-1 order-1">
                                                    <div className="comment-author-name">
                                                        <h5>Killian Mider</h5>
                                                        <span className="comment-date">Jul 22, 2024 | 7:10 PM</span>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 col-sm-12 col-12 text-md-end order-md-2 order-sm-3 order-3">
                                                    <a href="#cmt-form" className="reply-btn">Reply</a>
                                                </div>
                                                <div className="col-md-12 col-sm-12 col-12 order-md-3 order-sm-2 order-2">
                                                    <div className="comment-text">
                                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                                            sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                                            magna aliquyam.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-item reply">
                                    <div className="comment-author-img">
                                        <img src="assets/img/author/author-thumb-2.webp" alt="Image" />
                                    </div>
                                    <div className="comment-author-wrap">
                                        <div className="comment-author-info">
                                            <div className="row align-items-start">
                                                <div className="col-md-9 col-sm-12 col-12 order-md-1 order-sm-1 order-1">
                                                    <div className="comment-author-name">
                                                        <h5>Everly Leah </h5>
                                                        <span className="comment-date">Jul 23, 2024 | 7:10 PM</span>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 col-sm-12 col-12 text-md-end order-md-2 order-sm-3 order-3">
                                                    <a href="#cmt-form" className="reply-btn">Reply</a>
                                                </div>
                                                <div className="col-md-12 col-sm-12 col-12 order-md-3 order-sm-2 order-2">
                                                    <div className="comment-text">
                                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                                            sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                                            magna aliquyam erat.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-item">
                                    <div className="comment-author-img">
                                        <img src="assets/img/author/author-thumb-3.webp" alt="Image" />
                                    </div>
                                    <div className="comment-author-wrap">
                                        <div className="comment-author-info">
                                            <div className="row align-items-start">
                                                <div className="col-md-9 col-sm-12 col-12 order-md-1 order-sm-1 order-1">
                                                    <div className="comment-author-name">
                                                        <h5>Michel Ohio</h5>
                                                        <span className="comment-date">Jun 14, 2024 | 7:10 PM</span>
                                                    </div>
                                                </div>
                                                <div className="col-md-3 col-sm-12 col-12 text-md-end order-md-2 order-sm-3 order-3">
                                                    <a href="#cmt-form" className="reply-btn">Reply</a>
                                                </div>
                                                <div className="col-md-12 col-sm-12 col-12 order-md-3 order-sm-2 order-2">
                                                    <div className="comment-text">
                                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                                            sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                                            magna aliquyam.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div id="cmt-form">
                                <div className="mb-30">
                                    <h3 className="comment-box-title">Leave A Comment</h3>
                                    <p>Your email address will not be published. Required fields are marked.</p>
                                </div>
                                <form action="#" className="comment-form">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" name="name" id="name" required placeholder="Name*" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="email" name="email" id="email" required placeholder="Email Address*" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <textarea name="messages" id="messages" cols={30} rows={10} placeholder="Please Enter Your Comment Here" defaultValue={""} />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-check checkbox">
                                                <input className="form-check-input" type="checkbox" id="test_2" />
                                                <label className="form-check-label" htmlFor="test_2">
                                                    Save my info for the next time I commnet.
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mt-3">
                                            <button className="btn-two">Post A Comment<i className="flaticon-right-arrow" /></button>
                                        </div>
                                    </div>
                                </form>
                            </div> */}
                        </div>
                        <div className="col-lg-4">
                            <div className="sidebar">
                                <div className="sidebar-widget-two">
                                    <form action="#" className="search-box-widget">
                                        <input type="search" placeholder="Search" />
                                        <button type="submit">
                                            <i className="fi fi-rr-search" />
                                        </button>
                                    </form>
                                </div>
                                <div className="sidebar-widget">
                                    <h3 className="sidebar-widget-title">Categories</h3>
                                    <ul className="category-widget list-style">
                                        <li><a href="#"><img src="assets/img/icons/arrow-right.svg" alt="Image" />Celebration <span>(6)</span></a></li>
                                        <li><a href="#"><img src="assets/img/icons/arrow-right.svg" alt="Image" />Culture<span>(3)</span></a></li>
                                        <li><a href="#"><img src="assets/img/icons/arrow-right.svg" alt="Image" />Fashion<span>(2)</span></a></li>
                                        <li><a href="#"><img src="assets/img/icons/arrow-right.svg" alt="Image" />Inspiration<span>(8)</span></a></li>
                                        <li><a href="#"><img src="assets/img/icons/arrow-right.svg" alt="Image" />Lifestyle<span>(6)</span></a></li>
                                        <li><a href="#"><img src="assets/img/icons/arrow-right.svg" alt="Image" />Politics<span>(2)</span></a></li>
                                        <li><a href="#"><img src="assets/img/icons/arrow-right.svg" alt="Image" />Trending<span>(4)</span></a></li>
                                    </ul>
                                </div>    
                               {
                               (props?.alldata && props?.current)?Object.keys(props.alldata).map((key,index)=>{
                                    if(key!==props.current){
                                        const date= new Date(props?.alldata[key]?.Date)
                                        return(
                                            <div style={{"position":"absolute","right":"0px"}} key={index} className="news-card-one">
                                            <div className="news-card-img">
                                                <img style={{"height":"100%","widows":"100%","borderRadius":"50%"}} src={props?.alldata[key]?.Image?.url} alt="Image" />
                                            </div>
                                            <div className="news-card-info">
                                                <h3><a href="#">{props?.alldata[key].Title}</a>
                                                </h3>
                                                <ul className="news-metainfo list-style">
                                                    <li><i className="fi fi-rr-calendar-minus" /><a href="#">{`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`}</a></li>
                                                </ul>
                                            </div>
                                        </div>

                                        )
                                    }

                                }):'' 
                               
                            }
                                <div className="sidebar-widget">
                                    <h3 className="sidebar-widget-title">Popular Tags</h3>
                                    <ul className="tag-list list-style">
                                        <li><a href="news-by-tags.html">BUSINESS</a></li>
                                        <li><a href="news-by-tags.html">FOOD</a></li>
                                        <li><a href="news-by-tags.html">SCIENCE</a></li>
                                        <li><a href="news-by-tags.html">LIFESTYLE</a></li>
                                        <li><a href="news-by-tags.html">SPORTS</a></li>
                                        <li><a href="news-by-tags.html">PHOTO</a></li>
                                        <li><a href="news-by-tags.html">TECHNOLOGY</a></li>
                                        <li><a href="news-by-tags.html">CONTENT</a></li>
                                        <li><a href="news-by-tags.html">FEATURED</a></li>
                                        <li><a href="news-by-tags.html">AUDIO</a></li>
                                        <li><a href="news-by-tags.html">FASHION</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              


  )
}

export default AdminBlogDetailComp
