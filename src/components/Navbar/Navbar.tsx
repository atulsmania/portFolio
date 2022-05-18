import React from 'react'

class Navbar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const input = [
      ['Home', 'fi-rr-home'],
      ['Projects', 'fi-rr-laptop'],
      ['Certifications', 'fi-rr-diploma'],
      ['Connect', 'fi-rr-link'],
    ]

    return (
      <div>
        <i className={'fi-rr-caret-up'}></i>
        <div>
          {input.map((ele) => (
            <h3 key={ele[0]} id={ele[0]}>
              <i className={ele[1]}></i>
            </h3>
          ))}
        </div>
      </div>
    )
  }
}

export default Navbar
