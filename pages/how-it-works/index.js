import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

const ScreenshotLeft = ({src}) => (
  <div className='relative overflow-hidden'>
    <img className='screenshot nl3 nl6-ns' style={{width: 880}} src={src} />
    <div className='absolute top-0 left-0 bottom-0 fade-out-left' style={{width: 150}} />
  </div>
)

const ScreenshotRight = ({src}) => (
  <div className='relative overflow-hidden'>
    <img className='screenshot ml3 ml6-ns' style={{width: 880}} src={src} />
    <div className='absolute top-0 right-0 bottom-0 fade-out-right' style={{width: 150}} />
  </div>
)

const ScreenshotBottom = ({src}) => (
  <div className='relative overflow-hidden'>
    <img className='screenshot fade-out-bottom' style={{width: 880, marginBottom: -5}} src={src} />
    <div className='absolute left-0 right-0 bottom-0 fade-out-bottom' style={{height: 100}} />
  </div>
)

const SectionTextLeft = ({className, imgSrc, iconSrc, title, text}) => {
  const paras = Array.isArray(text) ? text : [text]
  return (
    <section className={className}>
      <div className='pv5 dt-l w-100 dt--fixed'>
        <div className='dtc-l w-50-l v-mid tr'>
          <div className='dib tl ph2 pb4' style={{maxWidth: 610}}>
            <h2 className='tc tl-ns f2 fw6 mb3 serif navy'>
              <img className='mr2' src={iconSrc} />
              {title}
            </h2>
            {paras.map(text => (
              <p className="f4 mid-gray lh-copy" key={text}>
                {text}
              </p>
            ))}
            <hr className='dn db-l hr hr-light ml0 mt4' />
          </div>
        </div>
        <div className='dtc-l w-50-l v-mid'>
          <ScreenshotRight src={imgSrc} />
        </div>
      </div>
    </section>
  )
}

const SectionTextRight = ({className, imgSrc, iconSrc, title, text}) => {
  const paras = Array.isArray(text) ? text : [text]
  return (
    <section className={className}>
      <div className='pv5 dt-l w-100 dt--fixed'>
        <div className='dtc-l w-50-l v-mid'>
          <ScreenshotLeft src={imgSrc} />
        </div>
        <div className='dtc-l w-50-l v-mid tr tl-l'>
          <div className='dib tl ph2 pb4' style={{maxWidth: 610}}>
            <h2 className='tc tl-ns f2 fw6 mb3 serif navy'>
              <img className='mr2' src={iconSrc} />
              {title}
            </h2>
            {paras.map(text => (
              <p className="f4 mid-gray lh-copy" key={text}>
                {text}
              </p>
            ))}
            <hr className='dn db-l hr hr-light ml0 mt4' />
          </div>
        </div>
      </div>
    </section>
  )
}

const SectionTextCenter = ({imgSrc, iconSrc, title, text}) => {
  const paras = Array.isArray(text) ? text : [text]
  return (
    <section className='tc'>
      <div className='measure-wide center pt5 ph2 pb4'>
        <h2 className='f2 fw6 mb3 serif navy'>
          <img className='mr2' src={iconSrc} />
          {title}
        </h2>
        {paras.map(text => (
          <p className="f4 mid-gray lh-copy" key={text}>
            {text}
          </p>
        ))}
      </div>
      <ScreenshotBottom src={imgSrc} />
    </section>
  )
}

const HowItWorks = ({relative, isActive}) => {
  return (
    <div>
      <Header relative={relative} isActive={isActive} />
      <section style={{background: `url(${relative('/img/how-it-works-bg.svg')}) no-repeat bottom left`}}>
        <div className='center pt5-l ph2 pb4 tc' style={{maxWidth: 610}}>
          <h1 className='f1 fw6 mb4 serif navy'>
            Here’s how Medialist works
          </h1>
          <p className="f4 mb5 mid-gray lh-copy tl tc-ns">
            Instead of having media lists, feedback, briefing books and contact
            information all over the place — lost in inboxes and scattered
            across hard to find spreadsheets and documents — Medialist brings
            all your team’s influencer intelligence and campaigns under one roof.
            Everything is organised, centralised and clear so your team can save
            time and build stronger relationships with influencers.
          </p>
        </div>
      </section>

      <SectionTextLeft
        className='bt b--light-gray'
        iconSrc={relative('/img/icons/1.svg')}
        imgSrc={relative('/img/screens/campaign-activity.jpg')}
        title='A home for every campaign'
        text='Medialist brings all your campaign outreach together — accessible to all team members anytime, anywhere. No more copying and pasting feedback notes between multiple spreadsheets, emailing updates back and forth, losing coverage, or trying to piece conversations together when teammates aren’t around.'
      />

      <SectionTextRight
        className='bg-gradient-2'
        iconSrc={relative('/img/icons/2.svg')}
        imgSrc={relative('/img/screens/campaign-contacts-list.jpg')}
        title='Move outreach forwards'
        text='See where your team is at with each contact in your campaign, in real time. Track progress with statuses, understand next actions with feedback, and foster accountability with contact owners. No more nagging people for status reports.'
      />

      <SectionTextCenter
        iconSrc={relative('/img/icons/3.svg')}
        imgSrc={relative('/img/screens/global-contacts-list.jpg')}
        title='Find campaigns, faster'
        text='Easily find past campaigns so you can use them to inform the next. No more spending countless hours creating new media lists from scratch for every campaign.'
      />

      <SectionTextLeft
        className='bg-gradient-3'
        iconSrc={relative('/img/icons/4.svg')}
        imgSrc={relative('/img/screens/contact-activity.jpg')}
        title='Make insights actionable'
        text={[
          'See all your team’s feedback, coverage and insights — for each influencer, from every campaign — in one place. Check feedback to understand where things are at with recent campaigns and use need-to-knows to identify and capture opportunities, dos and don\'ts.',
          'With Medialist, you’ll have the full picture of your team’s relationship with an influencer so you can stay aligned and make every interaction more personal and more relevant.'
        ]}
      />

      <SectionTextRight
        className='bg-white'
        iconSrc={relative('/img/icons/5.svg')}
        imgSrc={relative('/img/screens/contact-campaigns.jpg')}
        title='Learn from every campaign'
        text={[
          'Medialist gives you a real time view into the status and outcome of every campaign associated with an influencer — across your whole PR team.',
          'Understand what pitches work and what don’t, spot opportunities to collaborate with colleagues, and avoid irritating influencers by pitching them too frequently about the same things.'
        ]}
      />

      <SectionTextLeft
        className='bg-gradient-3'
        iconSrc={relative('/img/icons/6.svg')}
        imgSrc={relative('/img/screens/contact-list.jpg')}
        title='Make relationships an advantage'
        text={[
          'Medialist helps you stay on top of your most important relationships by pulling all your contacts, from all your campaigns, into one easily searchable list.',
          'Next time you need to quickly create a media list, invite influencers to an event or just say hi to the people that matter, you’ll know where to find them.'
        ]}
      />

      <SectionTextCenter
        iconSrc={relative('/img/icons/7.svg')}
        imgSrc={relative('/img/screens/global-dashboard.jpg')}
        title='Everything, together'
        text='Your global dashboard gives you an overview of all the latest activity from all your campaigns and contacts. No more wondering what campaigns people are working on, who is reaching out to whom, and what’s happening with your key contacts.'
      />

      <Footer relative={relative} isActive={isActive} />
    </div>
  )
}

export default HowItWorks
