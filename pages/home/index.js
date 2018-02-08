import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

const Home = ({relative, isActive}) => {
  return (
    <div>
      <Header relative={relative} isActive={isActive} />
      <section className="bg-illustration-1">
        <div className="mw-lg">
          <div className="mw6 ph2 tc tl-l db dib-l center ma0-l">
            <h1 className="f1 fw6 mb4 serif navy bg-stroke">
              A better way to manage infuencer relationships
            </h1>
            <p className="f4 mb4 mid-gray lh-copy">
              Medialist is a simpler and easier way to create media lists, track outreach and manage all your influencer relationships from one place.
            </p>
            <form className="db w-100" action="https://post.tableflip.io/medialist.io">
              <input className="input input-lg db w-100 dib-ns w-70-ns" type="email" name="email" placeholder="Enter your email address" />
              <input type="hidden" name="g-recaptcha-response" defaultValue="skip" />
              <button className="btn btn-orange bubble-left btn-lg w-100 w-auto-ns db dib-ns mt3 mt0-ns ml2-ns" type="submit" name="button">Get a demo</button>
            </form>
          </div>
        </div>
        <img className="db dn-l w-100 pt3" src={relative('/img/illustration-1.png')} />
      </section>
      <section>
        <div className="mw-lg pv5 ph2 tc tl-l">
          <div className="dt-l dt--fixed w-100">
            <div className="dn dtc-l v-mid">
              <img src="img/illustration-2.png" style={{width: 487}} />
            </div>
            <div className="dtc-l pt4 measure center">
              <h2 className="f2 fw6 mb4 serif navy">
                Save time managing outreach
              </h2>
              <p className="f4 ma0 mid-gray lh-copy">
                Managing outreach in spreadsheets is a time-sink. As soon as more than one team member is involved, it's hard to know who contacted whom and when, what influencers have said and where coverage is. Medialist saves you time by putting <a className="link blue hover-text-underline" href="./how-it-works">all your campaign outreach in one place.</a>
              </p>
              <a className="dib btn bubble-left btn-lg mt4" href="./how-it-works">See how</a>
            </div>
            <div className="db dn-l v-mid pt3">
              <img src="img/illustration-2.png" style={{width: 487}} />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-1">
        <div className="measure center pt5 pb5 ph2 tc">
          <h2 className="f2 fw6 mb4 serif navy">
            Build win-win relationships
          </h2>
          <p className="f4 ma0 mid-gray lh-copy">
            To consistently get results you need to build win-win relationships with
            the influencers that matter most. But this is difficult with spreadsheets.
            They don’t give you a view of what your influencer relationships look
            like across your team, or over time. Medialist solves this problem by
            bringing <a className="link blue hover-text-underline" href="./how-it-works">all your team’s influencer intelligence together.</a>
          </p>
          <a className="dib btn bubble-left btn-lg mt4" href="./how-it-works">See how</a>
          <img className="mt4" src="img/illustration-3.png" style={{width: 505, marginBottom: '-105px'}} />
        </div>
      </section>
      <Footer relative={relative} isActive={isActive} />
    </div>
  )
}

export default Home
