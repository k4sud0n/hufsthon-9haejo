import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { FaPhone } from "react-icons/fa";

// 스타일 정의
const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f4f6f9;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #5d96e8;
  color: white;
  font-size: 24px;
  font-weight: bold;
  position: relative; // PhoneNumberBox를 아이콘 아래에 배치하기 위해 relative로 설정
`;

const Title = styled.div`
  flex-grow: 1;
  text-align: center;
`;

const Icon = styled(FaPhone)`
  margin-left: 10px;
  font-size: 24px;
  cursor: pointer;
`;

const MessageList = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  background-color: white;
  border-bottom: 2px solid #ddd;
  display: flex;
  flex-direction: column;
`;

const Message = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  background-color: ${(props) => (props.isSender ? "#5D96E8" : "#ccc")};
  color: white;
  border-radius: 10px;
  max-width: 60%;
  align-self: ${(props) => (props.isSender ? "flex-end" : "flex-start")};

  position: relative;

  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    ${(props) =>
      props.isSender
        ? "border-top: 10px solid #5D96E8;"
        : "border-top: 10px solid #ccc;"}
    ${(props) =>
      props.isSender ? "top: 100%; right: 10px;" : "top: 100%; left: 10px;"}
  }
`;

const InputContainer = styled.div`
  display: flex;
  padding: 10px;
  background-color: white;
  border-top: 2px solid #ddd;
  padding-bottom: 75px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #ccc;
  margin-right: 10px;
  max-width: 400px;
  width: 100%;
`;

const SendButton = styled.button`
  background-color: #5d96e8;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background-color: #4b7bca;
  }
`;

const PhoneNumberBox = styled.div`
  position: absolute;
  top: 50px; // 전화 아이콘 바로 아래로 설정 (아이콘 크기에 맞춰 조정)
  right: 20px;
  background-color: #f0f0f0; // 배경 색상 설정
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: auto;
  max-width: 250px; // 최대 너비 설정
  font-size: 14px; // 글씨 크기 설정
  display: ${(props) => (props.show ? "block" : "none")};
`;

const PhoneNumber = styled.div`
  color: #5d96e8; // 전화번호 텍스트 색상 설정
  font-weight: bold;
`;

function MessagePage() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [predefinedReplies, setPredefinedReplies] = useState({
    안녕하세요: "안녕하세요!ㅎㅎ",
    "오늘 뭐하셨어요?": "등산갔다 왔어요.",
    "어느 산 가셨어요? 저도 등산 좋아하는데":
      "북한산 다녀왔는데 다음에 같이 가실래요?",
    "좋아요!": "언제 시간 괜찮으세요?",
  });

  const [showPhoneNumber, setShowPhoneNumber] = useState(false); // 전화번호 표시 여부 상태

  const messageEndRef = useRef(null);

  const sendMessage = () => {
    if (newMessage.trim()) {
      const userMessage = { text: newMessage, sender: "user" };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setNewMessage("");

      setTimeout(() => {
        let replyMessageText = "답장이 없습니다.";

        if (predefinedReplies[newMessage]) {
          replyMessageText = predefinedReplies[newMessage];
        } else {
          replyMessageText = `답장: ${newMessage}`;
        }

        const replyMessage = { text: replyMessageText, sender: "system" };
        setMessages((prevMessages) => [...prevMessages, replyMessage]);
      }, 800);
    }
  };

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handlePhoneClick = () => {
    setShowPhoneNumber(!showPhoneNumber); // 전화 아이콘 클릭 시 전화번호 박스 보이거나 숨기기
  };

  return (
    <ChatContainer>
      <Header>
        <Title>메시지</Title>
        <Icon onClick={handlePhoneClick} />
        {/* 전화번호 박스 */}
        <PhoneNumberBox show={showPhoneNumber}>
          <PhoneNumber>010-1234-5678</PhoneNumber>
        </PhoneNumberBox>
      </Header>
      <MessageList>
        {messages.map((msg, index) => (
          <Message key={index} isSender={msg.sender === "user"}>
            {msg.text}
          </Message>
        ))}
        <div ref={messageEndRef} />
      </MessageList>
      <InputContainer>
        <Input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="메시지를 입력하세요..."
        />
        <SendButton onClick={sendMessage}>보내기</SendButton>
      </InputContainer>
    </ChatContainer>
  );
}

export default MessagePage;
