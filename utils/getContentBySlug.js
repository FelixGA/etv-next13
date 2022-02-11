import { promises as fs } from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import matter from "gray-matter";

export default async function getContentBySlug(name, slug, locale) {
  try {
    const dir = path.join(process.cwd(), `/content/${name}/${locale}/`);
    const source = await fs.readFile(path.join(dir, `${slug}.md`));

    const { content, data } = matter(source);
    const mdxSource = await serialize(content);
    const markdown = {
      source: mdxSource,
      ...data,
    };

    return markdown;
  } catch (err) {
    return err;
  }
}
