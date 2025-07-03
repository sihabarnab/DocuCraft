import ContentDisplay from "@/components/ContentDIsplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsByCategory } from "@/utils/doc-utils";

const CategoriesPage = ({ params: { name } }) => {
  const docs = getDocuments();
  const matchedDocs = getDocumentsByCategory(docs, name);
  return <ContentDisplay id={matchedDocs[0].id} />;
};

export default CategoriesPage;
