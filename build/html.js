console.time('Build html total')

require('babel-register')()

const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')
const relativeUrl = require('urel')
const { createElement } = require('react')
const { renderToStaticMarkup } = require('react-dom/server')
const requireDirectory = require('require-directory')
const Html = require('./Html.jsx').default
const srcDir = path.resolve(__dirname, '../pages')
const outputDir = path.resolve(__dirname, '../docs')
const argv = require('minimist')(process.argv.slice(2))
delete argv._

console.log('Build html props', argv)

function renderToHtml (srcPath, baseUrl) {
  const relative = (assetPath) => {
    assetPath = assetPath.startsWith('/') ? assetPath : `/${assetPath}`
    return relativeUrl(baseUrl, assetPath)
  }
  const isActive = (assetPath) => {
    assetPath = assetPath.startsWith('/') ? assetPath : `/${assetPath}`
    return relativeUrl(baseUrl, assetPath) === './'
  }
  const Component = require(srcPath).default
  const props = {
    ...argv,
    ...Component.meta,
    relative,
    isActive,
  }
  const children = createElement(Component, props)
  const html = renderToStaticMarkup(createElement(Html, {children, ...props}))
  return html
}

requireDirectory(module, '../pages', {
  include: /index.js$/,
  visit: (content, srcPath) => {
    const name = path.relative(srcDir, srcPath)
    console.time(`Build ${name}`)

    // Index.js => index.html
    // about/Index.js => index.html
    const outputFile = `${path.basename(srcPath, '.js')}.html`.toLowerCase()

    // /foo/bar/pages/Index.js => ''
    // /foo/bar/pages/about/Index.js => 'about'
    let relativePath = path.relative(srcDir, path.dirname(srcPath))
    if (relativePath === 'home') {
      relativePath = ''
    }

    // '/foo/bar/docs', '', 'index.html' => '/foo/bar/docs/index.html'
    // '/foo/bar/docs', 'about', 'index.html' => '/foo/bar/docs/about/index.html'
    const outputPath = path.resolve(outputDir, relativePath, outputFile)

    const baseUrl = `/${path.join(relativePath, outputFile)}`

    const html = renderToHtml(srcPath, baseUrl)

    mkdirp.sync(path.dirname(outputPath))

    fs.writeFileSync(outputPath, `<!doctype html>\n${html}`)

    console.timeEnd(`Build ${name}`)
  }
})

console.timeEnd('Build html total')
