import React from 'react'
import {SmallEmailForm} from './EmailForm'

const HeaderLink = ({active, href, children, external}) => {
  return (
    <a
      href={href}
      className={`db dib-ns nav-link mid-gray fill-gray hover-fill-blue hover-blue-underline ${active ? 'active' : ''}`} >
      {children}
      {external ? (
        <svg className='ml1' width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.793 4.793l-1.94-1.94A.5.5 0 0 1 4.208 2H10v5.793a.5.5 0 0 1-.854.353L7.207 6.207 3.525 9.89a.5.5 0 0 1-.707 0l-.707-.707a.5.5 0 0 1 0-.707l3.682-3.682z" fillRule="evenodd"/>
        </svg>
      ) : null}
    </a>
  )
}

const Header = ({relative, isActive}) => {
  return (
    <header className="pl3 pr3 pr0-l pv4 db dt-ns w-100 mw-lg">
      <a className="no-underline" href={relative('/')}>
        <img className="db dtc-ns v-mid" style={{width: 150, height: 32}} src={relative('/img/logo.svg')} alt="MediaList" />
      </a>
      <div className="dn dtc-ns v-mid tr">
        <nav className="dib ph3">
          <HeaderLink active={isActive('/how-it-works')} href={relative('/how-it-works')}>
          How it works
          </HeaderLink>
          <HeaderLink href='http://docs.medialist.io' external>
            Help center
          </HeaderLink>
          <HeaderLink href='http://blog.medialist.io' external>
            Blog
          </HeaderLink>
        </nav>
        <div className='dn dib-l v-top'>
          <SmallEmailForm relative={relative} />
        </div>
      </div>
    </header>
  )
}

export default Header
