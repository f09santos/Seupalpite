import React from 'react'
import '../css/styles.css'


import Header from '../components/Header'


const MyApp = ({ Component, pageProps }) => {
    return (
        <div>
            <h1 className='md:bg-red-900 p-8'>MyApp</h1>
            
            <Header />
          <div className='mx-auto'>
                <Component {...pageProps} />
            </div>
        </div>


    )
}
export default MyApp