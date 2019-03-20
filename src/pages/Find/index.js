import React from 'react'
import { Switch,Route } from 'react-router-dom'
import './find.scss'
import CommentArticle from './CommentArticle'
import ShareArticle from './ShareArticle'
import FindIndex from './FindIndex'

class Find extends React.Component{
  render(){
    return (
        <Switch>
          <Route path='/find/' exact component={FindIndex}/>
          <Route path='/find/commentarticle' exact component={CommentArticle}/>
          <Route path='/find/sharearticle' exact component={ShareArticle}/>
        </Switch>  
    )
  }
}
export default Find