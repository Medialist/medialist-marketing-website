import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

const FullsizeButton = ({style}) => (
  <button className='sans-serif bn f6 fw5 white absolute pointer' style={{
    ...style,
    lineHeight: '20px',
    background: '#4F5E6F',
    boxShadow: '0 1px 2px 0 rgba(0,0,0,0.10)',
    borderRadius: '2px',
    padding: '8px 16px'
  }}>
    <svg style={{verticalAlign: '-1px'}} width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.732 0H12v4.268h-1.691V1.691H7.732V0zm2.577 10.309V7.732H12V12H7.732v-1.691h2.577zM0 4.269V0h4.268v1.691H1.691v2.577H0zm1.691 3.463v2.577h2.577V12H0V7.732h1.691z" fill="#FFF" fillRule="evenodd"/>
    </svg>
    <span className='ml2'>See full image</span>
  </button>
)

function toImgUrl ({relative, imgPath = '/img/screens', imgId, width}) {
  return relative(`${imgPath}/${imgId}-${width}w.jpg`)
}

function toSrcSet ({relative, imgPath = '/img/screens', imgId, widths = [1005, 2010]}) {
  const src = widths.map(width => {
    const url = toImgUrl({relative, imgPath, imgId, width})
    return `${url} ${width}w`
  })
  return src.join(',')
}

const SrcSetImage = ({relative, imgPath, imgId, widths, ...props}) => {
  const src = toImgUrl({relative, imgPath, imgId, width: widths[0]})
  const srcSet = toSrcSet({relative, imgPath, imgId, widths})
  return <img {...props} src={src} srcSet={srcSet} />
}

const Screenshot = ({relative, imgId, imgPath, widths, style, ...props}) => (
  <SrcSetImage
    {...props}
    style={{
      ...style,
      width: 880
    }}
    widths={widths}
    imgId={imgId}
    imgPath={imgPath}
    relative={relative}
  />
)

const Icon = ({relative, imgPath = '/img/icons', imgId, ...props}) => {
  const iconSrc = relative(`${imgPath}/${imgId}.svg`)
  return <img {...props} src={iconSrc} alt='' />
}

const ScreenshotLeft = ({relative, imgId, title, alt, imgPath = '/img/screens', widths = [1005, 2010]}) => (
  <div className='relative overflow-hidden'>
    <a
      href={toImgUrl({relative, imgPath, imgId, width: widths[1]})}
      title={title}
      style={{outline: 'none'}}>
      <Screenshot
        widths={widths}
        relative={relative}
        imgId={imgId}
        className='screenshot screenshot-left nl3 nl6-ns'
        alt={alt}
      />
      <FullsizeButton style={{
        right: '140px',
        bottom: '42px'
      }} />
    </a>
    <div className='absolute top-0 left-0 bottom-0 fade-out-left' style={{width: 150}} />
  </div>
)

const ScreenshotRight = ({relative, imgId, title, alt, imgPath = '/img/screens', widths = [1005, 2010]}) => (
  <div className='relative overflow-hidden'>
    <a
      href={toImgUrl({relative, imgPath, imgId, width: widths[1]})}
      title={title}
      style={{outline: 'none'}}>
      <Screenshot
        widths={widths}
        relative={relative}
        imgId={imgId}
        className='screenshot ml3 ml6-ns'
        alt={alt}
      />
      <FullsizeButton style={{
        left: '140px',
        bottom: '42px'
      }} />
    </a>
    <div className='absolute top-0 right-0 bottom-0 fade-out-right' style={{width: 150}} />
  </div>
)

const ScreenshotBottom = ({relative, imgId, title, alt, imgPath = '/img/screens', widths = [1005, 2010]}) => (
  <div className='relative overflow-hidden tc'>
    <a
      href={toImgUrl({relative, imgPath, imgId, width: widths[1]})}
      title={title}
      style={{outline: 'none'}}>
      <Screenshot
        widths={widths}
        relative={relative}
        imgId={imgId}
        className='screenshot fade-out-bottom'
        style={{marginBottom: -5}}
        alt={alt}
      />
      <FullsizeButton style={{
        left: '50%',
        transform: 'translateX(-50%)',
        bottom: '8px',
        zIndex: 1000
      }} />
    </a>
    <div className='absolute left-0 right-0 bottom-0 fade-out-bottom' style={{height: 100}} />
  </div>
)

const SectionTextLeft = ({className, relative, imgId, imgAlt, imgTitle, iconId, title, text}) => {
  const paras = Array.isArray(text) ? text : [text]
  return (
    <section className={className}>
      <div className='pv5 dt-l w-100 dt--fixed mw-xl'>
        <div className='dtc-l w-50-l v-mid tr'>
          <div className='dib tl ph2 pb4' style={{maxWidth: 610}}>
            <h2 className='tc tl-ns f2 fw6 mb3 serif navy'>
              <Icon relative={relative} className='mr2' imgId={iconId} />
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
          <ScreenshotRight relative={relative} imgId={imgId}  title={imgTitle} alt={imgAlt} />
        </div>
      </div>
    </section>
  )
}

const SectionTextRight = ({className, relative, imgId, imgAlt, imgTitle, iconId, title, text}) => {
  const paras = Array.isArray(text) ? text : [text]
  const iconSrc = relative(`/img/icons/${iconId}.svg`)
  return (
    <section className={className}>
      <div className='pv5 dt-l w-100 dt--fixed mw-xl'>
        <div className='dtc-l w-50-l v-mid'>
          <ScreenshotLeft relative={relative} imgId={imgId} title={imgTitle} alt={imgAlt} />
        </div>
        <div className='dtc-l w-50-l v-mid tr tl-l'>
          <div className='dib tl ph2 pb4' style={{maxWidth: 610}}>
            <h2 className='tc tl-ns f2 fw6 mb3 serif navy'>
              <Icon relative={relative} className='mr2' imgId={iconId} />
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

const SectionTextCenter = ({relative, imgId, imgAlt, imgTitle, iconId, title, text}) => {
  const paras = Array.isArray(text) ? text : [text]
  const iconSrc = relative(`/img/icons/${iconId}.svg`)
  return (
    <section className='tc'>
      <div className='measure-wide center pt5 ph2 pb4'>
        <h2 className='f2 fw6 mb3 serif navy'>
          <Icon relative={relative} className='mr2' imgId={iconId} />
          {title}
        </h2>
        {paras.map(text => (
          <p className="f4 mid-gray lh-copy" key={text}>
            {text}
          </p>
        ))}
      </div>
      <ScreenshotBottom relative={relative} imgId={imgId} title={imgTitle} alt={imgAlt} />
    </section>
  )
}

const HowItWorks = ({relative, isActive}) => {
  return (
    <div className='gallery'>
      <Header relative={relative} isActive={isActive} />
      <section style={{background: `url(${relative('/img/how-it-works-bg.svg')}) no-repeat bottom left`}}>
        <div className='center pt5-l ph2 pb4 tc' style={{maxWidth: 620}}>
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
        relative={relative}
        className='bt b--light-gray'
        iconId='1'
        imgId='campaign-activity'
        imgTitle='The campaign profile — all your campaign outreach in one place.'
        imgAlt='The campaign profile — PR campaign feedback, notes and influencers all in one place.'
        title='A home for every campaign'
        text='Medialist brings all your campaign outreach together — accessible to all team members anytime, anywhere. No more copying and pasting feedback notes between multiple spreadsheets, emailing updates back and forth, losing coverage, or trying to piece conversations together when teammates aren’t around.'
      />

      <SectionTextRight
        relative={relative}
        className='bg-gradient-2'
        iconId='2'
        imgId='campaign-contacts-list'
        imgTitle='The campaign contacts list — a real time view into the status of your campaign.'
        imgAlt='The campaign contacts list — a list of all your PR campaign contacts, statuses, notes, coverage and owners.'
        title='Move outreach forwards'
        text='See where your team is at with each contact in your campaign, in real time. Track progress with statuses, understand next actions with feedback, and foster accountability with contact owners. No more nagging people for status reports.'
      />

      <SectionTextCenter
        relative={relative}
        iconId='3'
        imgId='global-campaigns-list'
        imgTitle='The global campaigns list — all your campaigns in one place.'
        imgAlt='The global campaigns list — a list of all your PR campaigns.'
        title='Find campaigns, faster'
        text='Easily find past campaigns so you can use them to inform the next. No more spending countless hours creating new media lists from scratch for every campaign.'
      />

      <SectionTextLeft
        relative={relative}
        className='bg-gradient-3'
        iconId='4'
        imgId='contact-activity'
        imgTitle='The contact profile — all your influencer intelligence in one place.'
        imgAlt='The contact profile — all your PR campaign feedback, notes and contact information for an influencer, in one place.'
        title='Make insights actionable'
        text={[
          'See all your team’s feedback, coverage and insights — for each influencer, from every campaign — in one place. Check feedback to understand where things are at with recent campaigns and use need-to-knows to identify and capture opportunities, dos and don\'ts.',
          'With Medialist, you’ll have the full picture of your team’s relationship with an influencer so you can stay aligned and make every interaction more personal and more relevant.'
        ]}
      />

      <SectionTextRight
        relative={relative}
        className='bg-white'
        iconId='5'
        imgId='contact-campaigns-list'
        imgTitle='The contact campaigns list — all your pitches for an influencer in one place.'
        imgAlt='The contact campaigns list — a list of all your PR campaigns associated with an influencer.'
        title='Learn from every campaign'
        text={[
          'Medialist gives you a real time view into the status and outcome of every campaign associated with an influencer — across your whole PR team.',
          'Understand what pitches work and what don’t, spot opportunities to collaborate with colleagues, and avoid irritating influencers by pitching them too frequently about the same things.'
        ]}
      />

      <SectionTextLeft
        relative={relative}
        className='bg-gradient-3'
        iconId='6'
        imgId='global-contacts-list'
        imgTitle='The global contacts list — all your contacts in one place.'
        imgAlt='The global contacts list — a list of all your PR contacts in one place.'
        title='Make relationships an advantage'
        text={[
          'Medialist helps you stay on top of your most important relationships by pulling all your contacts, from all your campaigns, into one easily searchable list.',
          'Next time you need to quickly create a media list, invite influencers to an event or just say hi to the people that matter, you’ll know where to find them.'
        ]}
      />

      <SectionTextCenter
        relative={relative}
        iconId='7'
        imgId='global-dashboard'
        imgTitle='Your global dashboard — everything, together.'
        imgAlt='Your global dashboard — see all your PR team’s campaign feedback, coverage, and more, in one newsfeed.'
        title='Everything, together'
        text='Your global dashboard gives you an overview of all the latest activity from all your campaigns and contacts. No more wondering what campaigns people are working on, who is reaching out to whom, and what’s happening with your key contacts.'
      />

      <Footer relative={relative} isActive={isActive} />

      <link rel='stylesheet' href={relative('/js/baguetteBox.css')} />
      <script src={relative('/js/baguetteBox.js')} />
    </div>
  )
}

HowItWorks.meta = {
  title: 'How Medialist works: what it’s like to organise all your Influencer Relationships and PR campaigns from one place',
  description: 'Instead of having media lists, feedback, briefing books and contact information all over the place, Medialist brings all your team’s influencer intelligence and PR campaigns under one roof.'
}

export default HowItWorks
