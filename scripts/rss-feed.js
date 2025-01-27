const fs = require('fs')
const path = require('path')
const Feed = require('feed').Feed

const { getAllPosts } = require('../lib/api')
const { SITE_METADATA } = require('../lib/constants')

const feed = new Feed({
  title: SITE_METADATA.title,
  description: SITE_METADATA.description,
  link: SITE_METADATA.url,
  id: SITE_METADATA.url,
  language: 'id',
  image: `${SITE_METADATA.url}/favicon/favicon-192x192.png`,
  favicon: `${SITE_METADATA.url}/favicon/favicon-32x32.png`,
  copyright: 'All rights reserved 2020, @mazipan',
  updated: new Date(),
  feedLinks: {
    json: `${SITE_METADATA.url}/feed.json`,
    atom: `${SITE_METADATA.url}/feed.xml`
  },
  author: {
    name: SITE_METADATA.author.name,
    link: SITE_METADATA.url,
    avatar: `${SITE_METADATA.author.avatar}`
  }
})

getAllPosts(
  ['title', 'date', 'slug', 'author', 'coverImage', 'excerpt'],
  'id'
).forEach((post) => {
  feed.addItem({
    id: `${SITE_METADATA.url}/${post.slug}`,
    url: `${SITE_METADATA.url}/${post.slug}`,
    title: post.title,
    description: `${post.excerpt} - ${SITE_METADATA.url}${post.slug}`,
    content: post.excerpt,
    image: `${SITE_METADATA.url}${post.coverImage}`,
    date: new Date(post.date),
    author: SITE_METADATA.author.name
  })
})

fs.writeFileSync(path.join('./public', 'feed.json'), feed.json1())
fs.writeFileSync(path.join('./public', 'rss.xml'), feed.rss2())
fs.writeFileSync(path.join('./public', 'feed.xml'), feed.atom1())
