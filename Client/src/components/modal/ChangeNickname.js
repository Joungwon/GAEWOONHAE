import "./ChangeNickname.css"
import { useDispatch } from "react-redux";
// import { emojiShopAction } from '../../features/Actions/emojiprocessing'
import { useState } from "react";
import {edituserinfo} from "../../features/Actions/edituserinfo"

function RecommendModal({ setModalOpen, userId }) {

    const [nickname, setName] = useState("");
    // 모달 끄기 
    const closeModal = () => {
        setModalOpen(false);
    };

    const dispatch = useDispatch();
    const changename = async() => {
        console.log('닉네임 변경 시도')
        dispatch(edituserinfo.changeUserNick(nickname,userId));
        // dispatch(authActions.changeNickname(name));
    }
  


    return (
        <div id='Buymodals'>
            <h3 id='codetxt2'>닉네임 변경하기</h3>
            <input id='codeinput' type="text"  value={nickname} onChange={(e) => setName(e.target.value)} ></input>
            <div id='Buymodal'>
                <p id='buybutton' onClick={changename} >확인</p>
                <p id='buybutton' onClick={closeModal}>취소</p>
            </div>
        </div>
    );
}
export default RecommendModal;