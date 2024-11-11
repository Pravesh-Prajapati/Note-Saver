import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ViewPaste() {
  let pos = useParams()
  const [list, setlist] = useState([])
  const [data, setdata] = useState({})
  //  console.log(pos);
  useEffect(() => {
    let getpaste = JSON.parse(localStorage.getItem("yourpaste"))
    //  console.log(getpaste);
    getpaste.map((val, i) => {
      if (val.id == pos.id) {
        setdata(val)
        console.log(val);
      }
    })
  }, [])


  return (
    <>
      <div>
        <div className=' bg-gray-950 h-screen  shadow-gray-600  shadow-inner'>
          <div className='max-w-[900px] mx-auto h-full p-5'>
            <form method='post'>
              <div className='flex items-center gap-3'>
                <div className='w-[85%]'>
                  {/* <h1>Title</h1> */}
                  <input type="text" name='title' value={data.title} className='border-2 px-3 py-2 bg-gray-800 w-full text-white  rounded-lg' placeholder='title' />
                </div>
                <div className='w-[23%]'>  
                </div>
              </div>
              <div className='border mt-10 pt-8 px-1 bg-gray-600'>
                <div>
                  <div>
                    <textarea value={data.content} placeholder='1.Write Your Content Here' name="content" className='bg-gray-800 text-gray-200 w-full p-3 h-full rounded-t-xl border-0 min-h-[500px] max-h-[500px]'> </textarea>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ViewPaste