import { Editor } from '@tiptap/core';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import Link from '@tiptap/extension-link';

const editor = new Editor({
  extensions: [
    Document,
    Paragraph,
    Text,
    Link.configure({
      autolink: true,
      openOnClick: false,
      validate: href => true,
      isAllowedUri: (url, ctx) => true
    })
  ],
  content: '<p>Pune</p>',
});

// Select "Pune"
editor.commands.setTextSelection({ from: 1, to: 5 });

// Apply link
editor.chain().extendMarkRange("link").insertContent({
  type: "text",
  text: "Pune",
  marks: [
    {
      type: "link",
      attrs: {
        href: "-next-real-estate-hotspots",
        target: ""
      }
    }
  ]
}).setLink({ href: "-next-real-estate-hotspots" }).run();

console.log(editor.getHTML());
