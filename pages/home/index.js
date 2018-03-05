import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import {EmailForm} from '../EmailForm'
import {SrcSetImage} from '../Image.jsx'

const Home = ({relative, isActive}) => {
  return (
    <div>
      <Header relative={relative} isActive={isActive} />
      <section className='pt3'>
        <div className='pv5 dt-l w-100 dt--fixed mw-xl'>
          <div className='dtc-l w-42-l v-mid tr'>
            <div className='dib-l center tc tl-l ph2 ph3-l pb4' style={{width: 470, maxWidth: '100%'}}>
              <h1 className='fw6 mt0 mb3 serif navy' style={{fontSize: '40px', lineHeight: '56px'}}>
                <span className='bg-stroke'>A better way to </span> manage influencer relationships and campaigns
              </h1>
              <p className='mb4 mid-gray' style={{fontSize: '18px', lineHeight: '30px'}}>
                Medialist is a simpler and easier way to create media lists, track outreach and manage all your influencer relationships from one place.
              </p>
              <EmailForm relative={relative} />
            </div>
          </div>
          <div className='dtc-l w-58-l v-top'>
            <SrcSetImage
              relative={relative}
              imgPath='/img'
              imgId='pr-machine'
              widths={[824, 1648]}
              style={{width: 824, marginTop: '-28px'}}
              alt='A fast, efficient, PR machine'
            />
          </div>
        </div>
        <div className='pv3 tc dn db-l'>
          <a className='dib pa2 blue link' href='#save-time'>
            Learn more below
            <img className='ml1 v-mid' src={relative('/img/arrow.svg')} />
          </a>
          <hr className='hr hr-light' />
        </div>
      </section>

      {/* <section className='mt3 mt5-l bg-illustration-1'>
        <div className='mw-lg'>
          <div className='mw6 ph2 tc tl-l db dib-l center ma0-l'>
            <h1 className='f1 fw6 mt0 mb4 serif navy bg-stroke'>
              A better way to manage influencer relationships and campaigns
            </h1>
            <p className='f4 mb4 mid-gray lh-copy'>
              Medialist is a simpler and easier way to create media lists, track outreach and manage all your influencer relationships from one place.
            </p>
            <EmailForm relative={relative} />
          </div>
        </div>
        <SrcSetImage
          relative={relative}
          className='db dn-l w-100 pt3'
          imgPath='/img'
          imgId='pr-machine'
          widths={[824, 1648]}
          alt='A fast, efficient, PR machine'
        />
        <div className='pt5 tc dn db-l'>
          <a className='dib pa2 blue link' href='#save-time'>
            Learn more below
            <img className='ml1 v-mid' src={relative('/img/arrow.svg')} />
          </a>
          <hr className='hr hr-light' />
        </div>
      </section> */}
      <section id='save-time' style={{marginBottom: -5}}>
        <div className='mw-lg pt3 ph2 tc tl-l'>
          <div className='dt-l dt--fixed w-100'>
            <div className='dn dtc-l v-mid'>
              <img src='img/illustration-2.png' style={{width: 487}} alt='All your PR campaign outreach in one place' />
            </div>
            <div className='dtc-l pt4 measure center'>
              <h2 className='f2 fw6 mb4 serif navy'>
                Save time managing outreach
              </h2>
              <p className='f4 ma0 mid-gray lh-copy'>
                Managing outreach in spreadsheets is a time-sink. As soon as more than one team member is involved, it's hard to know who contacted whom and when, what influencers have said and where coverage is. Medialist saves you time by putting <a className='link blue hover-text-underline' href='./how-it-works'>all your campaign outreach in one place.</a>
              </p>
              <a className='dib btn bubble-left btn-lg mt4' href='./how-it-works'>See how</a>
            </div>
            <div className='db dn-l v-mid pt3'>
              <img src='img/illustration-2.png' style={{width: 487}} />
            </div>
          </div>
        </div>
      </section>
      <section className='bg-gradient-1 bt b--light-gray relative'>
        <div className='measure center pt5 ph2 tc'>
          <h2 className='f2 fw6 mb4 serif navy'>
            Build win-win relationships
          </h2>
          <p className='f4 ma0 mid-gray lh-copy'>
            To consistently get results you need to build win-win relationships with
            the influencers that matter most. But this is difficult with spreadsheets.
            They don’t give you a view of what your influencer relationships look
            like across your team, or over time. Medialist solves this problem by
            bringing <a className='link blue hover-text-underline' href='./how-it-works'>all your team’s influencer intelligence together.</a>
          </p>
          <a className='dib btn bubble-left btn-lg mv4' href='./how-it-works'>See how</a>
          <img style={{width: 880, marginBottom: -5}} src={'img/illustration-3.png'} alt='All your influencer intelligence in one place' />
        </div>
        <div className='absolute left-0 right-0 bottom-0 fade-out-bottom-gray' style={{height: 100}} />
      </section>
      <Footer relative={relative} isActive={isActive} />
    </div>
  )
}

Home.meta = {
  title: 'Medialist: Influencer Relationship and Campaign Management for PR teams',
  description: 'Medialist is a simpler and easier way to create media lists, track outreach and manage all your influencer relationships from one place.'
}

export default Home
