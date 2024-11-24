import ChatIcon from '@mui/icons-material/Chat';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import { TextField } from '@mui/material';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import SendIcon from '@mui/icons-material/Send';
import { useEffect, useRef, useState } from 'react';

const DialogboxSend = ({input}) => {
  return(
    <>
    <div className="dialogbox-sent flex justify-end py-2">
      <div className="dialogbox-sent-content bg-white text-black border border-black min-h-11 max-w-[80%] p-2">This is the message. Word Wrap. Word Wrap. Word Wrap. Word Wrap. Word Wrap. Word Wrap. Word Wrap. Word Wrap. Word Wrap. Word Wrap. Word Wrap. Word Wrap. {input}</div>
    </div>
    </>
  )
}

const DialogboxReceive = () => {
  return(
    <>
    <div className="dialogbox-receive flex justify-start py-2">
      <div className="dialogbox-receive-content bg-black text-white border border-white min-h-11 max-w-[80%] p-2">This is the message. Word Wrap. Word Wrap. Word Wrap. Word Wrap. Word Wrap. Word Wrap. Word Wrap. Word Wrap. Word Wrap. Word Wrap. Word Wrap. Word Wrap. Word Wrap. Word Wrap. Word Wrap. Word Wrap. Word Wrap. Word Wrap. Word Wrap. Word Wrap. Word Wrap. Word Wrap. Word Wrap. Word Wrap. Word Wrap. Word Wrap. Word Wrap. Word Wrap. Word Wrap. Word Wrap. Word Wrap. Word Wrap. Word Wrap. Word Wrap. Word Wrap. Word Wrap. Word Wrap. Word Wrap. Word Wrap. Word Wrap. Word Wrap. Word Wrap. </div>
    </div>
    </>
  )
}

const DialogboxDate = () => {
  const datetime = new Date().toLocaleDateString()
  return(
    <>
      <div className="dialogbox-date flex justify-center py-2">
        <div className="dialogbox-date-content min-h-11 max-w-[80%] p-2 text-sm">
          {datetime}
        </div>
      </div>
    </>
  )
}

const ContactUser = ({username}) => {  
  return(
    <>
      <div className={`contact-user h-24 w-full bg-whwite hover:bg-stone-100 flex justify-center items-center`}>
        <div className="contact-user-content flex items-center w-full gap-4 px-4">
          <div className="contact-user-profile">
            <AccountCircleIcon sx={{fontSize:'3.5rem'}}/>
          </div>
          <div className="contact-user-name text-lg">{username}</div>
        </div>
      </div>
    </>
  )
}

const Chat = () => {

  const [inputData, setInputData] = useState('')
  const [messages, setMessages] = useState([])

  const handleInputChange = (event) => {
    setInputData(event.target.value)
  }

  const handleInputData = (event) =>{
    if(event.key==='Enter' && inputData.trim() !==''){
      setMessages((prevMessages) => [...prevMessages, inputData]);
      setInputData('')
    }
  }

  const chatEndRef = useRef(null);

  useEffect(() => {
    if(chatEndRef.current){
      chatEndRef.current.scrollIntoView({behavior:'smooth'});
    }
  }, [messages]);

  const usernameDetails = 'User';

  return(
    <>
    <div className="main bg-gradient-to-r from-slate-500 to-slate-800 h-dvh w-dvw">
      <div className="lg:container lg:mx-auto md:container md:mx-auto h-full p-4 min-w-fit">
        <div className="content w-full h-full bg-stone-50 rounded-md">
          <div className="lg:container lg:mx  h-full">
            <div className="layout w-full h-full flex">
              <div className="navbar-contact min-w-[33.333%] flex">
                <div className="navbar-content w-1/6 min-w-[17%] flex flex-col items-center relative">
                  <div className="nav-1 absolute top-4">
                    <div className="logo flex justify-center">
                      <div className="logo-bg lg:size-16 flex items-center justify-center">
                        <ChatIcon sx={{fontSize:'2.5rem'}}/>
                      </div>
                    </div>
                  </div>
                  <div className="nav-2 absolute bottom-4 flex flex-col gap-4">
                    <div className="profile flex justify-center">
                      <div className="profile-bg rounded-lg border border-slate-500 bg-white lg:size-16 flex items-center justify-center">
                        <AccountCircleIcon sx={{fontSize:'2.5rem'}}/>
                      </div>
                    </div>
                    <div className="logout flex justify-center">
                      <div className="logout-bg rounded-lg border border-slate-500 bg-white lg:size-16 flex items-center justify-center">
                        <LogoutIcon sx={{fontSize:'2.5rem'}}/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="contact border-l border-black w-5/6 flex justify-center">
                  <div className="contact-content w-full flex flex-col items-center">
                    <div className="search-bar basis-1/12 w-full border-b border-black">
                      <div className="searchbar-content bg-white h-full flex items-center">
                        <div className="search-field w-full flex items-center justify-center">
                          <TextField variant='standard' 
                            slotProps={{
                              input:{
                                startAdornment:(
                                  <InputAdornment position='start'>
                                    <SearchIcon/>
                                  </InputAdornment>
                                )
                              }
                            }}
                            sx={{width:'90%'}}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="contact-section basis-11/12 overflow-y-auto w-full">
                      <ContactUser username={usernameDetails}/>
                      <ContactUser username={usernameDetails}/>
                      <ContactUser username={usernameDetails}/>
                      <ContactUser username={usernameDetails}/>
                      <ContactUser username={usernameDetails}/>
                      <ContactUser username={usernameDetails}/>
                      <ContactUser username={usernameDetails}/>
                      <ContactUser username={usernameDetails}/>
                      <ContactUser username={usernameDetails}/>
                      <ContactUser username={usernameDetails}/>
                      <ContactUser username={usernameDetails}/>
                      <ContactUser username={usernameDetails}/>
                      <ContactUser username={usernameDetails}/>
                      <ContactUser username={usernameDetails}/>
                      <ContactUser username={usernameDetails}/>
                      <ContactUser username={usernameDetails}/>
                      <ContactUser username={usernameDetails}/>
                      {/* .contact-person.h-24.flex.items-center.justify-center.px-4*12{Contact $} */}
                      {/* <div className="contact-person h-24 flex items-center px-4">Contact 1</div>
                      <div className="contact-person h-24 flex items-center px-4">Contact 2</div>
                      <div className="contact-person h-24 flex items-center px-4">Contact 3</div>
                      <div className="contact-person h-24 flex items-center px-4">Contact 4</div>
                      <div className="contact-person h-24 flex items-center px-4">Contact 5</div>
                      <div className="contact-person h-24 flex items-center px-4">Contact 6</div>
                      <div className="contact-person h-24 flex items-center px-4">Contact 7</div>
                      <div className="contact-person h-24 flex items-center px-4">Contact 8</div>
                      <div className="contact-person h-24 flex items-center px-4">Contact 9</div>
                      <div className="contact-person h-24 flex items-center px-4">Contact 10</div>
                      <div className="contact-person h-24 flex items-center px-4">Contact 11</div>
                      <div className="contact-person h-24 flex items-center px-4">Contact 12</div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="chat w-2/3">
                <div className="chat-content h-full border-l border-black flex flex-col">
                  <div className="chat-title basis-1/12 border-b border-black">
                    <div className="chat-title-section h-full flex items-center p-4 gap-4">
                      <div className="chat-profile border border-black rounded-full relative">
                        <AccountCircleIcon sx={{fontSize:'2.5rem'}}/>
                        <div className="chat-status absolute rounded-full size-3 bg-green-500 bottom-0 right-0"></div>
                      </div>
                      <div className="chat-user">
                        <div className="chat-user-section text-lg">User1</div>
                      </div>
                    </div>
                  </div>
                  <div className="chat-section basis-10/12 h-5/6 bg-stone-200">
                    <div className="chat-log-content h-full flex">
                      <div className="chat-log-details overflow-y-auto px-6">
                        <DialogboxDate/>
                        <DialogboxSend/>
                        <DialogboxReceive/>
                        {messages.map((message, index) => (
                          <DialogboxSend key={index} input={message}/>
                        ))}
                        <div ref={chatEndRef}/>
                      </div>
                    </div>
                  </div>
                  <div className="chat-input basis-1/12 bg-red-500">
                    <div className="chat-input-content flex bg-white items-center h-full">
                      <div className="input-emoji basis-1/12 flex justify-center">
                        <div className="input-emoji-content">
                          <InsertEmoticonIcon sx={{fontSize:'2.5rem'}}/>
                        </div>
                      </div>
                      <div className="input-text basis-10/12 flex justify-center w-5/6">
                        <div className="input-text-content w-full">
                          <TextField variant='outlined' value={inputData} sx={{width:'100%'}} onChange={handleInputChange} onKeyDown={handleInputData}/>
                        </div>
                      </div>
                      {/* <div className="input-sent basis-1/12 flex justify-center">
                        <div className="input-sent-content">
                          <SendIcon sx={{fontSize:'2.5rem'}}/>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Chat;