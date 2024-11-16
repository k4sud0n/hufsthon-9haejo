function App() {
  return (
    <div className="flex justify-center items-center bg-gray-200 h-screen">
      {/* 모바일 화면 영역 */}
      <div className="w-full max-w-sm h-full bg-white border border-gray-300 flex flex-col">
        {/* 화면 내용 */}
        <div className="flex-grow p-4">
          <h1 className="text-center text-lg font-semibold text-gray-800">
            모바일 화면
          </h1>
          <p className="text-center text-gray-500 mt-2">
            여기에 콘텐츠를 추가하세요.
          </p>
        </div>

        {/* 가입 버튼 */}
        <div className="p-4">
          <button className="w-full bg-blue-500 text-white py-3 rounded-full text-lg font-semibold shadow-md hover:bg-blue-600 transition-all">
            가입하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
