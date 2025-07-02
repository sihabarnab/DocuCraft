import ContentDIsplay from '@/components/ContentDIsplay';
import React from 'react'

const ContentPage = ({params: {contentId}}) => {
    return (
      <ContentDIsplay id={contentId} />
  );
}

export default ContentPage;