import markdownStyles from './markdown-styles.module.css'
import React from 'react';
import ToTop from './toTop';

type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  return (
    <div className="max-w-5xl mx-auto">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
       <ToTop />
    </div>
  )
}

export default PostBody
