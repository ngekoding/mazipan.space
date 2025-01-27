import Head from 'next/head'

import Meta from '@/components/Meta/Custom'
import LayoutArticle from '@/components/Layout/Default'
import { SITE_METADATA } from '@/lib/constants'

export default function Index () {
  return (
    <>
      <LayoutArticle>
        <>
          <Meta
            lang="id"
            title="Support | mazipan.space"
            description="Support | mazipan.space"
            url={`${SITE_METADATA.url}/support`}
          />
          <Head>
            <title>Support | mazipan.space</title>
          </Head>
          <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
            Support
          </h2>
          <div className="content">
            <p className="mb-4">Dukung saya untuk terus menulis dan berbagi melalui:</p>
            <ul>
              <li>
                <span className="mr-2">👉</span>
                <a
                  className="hover:underline pr-2 md:pr-4"
                  href="https://trakteer.id/mazipan?utm_source=github"
                  rel="nofollow"
                >
                  <span className="mr-2">🇮🇩</span> Trakteer
                </a>
              </li>
              <li>
                <span className="mr-2">👉</span>
                <a
                  className="hover:underline pr-2 md:pr-4"
                  href="https://www.buymeacoffee.com/mazipan?utm_source=github"
                  rel="nofollow"
                >
                  <span className="mr-2">🌍</span> BuyMeACoffe
                </a>
              </li>
              <li>
                <span className="mr-2">👉</span>
                <a
                  className="hover:underline pr-2 md:pr-4"
                  href="https://ko-fi.com/mazipan"
                  rel="nofollow"
                >
                  <span className="mr-2">🌍</span> Ko-Fi
                </a>
              </li>
              <li>
                <span className="mr-2">👉</span>
                <a
                  className="hover:underline pr-2 md:pr-4"
                  href="https://www.paypal.me/mazipan?utm_source=github"
                  rel="nofollow"
                >
                  <span className="mr-2">🌍</span> Paypal
                </a>
              </li>
            </ul>
          </div>
        </>
      </LayoutArticle>
    </>
  )
}
