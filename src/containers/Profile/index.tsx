import React from 'react'

class Home extends React.Component {
  render() {
    return (
      <div>
        <div></div>
        <div></div>
        <div>
          <div>
            <span>Atul Chuahan</span>
            <br />
            <span>web Developer</span>
          </div>
        </div>
        <div>
          <a
            href='https://www.instagram.com/faintd_monk/'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fab fa-instagram'></i>
          </a>
          <a
            href='https://www.linkedin.com/in/atul-chauhan-5270a6101/'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fab fa-linkedin'></i>
          </a>
          <a
            href='https://twitter.com/AtulCHA68694097'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fab fa-twitter'></i>
          </a>
        </div>
        <div>
          <a
            href='https://goo.gl/maps/e6kH9KbESFeST5DK6'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fas fa-map-marker-alt'></i> Noida, India
          </a>
        </div>
      </div>
    )
  }
}

export default Home
