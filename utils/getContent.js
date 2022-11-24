import { promises as fs } from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import matter from "gray-matter";
import remarkGfm from "remark-gfm";
import fg from "fast-glob";

export default async function getContent(name, locale) {
  try {
    const dir = path.join(process.cwd(), `/content/${name}/${locale}`);
    const filenames = await fg([`${dir}/*.md`], {
      dot: true,
    });
    let content = filenames.map(async (filename) => {
      // console.log(filename);
      const source = await fs.readFile(filename);
      // console.log(source);
      const { content, data } = matter(source);
      data.locale = locale;
      let mdxSource;
      if (content) {
        mdxSource = await serialize(content, {
          mdxOptions: {
            remarkPlugins: [remarkGfm],
          },
          scope: data,
        });
      }

      if (name === "pages" && data.content?.length > 0) {
        // console.log(data.content);
        let mdxPageContent = {};
        if (!data.content) return;
        for (let content of data.content) {
          // console.log(content);
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
