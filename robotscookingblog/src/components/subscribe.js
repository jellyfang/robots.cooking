import React from "react"

function Subscribe() {
    return (
        <section className="bg-orange-300 text-gray-800 font-mono">
            <div className="container mx-auto px-6 text-center py-20">
                <h2 class="mb-4 text-4xl font-bold text-center">
                    Sign up for more!
                </h2>
                <h3 class="my-4 text-2xl">
                    Weekly newsletter with coolest stuff
                </h3>
                <input class="shadow appearance-none border rounded py-2 px-3 mr-4 text-xl text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Email Address" />
                <button class="bg-blue-500 hover:bg-blue-700 text-white uppercase text-xl font-bold mt-6 py-4 px-8 rounded-full shadow-lg focus:outline-none focus:shadow-outline" type="button">
                    Subscribe
                </button>
            </div>
        </section>
    )
}

export default Subscribe