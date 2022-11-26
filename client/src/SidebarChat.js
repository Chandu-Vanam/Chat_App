import React from 'react'
import {Avatar} from '@material-ui/core';
import './SidebarChat.css'

function SidebarChat() {
    return (
        <>
        <div className="sidebarChat">
          <Avatar src="https://tse4.mm.bing.net/th?id=OIP.oy4jEBtF5Coez9ykUQtMvAHaFj&pid=Api&P=0" />

         <div className="sidebarChat__info">
                <h2> Room_1 </h2>
                
                <p> Chat display</p>
            </div>

          
        </div>
        
          <div className="sidebarChat">
          <Avatar src="https://tse2.mm.bing.net/th?id=OIP.a5umJWxenqdLY-LO1gkqQAHaD4&pid=Api&P=0" />

         <div className="sidebarChat__info">
                <h2> Room_2 </h2>
                
                <p> Chat display</p>
            </div>

          
        </div>

        
           <div className="sidebarChat">
          <Avatar src="https://tse1.mm.bing.net/th?id=OIP.OUlMcZJVT6BS07AsdANLswHaFP&pid=Api&P=0" />

         <div className="sidebarChat__info">
                <h2> Room_3 </h2>
                
                <p> Chat display</p>
            </div>

          
        </div>

        <div className="sidebarChat">
          <Avatar src="https://tse1.mm.bing.net/th?id=OIP.8Q7kMugdNXMoYs-ArPeY6wHaFj&pid=Api&P=0" />

         <div className="sidebarChat__info">
                <h2> Room_4 </h2>
                
                <p> Chat display</p>
            </div>

          
        </div>

              <div className="sidebarChat">
          <Avatar src="https://tse4.mm.bing.net/th?id=OIP.pDT2zpv6dlsyeRlPis4ZegHaEV&pid=Api&P=0" />

         <div className="sidebarChat__info">
                <h2> Room_5 </h2>
                
                <p> Chat display</p>
            </div>

          
        </div>
        
        </>
        
    )
}

export default SidebarChat
