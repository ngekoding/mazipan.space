import Meta from '@/components/Meta/Custom'
import PostCard from '@/components/Post/Card'
import LayoutArticle from '@/components/Layout/Default'

import { getPostsByTag, getAllTags } from '@/lib/api'
import { SITE_METADATA } from '@/lib/constants'

export default function Index ({ allPosts, tag }) {
  return (
    <>
      <LayoutArticle>
        <>
          <Meta
            lang="en"
            title={`Articles about ${tag} | mazipan.space`}
            description={`All articles under tag #${tag} in mazipan.space`}
            url={`${SITE_METADATA.url}/en/tag/${tag}`}
            tag={`${tag}`}
          />
          <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
            #{tag}
          </h2>

          {allPosts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-8 row-gap-5 md:row-gap-8 mb-16">
              {allPosts.map((post) => (
                <PostCard
                  key={post.slug}
                  title={post.title}
                  coverImage={post.coverImage}
                  date={post.date}
                  author={post.author}
                  slug={`en/${post.slug}`}
                  excerpt={post.excerpt}
                  tags={post.tags}
                  lang="en"
                />
              ))}
            </div>
          )}
        </>
      </LayoutArticle>
    </>
  )
}

export async function getStaticProps ({ params }) {
  const allPosts = getPostsByTag(params.tag, 'en')
  return {
    props: {
      allPosts,
      tag: params.tag
    }
  }
}

export async function getStaticPaths () {
  const tags = getAllTags('en')

  return {
    paths: tags.map((tag) => {
      return {
        params: {
          tag: tag
        }
      }
    }),
    fallback: false
  }
}
