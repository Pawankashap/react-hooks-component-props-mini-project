import React from "react";
import Article from "./Article";

function ArticleList({posts}){
    
     const articallistObj = posts.map((artical)=>{
         return <Article key={artical.id} title={artical.title} date={artical.date} preview={artical.preview} minutes={artical.minutes}/>
     })
    return (
        <main>
            {articallistObj} 
        </main>
    )
}
export default ArticleList;

//☕️🍱