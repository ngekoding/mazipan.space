const fs = require('fs')
const { join } = require('path')
const matter = require('gray-matter')
const { paginate } = require('./paginator')

const RELATED_POST_COUNT = 3
const postsDirectory = join(process.cwd(), '_posts')

function getPostSlugs () {
  return fs.readdirSync(postsDirectory)
}

function getPostSlugsEn () {
  const allDirs = fs.readdirSync(postsDirectory)
  const enDirs = []
  allDirs.forEach((dir) => {
    const pathEn = join(postsDirectory, dir, 'en/index.md')
    if (fs.existsSync(pathEn)) {
      enDirs.push(dir)
    }
  })

  return enDirs
}

function findPossibilityPost (slug) {
  const allSlugs = getPostSlugs()
  return allSlugs.find((item) => item.includes(slug))
}

function getPostBySlug (slug, fields = [], lang = 'id') {
  const realSlug = slug.replace(/\.md$/, '')
  const possiblitySlug = findPossibilityPost(realSlug)

  const fullPath = join(
    postsDirectory,
    `${possiblitySlug}/${lang === 'id' ? 'index.md' : 'en/index.md'}`
  )
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  // eslint-disable-next-line no-unused-vars
  // const [year, month, date, ...slugArr] = realSlug.split('-')

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

function getAllPosts (fields = [], lang = 'id') {
  const slugs = lang === 'id' ? getPostSlugs() : getPostSlugsEn()
  const posts = slugs
    .map((slug) => {
      // eslint-disable-next-line no-unused-vars
      const [year, month, date, ...slugArr] = slug.split('-')
      return getPostBySlug(slugArr.join('-'), fields, lang)
    })
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'))
  return posts
}

function getPagedPost (fields = [], page = 1, lang = 'id') {
  const slugs = lang === 'id' ? getPostSlugs() : getPostSlugsEn()
  const postPaginate = paginate(slugs.reverse(), page)
  const posts = postPaginate.data
    .map((slug) => {
      // eslint-disable-next-line no-unused-vars
      const [year, month, date, ...slugArr] = slug.split('-')
      return getPostBySlug(slugArr.join('-'), fields, lang)
    })
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'))

  return {
    ...postPaginate,
    data: posts
  }
}

function getFeaturedPost (fields = [], lang = 'id') {
  const slugs = lang === 'id' ? getPostSlugs() : getPostSlugsEn()
  const posts = slugs
    .map((slug) => {
      // eslint-disable-next-line no-unused-vars
      const [year, month, date, ...slugArr] = slug.split('-')
      return getPostBySlug(slugArr.join('-'), fields, lang)
    })
    .filter((post) => {
      return post.featured
    })
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'))

  return {
    data: posts.length > 0 ? posts[0] : null
  }
}

function getAvailablePage (lang = 'id') {
  const slugs = lang === 'id' ? getPostSlugs() : getPostSlugsEn()
  const { pages } = paginate(slugs, 1)
  return pages
}

function getAllTags (lang = 'id') {
  const posts = getAllPosts(['tags'], lang)
  const set = new Set()

  posts.forEach((post) => {
    if (post.tags) {
      post.tags.forEach((t) => {
        set.add(t)
      })
    }
  })

  return Array.from(set)
}

function getPostsByTag (tag, lang = 'id') {
  const matchSlug = new Set()
  const matchPost = []
  const posts = getAllPosts(
    ['title', 'date', 'slug', 'author', 'coverImage', 'excerpt', 'tags'],
    lang
  )

  posts.forEach((post) => {
    if (post.tags) {
      const isMatched = post.tags.find((t) => t.toLowerCase() === tag.toLowerCase())
      const isHaveSlug = matchSlug.has(post.slug)
      if (isMatched && !isHaveSlug) {
        matchPost.push(post)
      }
    }
  })

  return matchPost
}

function getRelatedPost (tag, slug, lang = 'id') {
  const postsInTag = getPostsByTag(tag, lang)
  let related = postsInTag.filter((post) => post.slug !== slug)

  if (related.length < RELATED_POST_COUNT) {
    const allPost = getAllPosts(
      ['title', 'date', 'slug', 'author', 'coverImage', 'excerpt', 'tags'],
      lang
    ).filter((post) => post.slug !== slug)

    related = related.concat(allPost)
  }

  return related.slice(0, RELATED_POST_COUNT)
}

function getPsiReportData () {
  const reportDir = join(process.cwd(), 'psi-reports')
  const files = fs.readdirSync(reportDir).filter((file) => (file !== 'LAST_UPDATED.txt' && file !== 'available-reports.json')).reverse()
  const allData = []

  files.forEach(file => {
    const fileContent = fs.readFileSync(join(reportDir, file), 'utf8')
    const jsonData = JSON.parse(fileContent)
    allData.push(jsonData)
  })

  return allData
}

exports.getPostSlugs = getPostSlugs
exports.getPostSlugsEn = getPostSlugsEn
exports.getPostBySlug = getPostBySlug
exports.getAllPosts = getAllPosts
exports.getAllTags = getAllTags
exports.getPagedPost = getPagedPost
exports.getFeaturedPost = getFeaturedPost
exports.getAvailablePage = getAvailablePage
exports.getPostsByTag = getPostsByTag
exports.getRelatedPost = getRelatedPost
exports.getPsiReportData = getPsiReportData
