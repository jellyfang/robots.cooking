import React from "react"

function Subscribe() {
    return (
        <div className="bg-orange-300 text-gray-800 font-mono flex flex-wrap justify-between items-center max-w-4xl p-2 mt-10 rounded">
            <div className="flex flex-wrap px-4 pt-2 pb-2 mb-4">
                <div class="mb-12 text-2xl">
                    Sign up for more!
                </div>
                <div class="mb-12">
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 ml-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Email Address" />
                </div>
                <div class="mb-12">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 ml-4 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Subscribe