import React from 'react'

const HeaderLink = ({active, href, children}) => {
  return (
    <a
      href={href}
      className={`db dib-ns nav-link mid-gray hover-blue-underline ${active ? 'active' : ''}`} >
      {children}
    </a>
  )
}

const Header = ({relative, isActive}) => {
  return (
    <header className="ph3 pv4 db dt-ns w-100 mw-lg">
      <a className="no-underline" href={relative('/')}>
      
        <img className="db dtc-ns v-mid" style={{width: 150, height: 32}} src={relative('/img/logo.svg')} alt="MediaList" />
      </a>
      <div className="dn dtc-ns v-mid tr">
        <nav className="dib">
          <HeaderLink active={isActive('/how-it-works')} href={relative('/how-it-works')}>
          How it works
          </HeaderLink>
          <HeaderLink href="http://docs.medialist.io">
            Help center
          </HeaderLink>
        </nav>
        <form className="dn dib-l" action="https://post.tableflip.io/medialist.io">
          <input className="input v-mid mh2" type="email" name="email" placeholder="Enter your email address" required />
          <input type="hidden" name="g-recaptcha-response" defaultValue="skip" />
          <button className="btn bubble-left v-mid" type="submit">Get a demo</button>
        </form>
      </div>
    </header>
  )
}

export default Header
