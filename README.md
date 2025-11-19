## How to add posts

Edit the `lib/posts.ts` file and add a new object to the `posts` array:

```bash
{
  slug: "post-name",
  title: "Post Title",
  date: "mm/dd/year",
  category: "category",
  excerpt: "Brief description of the post",
  content: ` 

# Title

Your markdown content here...

## Caption

More content...`
}
```

## Available categories

- reflections
- learning
- projects
- tutorials
- general
- development

You can create new categories simply by using a new name in the `category` field.

## Structure

- `lib/posts.ts` - Array with all posts
- `app/` - Next.js pages
- `components/` - React components

## Deploy

The site is completely static and can be deployed to Vercel with one click.
