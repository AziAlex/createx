import React from 'react'

const Post = ({ params }: { params: { slug: string[] } }) => {
  return (
    <div>
      Post
      <pre>{JSON.stringify(params, null, 2)}</pre>
      {/* <h1>ID: {params.id}</h1> */}
    </div>
  )
}

export default Post
