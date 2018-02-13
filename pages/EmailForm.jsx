import React from 'react'

const Feedback = ({relative}) => (
  <div className='overflow-hidden relative' style={{height: 20}}>
    <div className='pt2 pt1-ns o-0 submit-ok-o-100 fw5 green absolute bottom-0 left-0' style={{fontSize: 14}}>
      <img className='mr1' src={relative('/img/email-success.svg')} />
      <span>Success! We'll be in touch soon.</span>
    </div>
    <div className='pt2 pt1-ns o-0 submit-error-o-100 fw5 red absolute bottom-0 left-0' style={{fontSize: 14}}>
      <img className='mr1' src={relative('/img/email-error.svg')} />
      <span>Sorry, there was an error.</span>
    </div>
  </div>
)

export const EmailForm = ({relative, large}) => {
  return (
    <form data-id='email-form' className="db w-100" action="https://post.tableflip.io/medialist.io" method='post'>
      <div className='db w-100 dib-ns w-70-ns tl'>
        <input className="input input-lg db w-100 submit-error-b--red" type="email" name="email" placeholder="Enter your email address" />
        <Feedback relative={relative}/>
      </div>
      <input type="hidden" name="g-recaptcha-response" defaultValue="skip" />
      <button className="btn btn-orange bubble-left btn-lg w-100 w-auto-ns db dib-ns mt3 mt0-ns ml2-ns v-top" type="submit" name="button">Get a demo</button>
    </form>
  )
}

export const SmallEmailForm = ({relative, large}) => {
  return (
    <form data-id='email-form' style={{width: '100%', maxWidth: 362}} action="https://post.tableflip.io/medialist.io" method='post'>
      <input type="hidden" name="g-recaptcha-response" defaultValue="skip" />
      <div className='dt w-100 dt--fixed'>
        <div className='dtc-ns v-mid'>
          <input className="db input submit-error-b--red" style={{minWidth: 232}} type="email" name="email" placeholder="Enter your email address" />
          <Feedback relative={relative} />
        </div>
        <div className='dtc-ns pl2-ns' style={{width:130}}>
          <button className="btn btn-blue bubble-left w-100 w-auto-ns db dib-ns mt3 mt0-ns v-top" type="submit" name="button">Get a demo</button>
        </div>
      </div>
    </form>
  )
}