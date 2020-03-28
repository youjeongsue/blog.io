import React from 'react'

export const PostContainer = ({ html }) => (
  <div className="post-container">
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </div>
)
