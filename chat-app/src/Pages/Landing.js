
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass, faFeather, faRightFromBracket, faLocationArrow} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-regular-svg-icons'

const Contact = () => {

  return(
    <>
      <div className="contact-id flex items-center h-[77px]">
        <div className="contact-id-details px-5 flex px-5 gap-4 w-full">
          <div className="contact-id-details-profile">
            <FontAwesomeIcon icon={faUser}/>
          </div>
          <div className="contact-id-details-name">
            Contact User
          </div>
        </div>
      </div>
    </>
  )
}

const DialogBoxSend = ({inputValue}) => {
  return(
    <>
    <div className="dialog-box w-full flex justify-end py-2">
      <div className="diaglog-content bg-red-100 min-h-11 h-full text-black px-5 flex items-center break-words max-w-[80%]">
        <div>
          Text wrap not working? Text wrap not working? Text wrap not working? Text wrap not working? Text wrap not working? Text wrap not working? It works now. {inputValue}
        </div>
      </div>
    </div>
    </>
  )
}

const DialogBoxReceive = () => {
  return(
    <>
    <div className="dialog-box flex justify-start py-2">
      <div className="diaglog-content bg-blue-100 min-h-11 h-full text-black px-5 flex items-center break-words max-w-[80%]">
        Text wrap not working. Text wrap not working. Text wrap not working. Text wrap not working. Text wrap not working. Text wrap not working. Text wrap not working. It works now
      </div>
    </div>
    </>
  )
}

const LandingPage = () => {

  const [inputValue, setInput] = useState("");
  const [submitValue, submitInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = () => {
    submitInput(inputValue)
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter"){
      handleSubmit();
    }
  }

  return(
  <>
    <div className="main h-dvh flex justify-center items-center bg-gradient-to-r from-indigo-500bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-5">
      <div className="content-container w-[100%] h-[100%] flex justify-center px-32">
        <div className="content bg-slate-900 w-full min-w-[1000px] py-5 flex">
          <div className="navbar w-[5%] grid grid-rows-12 justify-center items-center">
            <div className="logo bg-white rounded-lg w-[48px] h-[48px] flex justify-center items-center text-3xl row-start-1">
            <FontAwesomeIcon icon={faFeather} />
            </div>
            <div className="profile bg-white rounded-lg w-[48px] h-[48px] flex justify-center items-center text-3xl row-start-11">
              <FontAwesomeIcon icon={faUser}/>
            </div>
            <div className="logout bg-white rounded-lg w-[48px] h-[48px] flex justify-center items-center text-3xl row-start-12">
              <FontAwesomeIcon icon={faRightFromBracket}/>
            </div>
          </div>
          <div className="contact bg-blue-100 w-[20%] h-full">
            <div className="contact-content h-full grid grid-rows-12">
              <div className="contact-content-box bg-white justify-center items-center flex h-full">
                <div className="searchbar row-start-1 h-5/6 text-lg flex items-center gap-2 bg-red-100 w-5/6">
                  <FontAwesomeIcon icon={faMagnifyingGlass}/>
                  Search
                </div>
              </div>
              <div className="contact-details row-span-11">
                <div className="contact-details-box h-[855px] overflow-auto">
                  <Contact/>
                  <Contact/>
                  <Contact/>
                  <Contact/>
                  <Contact/>
                  <Contact/>
                  <Contact/>
                  <Contact/>
                  <Contact/>
                  <Contact/>
                  <Contact/>
                  <Contact/>
                  <Contact/>
                  <Contact/>
                </div>
              </div>
            </div>
          </div>
          <div className="chat bg-green-100 w-[75%] h-full grid grid-rows-12">
            <div className="chat-title row-start-1 bg-yellow-100 grid grid-cols-3">
              <div className="chat-user-box flex items-center gap-4 pl-5">
                <div className="profile-pic w-[32px] h-[32px] rounded-full bg-blue-100 flex items-center justify-center">
                  <FontAwesomeIcon icon={faUser}/>
                </div>
                <div className="profile-details">
                  <div className="profile-name text-base text-3xl font-bold">vdbaiovrboiabvyri8ab</div>
                  <div className="status text-zinc-500 text-sm">Online</div>
                </div>
              </div>
            </div>
            <div className="chat-contents row-span-10">
              <div className="chat-contents-box h-[778px] overflow-y-auto px-3">
                <DialogBoxSend/>
                <DialogBoxReceive/>
                <DialogBoxSend/>
                <DialogBoxReceive/>
                <DialogBoxSend/>
                <DialogBoxReceive/>
                <DialogBoxSend inputValue={submitValue}/>
              </div>
            </div>
            <div className="chat-input bg-red-100 flex flex-row items-center w-full justify-evenly">
              <div className="chat-input-content w-11/12 px-5">
                <input
                  type="text"
                  value={inputValue}
                  onChange={handleInput}
                  onKeyDown={handleKeyPress}
                  className="w-full p-2"
                  placeholder="Type something..."
                />
              </div>
              <div className="chat-input-send rounded-full bg-white h-[32px] w-[32px] flex justify-center items-center" onClick={handleSubmit}>
                <FontAwesomeIcon icon={faLocationArrow} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default LandingPage;