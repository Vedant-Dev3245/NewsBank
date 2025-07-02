import React from 'react'

export default function NewsItem(props) {
    let des="",til=""
    til=props.title
    if(props.description===null){
        des=""
    }
    else{
    if(props.title.length+props.description.length<=220){
         des=props.description
        }
    else{
    if(props.description.length>140){
         des=props.description.slice(0,140)+"..."
    }
   
    if(props.description.length<=150){
        des=props.description
    }
    }
}
    
  return (
    <div >
      <div className="card my-3" style={{height:"35rem"}}>
        <div>
  <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"90%",zIndex:"1"}}>
    {props.source}
  </span>
  </div>

  <img src={props.imgUrl?props.imgUrl:"https://s.france24.com/media/display/e6279b3c-db08-11ee-b7f5-005056bf30b7/w:1024/p:16x9/news_en_1920x1080.jpg"} className="card-img-top" alt="..." style={{width:"100%",height:"14rem",objectFit:"cover"}}/>
  <div className="card-body">
    <h5 className="card-title">{til}</h5>
    <p className="card-text">{des}</p>
     <p className="card-text"><small className="text-body-secondary ">On-{ new Date(props.date).toLocaleString() } <br/> By-{props.author} </small></p>
    <a href={props.newsUrl} target='blank' className="btn btn-dark position-absolute bottom-0 mb-3 my-3">Read more</a>
  </div>
</div>
    </div>
  )
}
