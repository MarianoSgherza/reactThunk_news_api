import React from 'react'

const Newsitem = ({title, description, urlToImage, content}) =>
    <article>
        <h3 className='titular'>{ title }</h3>
        <h4 className='volanta'>{ description }</h4>
        <div className='imagen-noticia'>
            <img className='foto-noticia' src= { `${urlToImage}` } alt="" srcSet=""/>
        </div>
        <p className='cuerpo'>{content}</p>
        
    </article>

export default Newsitem