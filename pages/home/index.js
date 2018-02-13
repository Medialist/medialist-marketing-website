import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import {EmailForm} from '../EmailForm'

const Home = ({relative, isActive}) => {
  return (
    <div>
      <Header relative={relative} isActive={isActive} />
      <section className="bg-illustration-1">
        <div className="mw-lg">
          <div className="mw6 ph2 tc tl-l db dib-l center ma0-l">
            <h1 className="f1 fw6 mt0 mb4 serif navy bg-stroke">
              A better way to manage influencer relationships and campaigns
            </h1>
            <p className="f4 mb4 mid-gray lh-copy">
              Medialist is a simpler and easier way to create media lists, track outreach and manage all your influencer relationships from one place.
            </p>
            <EmailForm relative={relative} />
            {/* <form data-id='email-form' className="db w-100" action="http://localhost:1337/oli.zilla.org.uk" method='post'>
              <input className="input input-lg db w-100 dib-ns w-70-ns submit-error-b--red" type="email" name="email" placeholder="Enter your email address" />
              <input type="hidden" name="g-recaptcha-response" defaultValue="skip" />
              <button className="btn btn-orange bubble-left btn-lg w-100 w-auto-ns db dib-ns mt3 mt0-ns ml2-ns" type="submit" name="button">Get a demo</button>
              <div className='pt1 dn submit-ok-db fw5 green' style={{fontSize: 14}}>
                <img className='mr1' src={relative('/img/email-success.svg')} />
                <span>Success! We'll be in touch soon.</span>
              </div>
              <div className='pt1 dn submit-error-db fw5 red' style={{fontSize: 14}}>
                <img className='mr1' src={relative('/img/email-error.svg')} />
                <span>Sorry, there was an error. Please try again.</span>
              </div>
            </form> */}
          </div>
        </div>
        <img className="db dn-l w-100 pt3" src={relative('/img/illustration-1.png')} />
        <div className='pt5 tc dn db-l'>
          <a className='dib pa2 blue link' href='#save-time'>
            Learn more below
            <img className='ml1 v-mid' src={relative('/img/arrow.svg')} />
          </a>
          <hr className='hr hr-light' />
        </div>
      </section>
      <section id='save-time' style={{marginBottom:-5}}>
        <div className="mw-lg pt3 ph2 tc tl-l">
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
      <section className="bg-gradient-1 bt b--light-gray relative">
        <div className="measure center pt5 ph2 tc">
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
          <a className="dib btn bubble-left btn-lg mv4" href="./how-it-works">See how</a>
          <img style={{width: 880, marginBottom: -5}} src={'img/illustration-3.png'} />
        </div>
        <div className='absolute left-0 right-0 bottom-0 fade-out-bottom-gray' style={{height: 100}} />
      </section>
      <Footer relative={relative} isActive={isActive} />
    </div>
  )
}

export default Home
