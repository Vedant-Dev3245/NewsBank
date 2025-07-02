import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner"
import InfiniteScroll from "react-infinite-scroll-component";


export default function News(props) {
  const [state, setstate] = useState({
    articles: [],
    loading: false,
    page: 1,
    totalResults:0
  });
  const capitalize=()=>{
    let temp=props.category
    return temp.charAt(0).toUpperCase()+temp.slice(1)
  }


  const loadnews=async(temp)=>{
props.setProgress(0);
    setstate({
      ...state,
      loading:true,})
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apikey}&page=${temp}&pageSize=${props.pageSize}`;
      props.setProgress(20)
      const data = await fetch(url);
      props.setProgress(40)
      const parsedData = await data.json();
      props.setProgress(60)
      setstate({
        articles: parsedData.articles,
        loading: false,
        page: temp,
        totalResults:parsedData.totalResults
      });
      document.title=`NewsBank-${capitalize()}`
      props.setProgress(100)
    }
    const fetchData=()=>{
      loadnews(1)
    }

  const fetchMoreData=async ()=>{
    const temp=state.page+1
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${props.apikey}&page=${temp}&pageSize=${props.pageSize}`;
      const data = await fetch(url);
      const parsedData = await data.json();
      setstate({
        articles: state.articles.concat(parsedData.articles),
        loading: false,
        page: temp,
        totalResults:parsedData.totalResults
      });
  }
  
useEffect(() => {
  fetchData();
}, []);
// useEffect(() => {
//   console.log("Articles:", state.articles.length, "Total:", state.totalResults);
// }, [state.articles, state.totalResults]);

  return (
    <>
      <h1 style={{textAlign:"center",marginTop: "5rem"}}> Top Headlines - {capitalize()} </h1>
       {state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={state.articles.length}
          next={fetchMoreData}
          hasMore={state.articles.length<state.totalResults-10}
          loader={<Spinner/> }
          style={{overflow:"visible"}}
        >
          <div className="container">
      <div className="row my-3">
        { state.articles.map((element) => {
          return (
            <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title}description={element.description} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author?element.author:"Unknown"} date={element.publishedAt} source={element.source.name} />
              </div>
            );
          })}
      </div>
      </div>
      </InfiniteScroll>
       
      
    
    </>
  );
}
