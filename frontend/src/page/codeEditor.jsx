import {  useEffect } from "react";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

function CodeEditor({code,setCode}){
   useEffect(() => {
    prism.highlightAll()
  }, [])

  return(
        <Editor 
            value={code}
            onValueChange={code => setCode(code)}
            highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira code",monospace',
              fontSize:16,
              border: "1px solid #ddd",
              borderRadius:"5px",
              height: "100%",
              width: "100%",
            }}
            />
 )}

export default CodeEditor