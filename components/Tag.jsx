import Link from "next/link";
import React from "react";

const Tag = ({ tag }) => {
  return (
    <Link
      href={`/tags/${tag}`}
      className="inline-block px-2 py-1 mr-2 rounded-md text-xs font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors"
    >
      {tag}
    </Link>
  );
};

export default Tag;
