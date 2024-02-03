import { getCollection} from "astro:content";

export async function GET(context) {
  const posts = await getCollection("posts");
  return rss({
    title: 'Brad\'s Astro Stuff | Blog',
    description: 'My journey being hard core',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}