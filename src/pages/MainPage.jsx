import mainPageImage from "../src/image.png";

function MainPage() {
  return (
    <div className="flex justify-center items-center bg-cover bg-center h-screen">
      {/* 모바일 화면 영역 */}
      <div className="w-full max-w-sm h-full bg-white bg-opacity-70 border border-gray-300 rounded-lg shadow-lg flex flex-col p-6">
        {/* 화면 내용 */}
        <div className="flex-grow flex flex-col justify-center items-center">
          {/* 이미지 추가 */}
          <img
            src={mainPageImage}
            alt="로고 이미지"
            className="w-56 h-56 mb-4"
          />

          <h1 className="text-center text-3xl font-extrabold mb-2">청춘</h1>
          <p className="text-center mb-4">시니어를 위한 노년 데이팅 어플</p>
        </div>

        {/* 가입 버튼 */}
        <div className="p-4 mt-6 space-y-4">
          <button className="w-full bg-blue-500 text-white py-3 rounded-full text-lg font-semibold shadow-md hover:bg-blue-600 transition-all">
            시작하기
          </button>
          <div className="text-center text-gray-500 text-sm mt-2">
            이미 계정이 있나요?
            <span className="text-blue-500 ml-1 cursor-pointer">로그인</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
