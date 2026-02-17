import React from 'react'

function Notfound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 text-center">
            <h1 className="text-6xl font-bold text-gray-800 mb-3">404</h1>
            <p className="text-gray-500 mb-6">The page you're looking for doesn't exist.</p>

            <a
                href="/"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
                Go Home
            </a>
        </div>
    )
}

export default Notfound
