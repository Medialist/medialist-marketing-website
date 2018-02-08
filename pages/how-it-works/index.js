import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

const HowItWorks = ({relative, isActive}) => {
  return (
    <div>
      <Header relative={relative} isActive={isActive} />
      <section>
        <div className='center pt5 pb4 tc' style={{maxWidth: 610}}>
          <h1 className='f1 fw6 mb4 serif navy'>
            Here’s how Medialist works
          </h1>
          <p className="f4 mb4 mid-gray lh-copy">
            Instead of having media lists, feedback, briefing books and contact
            information all over the place — lost in inboxes and scattered
            across hard to find spreadsheets and documents — Medialist brings
            all your team’s influencer intelligence and campaigns under one roof.
            Everything is organised, centralised and clear so your team can save
            time and build stronger relationships with influencers.
          </p>
        </div>
      </section>
      <section className='bt b--light-gray'>
        <div className='mw-lg pv5'>
          <div className='w-50'>
            <h2 className='f2 fw6 mb3 serif navy'>
              <img className='mr2' src={relative('/img/icons/1.svg')} />
              A home for every campaign
            </h2>
            <p className="f4 mb4 mid-gray lh-copy">
              Medialist brings all your campaign outreach together — accessible to all team members anytime, anywhere. No more copying and pasting feedback notes between multiple spreadsheets, emailing updates back and forth, losing coverage, or trying to piece conversations together when teammates aren’t around.
            </p>
            <hr className='hr hr-light ml0' />
          </div>
        </div>
      </section>
      <section className='bg-gradient-2'>
        <div className='mw-lg pv5 dt-l'>
          <div className='dtc-l w-50'>
          </div>
          <div className='dtc-l w-50'>
            <h2 className='f2 fw6 mb3 serif navy'>
              <img className='mr2' src={relative('/img/icons/2.svg')} />
              Move outreach forwards
            </h2>
            <p className="f4 mb4 mid-gray lh-copy">
              See where your team is at with each contact in your campaign, in real time. Track progress with statuses, understand next actions with feedback, and foster accountability with contact owners. No more nagging people for status reports.
            </p>
            <hr className='hr hr-light ml0' />
          </div>
        </div>
      </section>
      <Footer relative={relative} isActive={isActive} />
    </div>
  )
}

export default HowItWorks
