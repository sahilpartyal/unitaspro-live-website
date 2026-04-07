import { defineType, defineArrayMember } from "sanity";

export default defineType({
  name: "blockContent",
  title: "Block Content",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      marks: {
        decorators: [
          { title: "Bold", value: "strong" },
          { title: "Italic", value: "em" },
          { title: "Code", value: "code" },
        ],
        annotations: [
          {
            name: "link",
            type: "object",
            title: "Link",
            fields: [{ name: "href", type: "url", title: "URL" }],
          },
        ],
      },
    }),
    defineArrayMember({
      type: "image",
      options: { hotspot: true },
      fields: [
        { name: "alt", type: "string", title: "Alt Text" },
        { name: "caption", type: "string", title: "Caption" },
      ],
    }),
    defineArrayMember({
      type: "object",
      name: "html",
      title: "HTML Block",
      fields: [
        {
          name: "code",
          title: "HTML Code",
          type: "text",
          description: "Paste raw HTML here (tables, embeds, etc.)",
        },
      ],
      preview: {
        select: { title: "code" },
        prepare(selection) {
          return { title: "HTML Block", subtitle: String(selection.title ?? "").slice(0, 60) };
        },
      },
    }),
  ],
});
