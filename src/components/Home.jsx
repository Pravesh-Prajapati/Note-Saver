import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToPastes, updateToPastes } from '../redux/pasteSlice'
import { toast, ToastContainer } from 'react-toastify'
import Paste from './Paste'
import { Link, useNavigate } from 'react-router-dom'
import { FaCopy } from "react-icons/fa";
// import 'react-toastify/dist/ReactToastify.css';

function Home() {
    let [data, setdata] = useState({})
    const [list, setlist] = useState([])
    const [pos, setpos] = useState(-1)
    const [error, seterror] = useState({})
    // let [actions, setactions] = useState("")
    // const [id, setid] = useState()
    let dispatch = useDispatch()

    let setinput = (e) => {
        let { name, value } = e.target;
        setdata({ ...data, [name]: value })
    }
    let validatedata = () => {
        let err = {}

        if (!data.title || !data.content) {
            // err.title = "Enter Title"
            err.title = toast.error("Enter all details")
        }
        return err
    }
    let submit = (e) => {
        e.preventDefault()
        let validation = validatedata()
        if (Object.keys(validation).length > 0) {
            seterror(validation)
        }
        else {
            if (pos != -1) {
                dispatch(updateToPastes(data))
            }
            else {
                data = {
                    ...data,
                    id: Date.now().toString(36) || "",
                    created: new Date().toISOString(),
                }
                toast.success("Your task added Successfully")
                dispatch(addToPastes(data))

            }
        }
        setdata({})
        setpos(-1)
    }
    let updatepaste = (val) => {
        setpos(val.id)
        setdata(val)
        // setactions("")
    }
    // let viewpaste = (valu) => {
    //     setactions(valu.actions)
    //     setid(valu.val.id)
    //     setdata(valu.val)
    // }
    let copycontent = () => {
        console.log("copy");
        if (data.content) {
            navigator.clipboard.writeText(data.content)
            toast("Content copied")
        }
    }
    // console.log(id);  
    let goback = () => {
    }

    return (
        <>
            {/* <div className='bg-gray-950'> */}
            <div className=' bg-gray-950  shadow-gray-600  shadow-inner'>
                {/* <div className='max-w-[700px] mx-auto h-full p-5'> */}
                <div className='max-w-[900px] mx-auto h-full p-5'>
                    <form method='post' onSubmit={(e) => { submit(e) }}>
                        <div className='flex items-center gap-3'>
                            <div className='w-[85%]'>
                                {/* <h1>Title</h1> */}
                                <input type="text" name='title' value={data.title ? data.title : ""} className='border-2 px-3 py-2 bg-gray-800 w-full text-white  rounded-lg' placeholder='title' onChange={(e) => { setinput(e) }} />
                            </div>
                            <div className='w-[23%]'>
                                    <button type='submit' className='text-white bg-blue-500 px-3 w-[100%] py-2 rounded-lg'>{pos != -1 ? "Edit" : "Save"}</button>
                            </div>
                        </div>
                        {/* <p className='text-red-500'>{error.title}</p> */}
                        <div className='border rounded mt-3 py-2 px-1 bg-gray-600'>
                            <div className='text-right mb-2'>
                                <button className='text-white me-4' type='button' onClick={copycontent}> <FaCopy /></button>
                            </div>
                            <div>
                                <div>
                                    <textarea value={data.content ? data.content : ""} placeholder='1.Write Your Content Here' name="content" className='bg-gray-800 text-gray-200 w-full p-3 h-full rounded-t-xl border-0 min-h-[500px] max-h-[500px] outline-none' onChange={(e) => { setinput(e) }}> </textarea>
                                </div>
                            </div>
                        </div>
                        {/* <p className='text-red-500'>{error.content}</p> */}
                    </form>
                    <Paste value={updatepaste} />
                    {/* <Paste value={updatepaste} view={viewpaste} /> */}
                </div>

            </div>
            <ToastContainer />
        </>
    )
}

export default Home