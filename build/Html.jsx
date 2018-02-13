import React from 'react'
import PropTypes from 'prop-types'

const Html = ({
  title = '',
  description = 'Medialist is a simpler and easier way to create media lists, track outreach and manage all your influencer relationships from one place.',
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
    </head>
    <body>
      {children}
      <script src={relative('bundle.js')} />
      <script src={relative('intercom.js')} />
    </body>
  </html>
)

Html.propTypes = {
  children: PropTypes.node,
  relative: PropTypes.func
}

export default Html
