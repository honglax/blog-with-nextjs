import Head from 'next/head'
import { MetaHeadProps } from '@/lib/data'

const MetaHead = ({ siteTitle, description, url, image }: MetaHeadProps) => (
  <Head>
    <title>{siteTitle}</title>
    <meta name="title" content={siteTitle} />
    <meta name="description" content={description} />

    <meta property="og:type" content="website" />
    <meta property="og:url" content={url} />
    <meta property="og:title" content={siteTitle} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />

    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={url} />
    <meta property="twitter:title" content={siteTitle} />
    <meta property="twitter:description" content={description} />
    <meta property="twitter:image" content={image} />
    <link
      href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;600;700&amp;display=swap"
      rel="stylesheet"
    />
  </Head>
)

export default MetaHead
