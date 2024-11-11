import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPastes } from '../redux/pasteSlice'
import { IoIosSearch } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaShareAlt } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { FaCopy } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function Paste(props) {
  let [search, setsearch] = useState(" ")

  let getpaste = useSelector((state) => state.paste.pastes)

  let dispatch = useDispatch()
  // console.log(getpaste);
  let remove = (val) => {
    dispatch(removeFromPastes(val.id))
    // setids(null)
  }
  let update = (val, i) => {
    (props.value(val));
  }
  let searchdata = (e) => {
    let values = e.target.value
    setsearch(values)
  }

  // let view = (val, i) => {
  //   let newobj = {
  //     val,
  //     actions: "view"
  //   }
  //   props.view(newobj)
  // }
  let copy = (val) => {
    // console.log(val)
    navigator.clipboard.writeText(val.title)
    toast("Title copeid to clipboard")
  }


  return (
    <>
      <div className='pt-8'>
        <div className='relative'>
          <input type="text" name="" onChange={(e) => { searchdata(e) }} className='w-full bg-gray-600 mt-6 ps-9 py-2 rounded text-white relative outline-none' placeholder='Search Question here' />
          <IoIosSearch className='text-white absolute top-9 left-2 text-lg' />
        </div>
        <div className='border rounded mt-4 border-gray-600'>
          <h1 className='text-white p-4 border-b border-gray-600 rounded font-bold text-2xl'>All Docs</h1>
          {getpaste
            .filter((val) => {
              if (search === " ") {
                return val
              }
              else if (val.title.toLocaleLowerCase().match(search.toLocaleLowerCase())) {
                return val
              }
            })
            .map((val, i) => {
              return (
                <>
                  <div key={i} className='m-4 border border-gray-600 rounded  px-4 min-h-[150px] flex flex-col justify-center'>
                    <div className='flex justify-between'>
                      <div className=' text-white font-light mb-3 max-w-[500px]'>
                        <h1 className='font-bold text-2xl mb-2'>{val.title}</h1>
                        {val.content.length > 150
                          ?
                          <h1 className='text-base'>
                            {val.content.substring(0, 150)}
                            <button className=' text-blue-500 px-1 py-1'>... Show More</button>
                          </h1>
                          :
                          <h1 className='text-base'>{val.content}</h1>
                        }
                      </div>
                      <div className='pt-3'>
                        <button className='text-white bg-inherit border mx-1 border-gray-600 px-2 py-2 rounded' type='button' onClick={() => { update(val, i) }}>
                          <FiEdit />
                        </button>
                        <button className='text-white bg-inherit border mx-1 border-gray-600 px-2 py-2 rounded' type='button' onClick={() => { remove(val, i) }}>
                          <RiDeleteBin5Line />
                        </button>
                        <button className='text-white bg-inherit border mx-1 border-gray-600 px-2 py-2 rounded' type='button' onClick={() => { share(val, i) }}>
                          <FaShareAlt />
                        </button>
                        <Link to={"/viewpaste/" + val.id}>
                          <button className='text-white bg-inherit border mx-1 border-gray-600 px-2 py-2 rounded' type='button'>
                            <IoEyeOutline />
                          </button>
                        </Link>
                        <button className='text-white bg-inherit border mx-1 border-gray-600 px-2 py-2 rounded' type='button' onClick={() => { copy(val) }}>
                          <FaCopy />
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Paste