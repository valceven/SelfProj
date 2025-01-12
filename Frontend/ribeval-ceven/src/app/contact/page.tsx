import React from 'react'

const Contact = () => {
  return (
    <>
        <div className='flex justify-center bg-accent2 min-h-screen space-x-4 px-32'>

          <div className='flex flex-col items-start justify-start w-2/3 h-3/4 py-4 space-y-8'>
            <div>
              <h1 className='text-slate-800 font-bold text-5xl'>
                Contact Us
              </h1>
            </div>

            <div className='space-y-1'>
              <p> Email, call, or complete the form to learn how </p>
              <p> Ribeval can assist you with your request.</p>
              <br />
              <p> ribevalceven@gmail.com </p>
              <br />
              <p> +639912935111 | +639976277284 </p>
              <br />
              <p className='font-bold underline underline-offset-2'> Customer Support </p>
            </div>

            <div className='flex space-x-10'>
              <div>
                <div>
                  <p className='font-bold'> Customer Support </p>
                </div>

                <br />

                <div className='text-sm'>
                  <p> Our support team is available</p>
                  <p>around the clock to address any</p>
                  <p>converns or queries you may have.</p>
                </div>
              </div>

              <div>
                <div>
                  <p className='font-bold'> Feedback and Suggestions </p>
                </div>

                <br />

                <div className='text-sm'>
                  <p> We value your feedback and are</p>
                  <p> open to constructive critiscm to </p>
                  <p> improve our services </p>
                </div>
              </div>

              <div>
                <div>
                  <p className='font-bold'> Media Inquires </p>
                </div>

                <br />

                <div className='text-sm'>
                  <p> For media related questions or</p>
                  <p> press inquires, please contact us </p>
                  <p> at ribevalgoods@facebook.com </p>
                </div>
              </div>
            </div>
          </div>

          <div className='w-1/3 p-5'>
            <div className='bg-slate-100 h-[65%] rounded-xl flex flex-col px-6 py-10'>
              <form action="">
                <div className='space-y-6'>
                  <div className='flex flex-col'>
                    <label htmlFor="">Name</label>
                    <input type="text" name="" id="" />
                  </div>

                  <div className='flex flex-col'>
                    <label htmlFor="">Password</label>
                    <input type="text" name="" id="" />
                  </div>

                  <div className='flex justify-center place-items-end'>
                    <button className='bg-accent1 py-2 px-4 rounded-lg hover:bg-opacity-80 text-white'> Submit </button>
                  </div>
                </div>
 
              </form>
            </div>
          </div>

        </div>
    </>
  )
}

export default Contact;
