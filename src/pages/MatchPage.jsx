import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";

// 사용자 데이터 예시
const users = [
  { name: "홍길동", age: 65, imgSrc: "https://picsum.photos/200/300" }, // placeholder 이미지
  { name: "김영희", age: 62, imgSrc: "https://picsum.photos/200/200" },
  { name: "박철수", age: 70, imgSrc: "https://picsum.photos/200/400" },
  { name: "이소영", age: 67, imgSrc: "https://picsum.photos/200/500" },
];

function MatchPage() {
  const [currentUsers, setCurrentUsers] = useState(users); // 현재 보여주는 사용자 목록
  const [likedUsers, setLikedUsers] = useState([]); // 좋아요한 사용자
  const [dislikedUsers, setDislikedUsers] = useState([]); // 싫어요한 사용자
  const [currentUser, setCurrentUser] = useState(users[0]); // 현재 사용자
  const [isOverlayVisible, setIsOverlayVisible] = useState(false); // 오버레이 보이기/숨기기 상태
  const navigate = useNavigate(); // 페이지 이동을 위한 navigate 함수

  // 좋아요 버튼 클릭
  const handleLike = (e) => {
    e.stopPropagation(); // 이벤트 전파 중단
    setLikedUsers((prevLikedUsers) => [...prevLikedUsers, currentUser]);
    setIsOverlayVisible(false);
    moveToNextUser();
    navigate("/message"); // MessagePage로 이동
  };

  // 싫어요 버튼 클릭
  const handleDislike = (e) => {
    e.stopPropagation(); // 이벤트 전파 중단
    setDislikedUsers((prevDislikedUsers) => [
      ...prevDislikedUsers,
      currentUser,
    ]);
    setIsOverlayVisible(false);
    moveToNextUser();
  };

  // 다음 사용자로 넘어가기
  const moveToNextUser = () => {
    const nextUser = currentUsers[1];
    if (nextUser) {
      setCurrentUser(nextUser); // 현재 사용자 업데이트
      setCurrentUsers((prevUsers) => prevUsers.slice(1)); // 사용자 목록에서 첫 번째 사용자 제거
    } else {
      // 모든 사용자 처리 후
      alert("더 이상 남은 사용자가 없습니다.");
    }
  };

  // 이미지 클릭 시 오버레이 표시
  const handleImageClick = () => {
    setIsOverlayVisible(true); // 오버레이 표시
  };

  return (
    <>
      <div className="relative h-screen flex flex-col pb-16">
        {/* 회사 이름 좌상단 */}
        <div className="flex justify-between text-3xl font-bold p-4">
          <h3>청춘</h3>
          {/* 유저 수정 버튼 우상단 */}
          <div
            onClick={() => navigate("/user/edit")} // 클릭 시 유저 수정 페이지로 이동
            className="cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </div>
        </div>

        {/* 사용자 카드 */}
        {currentUser && (
          <div
            className="relative h-full bg-cover bg-center cursor-pointer"
            style={{ backgroundImage: `url(${currentUser.imgSrc})` }}
            onClick={handleImageClick} // 이미지 클릭 시 오버레이 표시
          >
            {/* 배경 이미지 위에 이름과 나이 표시 */}
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
              <h2 className="text-3xl font-bold">{currentUser.name}</h2>
              <p className="text-lg">{currentUser.age}살</p>
            </div>

            {/* 오버레이 버튼 */}
            {isOverlayVisible && (
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={handleLike}
                  className="px-6 py-2 bg-green-500 text-white rounded-full mr-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
                    />
                  </svg>
                </button>
                <button
                  onClick={handleDislike}
                  className="px-6 py-2 bg-red-500 text-white rounded-full ml-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
      <Navbar />
    </>
  );
}

export default MatchPage;
