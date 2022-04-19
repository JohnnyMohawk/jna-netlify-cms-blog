import React from 'react'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content.js'
import './About.css'

export default ({ fields }) => {
  const { title, subtitle, featuredImage, section1 } = fields
  return (
    <div className='About'>
      <PageHeader
        title={title}
        subtitle={subtitle}
        backgroundImage={featuredImage}
      />
      <div className='section'>
        <div className='container'>
          <Content source={section1} />
        </div>
      </div>
    </div>
  )
}
