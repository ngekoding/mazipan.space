import PostList from '@/components/Post/List'

export default function MoreStories ({ posts, lang = 'id' }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl font-bold tracking-tighter leading-tight">More articles...</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-8 row-gap-5 md:row-gap-8 mb-16">
        <PostList posts={posts} lang={lang} showExcerpt />
      </div>
    </section>
  )
}
