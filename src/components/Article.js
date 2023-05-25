import React from "react";


function Article({title,date='January 1, 1970',preview, minutes}){
    

    return (
        <article>
            <h3>{title}</h3>
            <small>{date}  {showEmoji(minutes)} {minutes} min read</small>
            <p>{preview}</p>
        </article>
        
    )
}
function showEmoji(minutes){

    let cup
    function roundNearest5(num, flag) {
        return Math.round(num / flag) * flag;
      }
    
    switch(roundNearest5(minutes, 5)) {
        case 5:
          return cup='☕️'
          break;
        case 10:
          return cup='☕️☕️'
          break;
        case 15:
          return cup='☕️☕️☕️'
          break;
        case 20:
          return cup='☕️☕️☕️☕️'
          break;
        case 25:
          return cup='☕️☕️☕️☕️☕️'
          break;
      } 
      switch(roundNearest5(minutes, 10)) {
        case 30:
          return cup='🍱🍱🍱'
          break;
        case 40:
          return cup='🍱🍱🍱🍱'
          break;
        case 50:
          return cup='🍱🍱🍱🍱🍱'
          break;
        case 60:
          return cup='🍱🍱🍱🍱🍱🍱'
          break;
      } 

}
export default Article;