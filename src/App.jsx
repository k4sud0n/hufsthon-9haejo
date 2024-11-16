import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <div className="flex justify-center items-center bg-cover bg-center h-screen bg-gray-100">
      {/* 모바일 화면 영역 */}
      <div className="w-full max-w-sm h-full bg-white bg-opacity-70 border border-gray-300 rounded-lg shadow-lg flex flex-col p-6">
        <SignupPage />
      </div>
    </div>
  );
}

export default App;
