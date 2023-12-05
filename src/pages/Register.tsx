import toast from "react-hot-toast"
import axiosInstance from "../api/axios"
import ThemeSwicher from "../components/themeSwitcher"
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function Register() {

  const [loginPage,setLoginPage] = useState(false)
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const navigate = useNavigate()
  const [err,setErr] = useState('')

  const handleLogin = ()=>{
    if(email.trim().length<=0||password.trim().length<=0){
      setErr('Fill all the fields')
    }else{
      setErr('')
      axiosInstance.post('/login',{email,password}).then(res=>{
        localStorage.setItem('token',res?.data?.token)
        console.log(res.data);  
        navigate('/')
      }).catch(err=>{
        if(err?.response?.data?.errMsg){
          toast.error(err?.response?.data?.errMsg)
        }else if(err){
          console.log(err)
          toast.error(err?.message)          
        }
      })
    }
  }

  const handleSignUp = ()=>{
    if(email.trim().length<=0||password.trim().length<=0){
      setErr('Fill all the fields')
    }else{
      setErr('')
      axiosInstance.post('/register',{email,password}).then(res=>{
        setLoginPage(true)
        setEmail('')
        setPassword('')
        toast.success(res?.data?.message)
        setLoginPage(true)
      }).catch(err=>{
        if(err?.response?.data?.errMsg){
          toast.error(err?.response?.data?.errMsg)
        }else if(err?.message){
          toast.error(err.message)
        }
      })
    }
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-center">
        <ThemeSwicher/>
      </div>
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            {loginPage?'Sign in to your account':'Create new account'}
          </h1>
          <form className="space-y-4 md:space-y-6">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
              <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <div className="flex justify-center h-3">
            <span className="text-xs text-center text-red-600">{err}</span>
            </div>
            <button onClick={()=>{
              setEmail('')
              setPassword('')
              loginPage?handleLogin():handleSignUp()
            }} type="button" className="w-full text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{loginPage?'Sign in':'Sign up'}</button>
            <p onClick={()=>{loginPage?setLoginPage(false):setLoginPage(true)}} className="text-sm text-center hover:cursor-pointer font-light text-gray-500 dark:text-gray-400">
            {loginPage?'Don’t have an account yet?':'Already have account?'}
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Register