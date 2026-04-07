import { defineType, defineField } from "sanity";

export default defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "color",
      title: "Color",
      type: "string",
      description:
        'Tailwind bg + text classes, e.g. "bg-blue-100 text-blue-700"',
      options: {
        list: [
          { title: "Blue", value: "bg-blue-100 text-blue-700" },
          { title: "Purple", value: "bg-violet-100 text-violet-700" },
          { title: "Green", value: "bg-emerald-100 text-emerald-700" },
          { title: "Amber", value: "bg-amber-100 text-amber-700" },
          { title: "Rose", value: "bg-rose-100 text-rose-700" },
          { title: "Cyan", value: "bg-cyan-100 text-cyan-700" },
        ],
      },
      validation: (r) => r.required(),
    }),
  ],
});
