"use client";

import React, { useEffect, useState } from "react";

const DescriptionView = ({
  content,
  details,
  className,
}: {
  content: string;
  details?: boolean;
  className?: string;
}) => {
  const [truncatedContent, setTruncatedContent] = useState("");

  useEffect(() => {
    const truncateContent = (text: string, maxLength: number) => {
      if (!text) return "";
      return text.length > maxLength
        ? text.substring(0, maxLength) + "..."
        : text;
    };

    if (details) {
      setTruncatedContent(content || "");
    } else {
      setTruncatedContent(truncateContent(content, 100));
    }
  }, [content, details]);

  return (
    <div
      className={`prose w-full max-h-full max-w-full ${className}`}
      dangerouslySetInnerHTML={{ __html: truncatedContent || "" }}
    />
  );
};

export default DescriptionView;
