import React from 'react'
import { Link } from 'react-router-dom'

import { slugify } from '../util/url'

import PageHeader from '../components/PageHeader'
import './Home.css'

export default ({ fields }) => {
  const { title, subtitle, featuredImage } = fields
  return (
    <main className='Home'>
      <PageHeader
        large
        title={title}
        subtitle={subtitle}
        backgroundImage={featuredImage}
      />

      <div className='section'>
        <div className='container'>
          {/* <Content source={body} /> */}
          <p>
            Welcome to the Johnny Mohawk blog. If you are here, you probably already know me or have come across my work 
            somewhere here on the interwebs. If that is not the case, you are probably asking,&nbsp;
            <Link to={slugify(`/about`)} className='homeLinks'>who the f*ck is Johnny Mohawk?</Link> <br/><br/> 

            Otherwise continue to the&nbsp;
            <Link to={slugify(`/blog`)} className='homeLinks'>bloggery</Link>.
          </p>
        </div>
      </div>
    </main>
  )
}
