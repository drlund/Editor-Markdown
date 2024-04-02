import React, { useState } from "react";
import Header from "./components/Header";
import MarkdownEditor from "./components/MarkdownEditor";
import PreviewPane from "./components/PreviewPane";
import Footer from "./components/Footer";

const App = () => {
  const [markdownContent, setMarkdownContent] = useState("");

  return (
    <div>
    <Header/>
    <div className="container mx-auto p-4 flex">
      <div className="w-1/2 pr-4">
        <MarkdownEditor onChange={setMarkdownContent} />
      </div>
      <div className="w-1/2 pl-4">
        <PreviewPane content={markdownContent} />
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default App;