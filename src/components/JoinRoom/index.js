import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import './index.css'

const JoinRoom = () => {
  
    const [state, setState] = useState({ roomId: '', nickname: '' })

    const handleInput = e => {
        const eventName = e.target.name;

        if (eventName === 'roomId') {
            const id = e.target.value;
            setState({ ...state, roomId: id});
        } 
        if (eventName === 'nickname') {
            const nickName = e.target.value;
            setState({ ...state, nickname: nickName });
        }
        
    };

    const handleSubmit = e => {
        e.preventDefault();
        let id = state.roomId
        let nickName = state.nickname
        console.log(state)
        // return the room with the id entered
        // return (
        //     <Redirect
        //       to={{
        //         pathname: '/quiz',
        //         search: `?=${id}`,
        //         state: { referrer: '/' }
        //       }}
        //     />
        //   );
    }
    
        return (
        <div>
            <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="roomId"><h3>Enter Room ID</h3></label>
                <input
                    placeholder="Room ID"
                    aria-label="roomId"
                    name="roomId"
                    onChange={handleInput}
                    type="text"
                />
                <br />
                <label htmlFor="nickname"><h3>Enter Nickname</h3></label>
                <input
                    placeholder="Nickname"
                    aria-label="nickname"
                    name="nickname"
                    onChange={handleInput}
                    type="text"
                />
                <br />
                <button type="submit">
                    Join
                </button>
            </form>
            <br /><br /><br />
            </div>
        </div>
        );
}

export default JoinRoom
