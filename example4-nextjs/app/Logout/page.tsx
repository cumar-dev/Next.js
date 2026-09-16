import React from 'react'
import { logout } from '../Actions/actions';

const Logout = () => {
  return (
    <form action={logout} className='p-4'>
     <button className="bg-red-600 text-white px-4 py-2 rounded">Logout</button>
    </form>
  )
}

export default Logout;