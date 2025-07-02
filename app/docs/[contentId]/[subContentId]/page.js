import ContentDIsplay from "@/components/ContentDIsplay";
import React from "react";

const SubContentPage = ({ params: { subContentId } }) => {
    return (
      <ContentDIsplay id={subContentId}/>
  );
};

export default SubContentPage;
