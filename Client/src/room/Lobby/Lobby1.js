// 픽토그램
import React, { useState } from "react";

import "./Lobby1.css";
import { Container, Row, Col } from "react-bootstrap/";
import { useSelector } from "react-redux/es/hooks/useSelector";

import Chatting from "../../features/chatting/Chatting";
import GameRoomInfoStart from "../../components/GamePage/GameRoomInfoStart";

// 대기방 - 박 터트리기

const Lobby = () => {
  const gameNameList = [
    "터트려요 추억의 박!",
    "따라해요 픽토그램!",
    "피해봐요, 오늘의 X!",
  ];

  const [userList, setUserList] = useState([]);

  // const [loading, setLoading] = useState(true);

  // const hostName = useSelector((state) => state.roomInfo.hostName);
  // const myName = useSelector((state) => state.auth.user.nickname);
  // const sessionId = useSelector((state) => state.roomInfo.sessionId);
  const gameType = useSelector((state) => state.roomInfo.gameType);
  const gameName = gameNameList[gameType - 1];
  //axios요청 => room에 5명있때만 게임 실행

  //   const gamestart = async () => {
  //     try {
  //       const requestData = {
  //         sessionId: "session_id_asd",
  //       };
  //       const response = await axios.post(
  //         "http://localhost:5000/api/room/start",
  //         requestData
  //       );
  //       console.log(response);
  //       // navigate(`/lobby/${value}`)
  //     } catch (error) {
  //       console.error("생성 실패", error);
  //     }
  //   };

  return (
    <div>
      <Container>
        <Row className="title-row">
          <Col className="title-box">
            <h1>{gameName}</h1>
          </Col>
        </Row>
        <Row>
          <Col md={3} className="chat-col">
            <Chatting setUserList={setUserList} />
          </Col>
          <Col md={6} className="video-col">
            <Row>비디오</Row>
            <Row>
              <Col>초대 코드</Col>
              <Col>제한 시간</Col>
            </Row>
          </Col>
          <Col md={3} className="game-col">
            <GameRoomInfoStart userList={userList} />
          </Col>
        </Row>
      </Container>
      <button
        onClick={() => {
          console.log(userList);
        }}
      >
        확인용
      </button>
    </div>
  );
};

export default Lobby;

// import React, {useEffect} from "react";
// import $ from "jquery";
// import SockJS from "sockjs-client";
// import Stomp from "stompjs";
// import "./Chatting.css"
// const Chatting = () => {

// useEffect(()=> {
//     var stompClient = null;
//     var namelist=[];
//     // redux에서 가져오는 hostName
//     var host="두현";
//     var userName="두현";
//     // redux에서 가져오는 sessionId
//     const roomname = 'SessionA';
//     function setConnected(connected) {
//         $("#connect").prop("disabled", connected);
//         $("#disconnect").prop("disabled", !connected);
//         if (connected) {
//             $("#conversation").show();
//         }
//         else {
//             $("#conversation").hide();
//         }
//         $("#messages").html("");
//     }

// function connect() {
//     var socket = new SockJS('/gwh-websocket');
//     stompClient = Stomp.over(socket);
//     var headers = {
//         name: userName,
//         roomNumber: roomname
//     };
//     var roomNumber = roomname;
//     stompClient.connect(headers, function (frame) {  // 서버연결시도
//         setConnected(true);
//         stompClient.subscribe('/topic/chatroom/' + roomNumber + '/messages', function (message) {
//             showMessage(JSON.parse(message.body).content);
//         });

//         // 구독하지 않은 채널은 아예 메시지 전달이 안되므로 모든 클라이언트가 /host 와 /refresh를 구독해야함
//         stompClient.subscribe('/topic/chatroom/' + roomNumber + '/host', function (message) {
//         // 방장이라면 nameList를 갱신하고 /refresh 채널로 보낸다. 여기에 if(방장)
//          if(randomName===host) {namelist.push({ username: JSON.parse(message.body).content, count: 0 });
//           stompClient.send("/app/chatroom/" + roomNumber + "/refresh", {}, JSON.stringify(namelist));
//           console.log(JSON.stringify(namelist, null, 2));
//          }
//         });

//         stompClient.subscribe('/topic/chatroom/' + roomNumber + '/refresh', function (message) {

//           // 방장이 아니라면 갱신해버림
//           if(randomName!==host) { namelist = JSON.parse(message.body);

//           console.log(JSON.stringify(namelist, null, 2)+"이건 갱신된 요청입니다."); }
//           showUserInfo(namelist);
//         });

//         stompClient.send("/app/chatroom/" + roomNumber + "/enter", {}, JSON.stringify({}));
//         stompClient.send("/app/chatroom/" + roomNumber + "/join", {}, JSON.stringify({}));

//       });
// }

// function disconnect() {
//     if (stompClient !== null) {
//         exit();
//         stompClient.disconnect();
//     }
//     setConnected(false);
//     console.log("Disconnected");
// }

// function sendChat() {
//     var roomNumber = roomname; // 채팅방 번호를 가져옵니다.
//     stompClient.send("/app/chatroom/" + roomNumber + "/chat", {}, JSON.stringify({'chat': $("#chat").val()}));
// }

// function exit(){
//     var roomNumber = $("#roomNumber").val(); // 채팅방 번호를 가져옵니다.
//     stompClient.send("/app/chatroom/" + roomNumber + "/exit", {},  JSON.stringify({}));
// }

// function showMessage(message) {
//     $("#messages").append("<tr><td>" + message + "</td></tr>");
// }

// function showUserInfo(namelist) {
//   var resultDiv = document.getElementById('result');
//   resultDiv.innerHTML = '';

//   // namelist 배열을 반복하여 결과를 <div> 태그에 출력
//   namelist.forEach(function(item) {
//       var div = document.createElement('div');
//       div.textContent = '사용자 이름: ' + item.username + ', 카운트: ' + item.count;
//       resultDiv.appendChild(div);
//   });
//   }

// $(function () {
//     $("form").on('submit', function (e) {
//         e.preventDefault();
//     });
//     $( "#connect" ).click(function() { connect(); });
//     $( "#disconnect" ).click(function() { disconnect(); });
//     $( "#send" ).click(function() { sendChat(); });
// });

// connect();
// console.log('asdfsadffdsa')
// },[]);

// return (
//     <div>
//       <div className="rowchat">
//         <div className="conversation">
//           <table className="table table-striped">
//             <thead>
//               <tr>
//                 <th>대화창</th>
//               </tr>
//             </thead>
//             {/* 메세지 */}
//             <tbody id="messages">
//             </tbody>
//           </table>
//         </div>
//       </div>

//   <form className="form-inline">
//     <div className="chat-button" style={{borderRadius:'5px'}}>
//       {/* <label htmlFor="chat">chat 쳐라</label> */}
//         <input type="text" id="chat" className="form-control" placeholder="채팅 입력" />
//         <button id="send" className="btn btn-default" type="submit">Send</button>
//     </div>
//     <div id="result">

//     </div>
//   </form>
// </div>
//   );
// }

// export default Chatting;

// <div className='lobbymain'>
//     <div className='lobbylogo'>로고</div>
//     <div className='lobbyheader'>
//         <div className='title1'>
//             <p>플레이할 게임</p>
//             <h1>점핑 잭으로 박터트리기!</h1>
//         </div>
//         <div className='title1'>
//             <p>초대코드</p>
//             <h1>~~~~~~~~</h1>
//         </div>
//         <div className='title1'>
//             <p>제한 시간</p>
//             <h1>1분 </h1>
//         </div>

//     </div>
//     <div className='lobbybody'>
//         <div className='waiting-list'>
//             참가자
//         </div>
//         <div className='select-type'>
//             <h1>현재 인원수</h1>
//             <h1>이모지 선택</h1>
//             <button onClick={gamestart}>+</button>
//             <Link to='/gamepage/1'><button>게임시작</button></Link>
//             <Link to='/main'><button>방나가기</button></Link>
//         </div>
//     </div>

// </div>
