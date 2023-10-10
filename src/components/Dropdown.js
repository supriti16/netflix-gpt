import { Menu } from '@headlessui/react'
import DropdownArrow from '../assets/icons/drop-down.png'
function DropdownComponent({user,handleSignOut}) {
 return (
   <div>
     <Menu>
       <Menu.Button className="px-4 py-2 text-sm font-medium text-white">
       <img className='w-6 h-5 mt-4' alt='icon' src={DropdownArrow}/>
       </Menu.Button>
       <Menu.Items className="py-2 bg-black rounded-md">
       <Menu.Item disabled>
           <span className="block px-4 py-2 text-white text-lg">
             Signed in as {user?.email}
           </span>
         </Menu.Item>
         <Menu.Item className="">
           {({ active }) => (
             <button onClick={handleSignOut}
               className={`block px-4 py-2 text-white text-lg ${active ? 'bg-red-500 w-full rounded-md' : ''
                 }`}
              
             >
               Sign out of Netflix
             </button>
           )}
         </Menu.Item>
        
       
       </Menu.Items>
     </Menu>
   </div>
 )
}


export default DropdownComponent