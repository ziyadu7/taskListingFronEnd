import { useEffect,useState } from 'react'
import{TbMoonFilled} from 'react-icons/tb'

function ThemeSwicher() {
    
    const theme = localStorage.getItem('theme')
    const [reload,setReload] = useState(false)
    
    useEffect(()=>{
       if(theme==='dark'){
        document.documentElement.classList.add('dark')
       }else{
        document.documentElement.classList.remove('dark')
       }
    },[theme,reload])
    
    const handleThemechange=()=>{
        theme==='dark'?localStorage.setItem('theme','light'):localStorage.setItem('theme','dark')
        setReload(!reload)
    }

  return (
    <div>
      <button className={`cursor-pointer ${theme=='dark'?'text-white':'text-black'}`} onClick={handleThemechange}><TbMoonFilled/></button>
    </div>
  )
}

export default ThemeSwicher