import React from "react"
import addToMailchimp from 'gatsby-plugin-mailchimp'

export default class Subscribe extends React.Component {
     constructor() {
         super()
         this.state = {
             email: null
        }
     }

     handleChange = (event) => {
         this.setState({ 
             email: event.target.value
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
      addToMailchimp(this.state.email) // listFields are optional if you are only capturing the email address.
      .then(data => {
        // I recommend setting data to React state
        // but you can do whatever you want (including ignoring this `then()` altogether)
        console.log(data)
      })
      .catch(() => {
        // unnecessary because Mailchimp only ever
        // returns a 200 status code
        // see below for how to handle errors
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
            <h2 class="mb-4 text-3xl font-bold text-center">
                Sign up for more!
            </h2>
            <h3 class="my-4 text-xl">
                Weekly newsletter with coolest stuff
            </h3>
            <form onSubmit={this._handleSubmit}>
                <input class="shadow appearance-none border rounded py-2 px-3 mr-4 text-xl text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Email Address" onChange={this.handleChange} />
                <button class="bg-blue-500 hover:bg-blue-700 text-white uppercase text-xl font-bold mt-6 py-4 px-8 rounded-full shadow-lg focus:outline-none focus:shadow-outline" type="submit">
                    Subscribe
                </button>
            </form>
        </div>
        </section>
      )
    }
  }