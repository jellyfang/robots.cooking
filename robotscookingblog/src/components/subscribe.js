import React from "react"
import addToMailchimp from 'gatsby-plugin-mailchimp'

export default class Subscribe extends React.Component {
     constructor() {
         super()
         this.state = {
             email: null,
             subscribed: false
        }
     }

     handleChange = (event) => {
         this.setState({ 
             email: event.target.value
         })
     }

     handleSubscription = () => {
         this.setState({
             email: null,
             subscribed: true
         })
     }

    // Since `addToMailchimp` returns a promise, you
    // can handle the response in two different ways:
  
    // Note that you need to send an email & optionally, listFields
    // these values can be pulled from React state, form fields,
    // or wherever.  (Personally, I recommend storing in state).
  
    // 1. via `.then`
    _handleSubmit = e => {
      e.preventDefault();
      addToMailchimp(this.state.email, this.state) // listFields are optional if you are only capturing the email address.
      .then(({msg, result}) => {
          console.log('msg', `${result}: ${msg}`)

          if (result !== 'success') {
              throw msg
          } else {
              this.handleSubscription()
          }
        // I recommend setting data to React state
        // but you can do whatever you want (including ignoring this `then()` altogether)
      })
      .catch((err) => {
        // unnecessary because Mailchimp only ever
        // returns a 200 status code
        // see below for how to handle errors
        console.log('err', err)
      })
    }
  
    // // 2. via `async/await`
    // _handleSubmit = async (e) => {
    //   e.preventDefault();
    //   const result = await addToMailchimp(email, listFields)
    //   // I recommend setting `result` to React state
    //   // but you can do whatever you want
    // }
  
    render () {
      return (
        <section className="bg-orange-300 text-gray-800 font-mono">
        <div className="container mx-auto px-6 text-center py-20">
            {(() => {
                if (this.state.subscribed) {
                    return <h3>Thank you!</h3>
                } else {
                    return <>
                    <h2 className="mb-4 text-3xl font-bold text-center text-orange-600">
                        Get weekly news and insights in your inbox!
                    </h2>
                    <h3 className="mx-32 my-4 text-lg text-orange-600">
                        Join tens of dozens owners, managers, and executives receiving direct updates regarding the current automation revolution in the restaurant industry for every Sunday
                    </h3>
                    <form onSubmit={this._handleSubmit}>
                        <input className="shadow appearance-none border rounded py-2 px-3 mr-4 text-xl text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="First Name" onChange={this.handleChange} />
                        <input className="shadow appearance-none border rounded py-2 px-3 mr-4 text-xl text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Last Name" onChange={this.handleChange} />
                        <input className="shadow appearance-none border rounded py-2 px-3 mr-4 text-xl text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Email Address" onChange={this.handleChange} />
                        <button className="bg-blue-500 hover:bg-blue-700 text-white uppercase text-xl font-bold mt-6 py-4 px-8 rounded-full shadow-lg focus:outline-none focus:shadow-outline" type="submit">
                            Subscribe
                        </button>
                        <br /><br />
                        <a className="underline text-xs" href="/privacy">Our privacy policy</a>
                    </form>
                    </>
                }
            })()}
        </div>
        </section>
      )
    }
  }