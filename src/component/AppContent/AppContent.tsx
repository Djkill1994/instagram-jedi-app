import s from './AppContainer.module.scss';
import React from 'react';
import Post from "./Post/Post";
import {initialState} from "../../features/post/postSlise";



const AppContent: React.FC = () => {


    // const [chosenEmoji, setChosenEmoji] = useState(null);
    //
    // const onEmojiClick = (event: any, emojiObject: any) => {
    //     setChosenEmoji(emojiObject);
    // };
    //
    // const emojiPicker = () => {
    //     return (<div>
    //         {chosenEmoji ? (
    //             <span>You chose: {chosenEmoji}</span>
    //         ) : (
    //             <span>No emoji Chosen</span>
    //         )}
    //         <Picker onEmojiClick={onEmojiClick}/>
    //     </div>)
    // }


    return (
        <div className={s.wrapperContain}>
            {initialState.data.map(p => <Post key={p.id} userName={p.userName}
                                              userAvatar={p.userAvatar} content={p.content.images}
                                              views={p.views} description={p.description}
                                              datePublication={p.datePublication}/>)}
        </div>
    );
};

export default AppContent;

