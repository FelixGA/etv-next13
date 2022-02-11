import { promises as fs } from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import matter from "gray-matter";

export default async function getContent(name, locale) {
  try {
    const dir = path.join(
      process.cwd(),
      `/content/${name}/${locale ? `${locale}/` : ""}`
    );
    const filenames = await fs.readdir(dir);
    let content = filenames.map(async (filename) => {
      const source = await fs.readFile(path.join(dir, filename));
      const { content, data } = matter(source);
      let mdxSource;
      if (content) {
        mdxSource = await serialize(content, {
          mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [],
          },
          scope: data,
        });
      }

      if (name === "pages" && data.content?.length > 0) {
        let mdxPageContent = {};
        if (!data.content) return;
        for (let content of data.content) {
          const markdown = await serialize(content.markdown);
          mdxPageContent = { ...mdxPageContent, [content.name]: markdown };
        }
        return {
          sources: mdxPageContent,
          ...data,
        };
      }

      return {
        ...(mdxSource && { source: mdxSource }),
        ...data,
      };
    });

    return await Promise.all(content);
  } catch (err) {
    return err;
  }
}
