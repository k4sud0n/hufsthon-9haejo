import { useNavigate } from "react-router-dom";

import mainPageImage from "../src/image.png";
import mainBackgroundImage from "../src/background.jpg";

function MainPage() {
  const navigate = useNavigate();

  const handleGoSignup = () => {
    navigate("/signup");
  };

  return (
    <>
      {/* 화면 내용 */}
      <div className="flex flex-col justify-center items-center flex-grow mt-36">
        {/* 이미지 추가 */}
        <div className="relative flex justify-center items-center flex-grow">
          {/* 첫 번째 이미지: 배경 이미지 */}
          <img src={mainBackgroundImage} alt="로고 이미지" className="mb-4" />

          {/* 두 번째 이미지: 겹쳐서 아래로 배치 */}
          <img
            src={mainPageImage}
            alt="로고 이미지"
            className="w-56 h-56 mb-5 absolute"
            style={{
              top: "30px", // 두 번째 이미지를 첫 번째 이미지 아래로 조금 이동
            }}
          />
        </div>

        <h1 className="text-center text-3xl font-extrabold mb-2">청춘</h1>
        <p className="text-center mb-4">시니어를 위한 노년 데이팅 어플</p>
      </div>

      {/* 가입 버튼 */}
      <div className="p-4 space-y-4 mt-40">
        <button
          onClick={handleGoSignup}
          className="w-full bg-blue-500 text-white py-3 rounded-full text-lg font-semibold shadow-md hover:bg-blue-600 transition-all"
        >
          시작하기
        </button>

        {/* 로그인 버튼 */}
        <div className="text-center text-gray-500 text-sm mt-2">
          이미 계정이 있나요?
          <span className="text-blue-500 ml-1 cursor-pointer">로그인</span>
        </div>
      </div>
    </>
  );
}

export default MainPage;
