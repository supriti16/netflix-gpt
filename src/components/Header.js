import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/store/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants/constant";
import DropdownComponent from "./Dropdown";
import { toggleGptSearchView } from "../utils/store/gptSlice";
import { changeLanguage } from "../utils/store/appConfigSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store?.user);
  const showGptTitle = useSelector((store) => store?.gpt?.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/");
      });
  };

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // ...
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe(); //to unsubscribe to this use effect(event listener) when this component unmounts
  }, []);
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <div className="p-2">
        <img className="w-44" src={LOGO} alt="netflix-logo" />
      </div>
      {user && (
        <>
          <div className="flex p-2">
           {showGptTitle&& <select
              onChange={handleLanguageChange}
              className="p-2 fixed bg-gray-900 text-white -ml-[6%] rounded-lg"
            >
              {SUPPORTED_LANGUAGES.map((ele) => (
                <option key={ele.identifier} value={ele.identifier}>
                  {ele.name}
                </option>
              ))}
            </select>}
            <img className="w-12 h-12" src={user?.photoURL} alt="userIcon" />
            <DropdownComponent
            user={user}
            handleSignOut={handleSignOut}
            handleGptSearch={handleGptSearch}
            title={showGptTitle ? "Go to Browse Page" : "Go to GPT Search"}
          />
            {/* <div className="group relative transition duration-300 ease-in-out">
              <img className="w-6 h-5 mt-4 " alt="icon" src={DropdownArrow} />
              <div class="invisible group-hover:visible  px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-700">
                <a
                  class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  href="#"
                >
                  Link #1
                </a>
                <a
                  class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  href="#"
                >
                  Link #2
                </a>
                <a
                  class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  href="#"
                >
                  Link #3
                </a>
              </div>
            
            </div> */}
          </div>
        
          {/* <button
          className="invisible group-hover:visible  
           text-white"
        >
          Button
        </button> */}
        
        </>
      )}
    </div>
  );
};

export default Header;
