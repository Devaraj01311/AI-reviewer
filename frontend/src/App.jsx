import { useState } from "react";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import "./App.css";

import CodeEditor from "./page/codeEditor";   
import ReviewPanel from "./page/reviewPanel"; 

function App() {
  const [code, setCode] = useState(`
    function sum() {
      return a + b;
    }
  `);

  const [review, setReview] = useState("");

  return (
    <main>
      <div className="left">
        <div className="code">
          <CodeEditor code={code} setCode={setCode} />
        </div>
        <ReviewPanel code={code} review={review} setReview={setReview} />
      </div>
      <div className="right">
        <Markdown rehypePlugins={[rehypeHighlight]}>
          {review}
        </Markdown>
      </div>
    </main>
  );
}

export default App;
