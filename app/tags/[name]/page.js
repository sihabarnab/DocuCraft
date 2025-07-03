import ContentDisplay from "@/components/ContentDIsplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsByTag } from "@/utils/doc-utils";
import React from "react";

const TagPage = ({ params: { name } }) => {
  const docs = getDocuments();
  const matchedDocuments = getDocumentsByTag(docs, name);
  return <ContentDisplay id={matchedDocuments[0].id} />;
};

export default TagPage;
