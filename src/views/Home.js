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
            Welcome to the Johnny Mohawk blog. So...&nbsp;
            <Link to={slugify(`/about`)} className='homeLinks'>who the f*ck is Johnny Mohawk?</Link> <br/><br/> 

            Don't care? Continue to the&nbsp;
            <Link to={slugify(`/blog`)} className='homeLinks'>bloggery</Link>.<br/><br/>

            Check out more of my work&nbsp;
            <a href="https://www.johnnelsonalden.com/" target="_blank" rel="noopenner noreferrer" className='homeLinks'>here</a>.
          </p>
        </div>
      </div>
    </main>
  )
}
