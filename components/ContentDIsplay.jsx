import { getDocumentContent } from "@/lib/doc";
import Link from "next/link";
import Tag from "./Tag";

const ContentDisplay = async ({ id }) => {
  const documentContent = await getDocumentContent(id);

  return (
    <article className="prose dark:prose-invert">
      <h1 className="font-bold text-4xl mb-4">{documentContent.title}</h1>

      <div>
        <span>Published On: {documentContent.date}</span> by{" "}
        <Link href={`/author/${documentContent.author}`}>
          {documentContent.author}
        </Link>{" "}
        under the{" "}
        <Link href={`/categories/${documentContent.category}`}>
          {documentContent.category}
        </Link>{" "}
        category.
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {documentContent.tags &&
          documentContent.tags.map((tag) => <Tag key={tag} tag={tag} />)}
      </div>

      <div className="mt-10">
        <div
          className="prose prose-lg dark:prose-invert max-w-none 
            [&>*]:mb-6 
            [&>*:last-child]:mb-0 
            [&_h1]:font-bold 
            [&_h2]:font-bold 
            [&_h3]:font-semibold 
            [&_a]:text-blue-600 
            [&_a:hover]:underline"
          dangerouslySetInnerHTML={{ __html: documentContent.contentHtml }}
        />
      </div>
    </article>
  );
};

export default ContentDisplay;
