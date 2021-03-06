import React from 'react'
import PropTypes from 'prop-types'

const Html = ({
  url = 'https://medialist.io',
  title = 'Medialist',
  description = 'A simpler and easier way to create media lists, track outreach and manage all your influencer relationships from one place.',
  relative,
  children
}) => (
  <html>
    <head>
      <meta charSet='UTF-8' />
      <meta httpEquiv='x-ua-compatible' content='ie=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='description' content={description} />
      <title>{title}</title>
      <link href={relative('bundle.css')} rel='stylesheet' />
      <script async defer src="https://www.googletagmanager.com/gtag/js?id=UA-113401636-1" />
      <script async defer src={relative('/js/ga.js')} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:image" content={`${url}/favicon-400.png`} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="400" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@medialist_app" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image:src" content={`${url}/favicon-400.png`} />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#3f74e7" />
      <meta name="msapplication-TileColor" content="#2b5797" />
      <meta name="theme-color" content="#ffffff" />
    </head>
    <body>
      {children}
      <script src={relative('/js/bundle.js')} />
      <script async defer src={relative('/js/intercom.js')}  />
      <script async defer src="https://js.hs-scripts.com/3927488.js" id="hs-script-loader" />
    </body>
  </html>
)

Html.propTypes = {
  children: PropTypes.node,
  relative: PropTypes.func
}

export default Html
