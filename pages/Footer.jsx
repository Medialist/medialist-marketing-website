import React from 'react'
import {EmailForm} from './EmailForm'

const FooterLink = ({active, href, children, external}) => {
  return (
    <a
      href={href}
      className={`db dib-ns nav-link hover-white fill-gray hover-fill-white ${active ? 'white' : 'light-gray'}`} >
      {children}
      {external ? (
        <svg className='ml1' width='12' height='12' viewBox='0 0 12 12' xmlns='http://www.w3.org/2000/svg'>
          <path d='M5.793 4.793l-1.94-1.94A.5.5 0 0 1 4.208 2H10v5.793a.5.5 0 0 1-.854.353L7.207 6.207 3.525 9.89a.5.5 0 0 1-.707 0l-.707-.707a.5.5 0 0 1 0-.707l3.682-3.682z' fillRule='evenodd' />
        </svg>
      ) : null}
    </a>
  )
}

const Footer = ({relative, isActive}) => {
  return (
    <footer>
      <section className='bg-white bt b--light-gray'>
        <div className='mw-lg dt-l w-100 pt5 pb5 ph2'>
          <div className='dtc-l w-50-l pr3-l pb3 pb0-l tc tl-l'>
            <h1 className='f2 fw6 ma0 serif navy'>
              Transform your PR organisation
            </h1>
            <p className='f5 ma0 gray lh-copy'>
              A better way to manage influencer relationships and campaigns.
            </p>
          </div>
          <div className='dtc-l w-50-l tr-l v-mid'>
            <EmailForm relative={relative} />
          </div>
        </div>
      </section>
      <section className='bg-navy white'>
        <div className='mw-lg pv2'>
          <div className='dt-l dt--fixed w-100 tc tl-l'>
            <div className='dn dtc-l w-20-l'>
              <a href={relative('/')} title='Home'>
                <img src={relative('/img/icon.svg')} className='v-mid' style={{width: 18, height: 23}} />
              </a>
              <span className='gray v-mid fw1 pl2 f6'>
                ©️ 2018 Medialist.io
              </span>
            </div>
            <nav className='db dtc-l tc w-50-l pv2'>
              <FooterLink href={'mailto:hello@medialist.io'}>
                Contact us
              </FooterLink>
              <FooterLink href={relative('/how-it-works')} active={isActive('/how-it-works')}>
                How it works
              </FooterLink>
              <FooterLink href='http://docs.medialist.io' external>
                Help Center
              </FooterLink>
              <FooterLink href='https://blog.medialist.io' external>
                Blog
              </FooterLink>
            </nav>
            <nav className='db dtc-l ph2 pv2 tr-l'>
              <a className='ph2 v-mid dib gray hover-white no-underline fill-currentColor' href='https://twitter.com/medialist_app'>
                <svg width={24} height={24} viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M11.711 8.522l.043.736-.722-.09c-2.63-.346-4.928-1.516-6.879-3.482L3.2 4.711l-.245.72c-.52 1.606-.188 3.301.896 4.442.578.63.448.72-.55.345-.346-.12-.65-.21-.679-.165-.1.105.246 1.47.52 2.01.376.751 1.142 1.486 1.98 1.921l.709.346-.839.015c-.809 0-.838.015-.751.33.289.975 1.43 2.01 2.702 2.46l.896.316-.78.48a7.966 7.966 0 0 1-3.873 1.11c-.65.016-1.185.076-1.185.12 0 .15 1.763.991 2.79 1.321 3.077.976 6.733.555 9.479-1.11 1.95-1.186 3.902-3.542 4.812-5.823.492-1.215.983-3.436.983-4.502 0-.69.043-.78.852-1.605.477-.48.925-1.006 1.012-1.156.145-.285.13-.285-.607-.03-1.228.45-1.402.39-.795-.285.448-.48.983-1.35.983-1.605 0-.045-.217.03-.462.165-.26.15-.839.375-1.272.51l-.78.255-.709-.495c-.39-.27-.939-.57-1.228-.66-.737-.21-1.864-.18-2.529.06-1.806.675-2.948 2.415-2.818 4.321z' fillRule='evenodd' />
                </svg>
              </a>
              <a className='ph2 v-mid dib gray hover-white no-underline fill-currentColor' href='https://www.linkedin.com/company/10256892/'>
                <svg width={24} height={24} viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M18.985 17.97h-2.897v-4.534c0-1.081-.02-2.472-1.506-2.472-1.508 0-1.738 1.178-1.738 2.395v4.612H9.95V8.646h2.778V9.92h.04c.387-.733 1.332-1.507 2.742-1.507 2.935 0 3.476 1.931 3.476 4.442v5.115zM6.682 7.373a1.68 1.68 0 1 1-.003-3.36 1.68 1.68 0 0 1 .003 3.36zM8.13 17.971H5.23V8.646H8.13v9.325z' fillRule='evenodd' />
                </svg>
              </a>
            </nav>
            <div className='dtc-l pv2 tr-l w-20-l'>
              <span className='gray v-mid fw1 pl2 f6'>
                13 Radnor Walk, London, SW3 4BP
              </span>
            </div>
            <div className='dn-l'>
              <div className='gray v-mid fw1 pl2 f6'>
                ©️ 2018 Medialist.io
              </div>
              <a href={relative('/')} title='Home'>
                <img src={relative('/img/icon.svg')} className='pt3 pb3' style={{width: 36, height: 45}} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
