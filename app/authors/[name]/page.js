import ContentDisplay from "@/components/ContentDIsplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsByAuthor } from "@/utils/doc-utils";

const AuthorPage = ({ params: { name } }) => {
  const docs = getDocuments();
  const matchedDocs = getDocumentsByAuthor(docs, name);
  return <ContentDisplay id={matchedDocs[0].id} />;
};

export default AuthorPage;
