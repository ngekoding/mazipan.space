import Head from 'next/head'

import Container from '@/components/ContainerBox'
import MoreStories from '@/components/Post/Home'
import HeroPost from '@/components/FeaturedPost'
import HeaderHome from '@/components/Header/Home'
import Pagination from '@/components/Pagination'
import Layout from '@/components/Layout/Home'

import { getPagedPost, getFeaturedPost } from '@/lib/api'

export default function Index ({ data, featured }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Home | mazipan.space</title>
        </Head>
        <Container>
          <HeaderHome />
          {featured && (
            <HeroPost
              title={featured.title}
              coverImage={featured.coverImage}
              date={featured.date}
              author={featured.author}
              slug={`en/${featured.slug}`}
              excerpt={featured.excerpt}
              lang="en"
            />
          )}
          <MoreStories posts={data} lang="en" />
          <Pagination next="2" lang="en" />
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps () {
  const { data: featured } = getFeaturedPost([
    'title',
    'date',
    'slug',
    'author',
    'featured',
    'coverImage',
    'excerpt',
    'tags'
  ], 'en')

  const { data } = getPagedPost([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'tags'
  ], 1, 'en')

  return {
    props: { data, featured }
  }
}
