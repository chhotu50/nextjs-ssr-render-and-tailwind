"use client";
import React, { useEffect, useRef, useState } from "react";
const CustomEditor = (props: any) => {
  const editorRef: any = useRef();
  const [editorLoaded, setEditorLoaded] = useState(false);
  const { CKEditor, ClassicEditor } = editorRef.current || {};
  const [data, setData] = useState("");
  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
    };
    setEditorLoaded(true);
  }, []);
  console.log(data, "data");
  return (
    <div className="h-min w-11/12 lg:w-full">
      {editorLoaded ? (
        <CKEditor
          editor={ClassicEditor}
          data={data}
          onReady={(editor: any) => {
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event: any, editor: any) => {
            const data = editor.getData();
            setData(data);
          }}
          config={{
            removePlugins: ["EasyImage"],
            mediaEmbed: {
              previewsInData: true, // Show previews of embedded content in the data
            },
            fontFamily: {
              options: [
                  'default',
                  'Ubuntu, Arial, sans-serif',
                  'Ubuntu Mono, Courier New, Courier, monospace'
              ]
          },
            toolbar: {
              items: [
                "heading",
                'fontFamily',
                "|",
                "bold",
                "italic",
                "fontColor",
                "fontBackgroundColor",
               
                "|",
                "numberedList",
                "bulletedList",
                "|",
                "outdent",
                "indent",
                "|",
                "blockQuote",
                "|",
                "undo",
                "redo",
                "|",
                "mediaEmbed", // Add the mediaEmbed plugin to the toolbar
              ],
            },
          }}
          // config={{
          //   removePlugins: ["EasyImage"],
          // }}
          className="w-full h-full"
        />
      ) : (
        <p className="h-full w-full flex items-center justify-center">
          Loading...
        </p>
      )}
    </div>
  );
};

export default CustomEditor;
