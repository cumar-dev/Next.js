import React from 'react'
import { logIn } from '../Actions/actions';

const Login = () => {
  return (
    <form action={logIn} className='p-2 space-x-2'>
      <select name='role' className='border border-b-slate-500'>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <button className='bg-blue-600 text-white px-2.5 py-2 rounded-md'>Login</button>
    </form>
  )
}

export default Login;