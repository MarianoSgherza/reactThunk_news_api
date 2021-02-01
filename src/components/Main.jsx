import React, {Component} from 'react'
import { connect } from 'react-redux';
//import news from "../news";
import Newsitem from './Newsitem';
import readNews from '../redux/actions'
import axios from 'axios';
//import {bindActionCreators} from 'redux'


const NEWS_API_URL = 'http://newsapi.org/v2/top-headlines?' +
'country=ar&' +
'apiKey=e88b1224c9634da9a583827c21a24c5a'
class Main extends Component /*({newsItems, readNews})*/{

    /*componentDidMount(){
        
        fetch(NEWS_API_URL)
            .then((response) => response.json()) 
            .then((news)=> this.props.readNews(news.articles))
        
        //this.props.readNews(news)
    }*/

    componentDidMount(){
        
        axios.get(NEWS_API_URL)
            .catch(error => console.log('BAD', error))
            .then(response => {console.log('GOOD', response)
            this.props.readNews(response.data.articles)})
    }

    render(){
        
    return(

        <main>
        <h1>Las noticias de hoy</h1>
        <h2>Malinformate con este hermoso sitio</h2> 
        <section className="newsgrid">
            {this.props.newsItems.map((item, key) => 
                <Newsitem key = {key} {...item}/>
                )
            }
        </section>       

    </main>
    
    )
            }
}    
const mapDispatchToProps = (dispatch) => {
   
    return {
    
        readNews : (newsb) => dispatch(readNews(newsb))

    }
    
} 

const mapStateToProps = (state) => {

    return {newsItems: state.readNews} 
}
export default connect (mapStateToProps, mapDispatchToProps) (Main)