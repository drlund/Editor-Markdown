import React, { useState } from "react";
import ReactMarkdownEditorLite from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";

const MarkdownEditor = ({ onChange }) => {
  const [content, setContent] = useState("");

  const handleEditorChange = ({ text }) => {
    setContent(text);
    onChange(text);
  };

  return (
    <ReactMarkdownEditorLite value={content} onChange={handleEditorChange} />
  );
};

export default MarkdownEditor;