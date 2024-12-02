import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Drop from "../pages/Drop";

function SignupPage() {
  const navigate = useNavigate();
  const [gender, setGender] = useState("남");
  const [maritalStatus, setMaritalStatus] = useState("미혼");
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleGoBack = () => {
    navigate("/");
  };

  const handleGender = (value) => {
    setGender(value);
  };

  const handleMaritalStatus = (value) => {
    setMaritalStatus(value);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
    }
  };

  const handleGoMatch = () => {
    navigate("/match");
  };

  return (
    <div className="min-h-screen overflow-y-auto p-5">
      <div className="flex items-center mb-8">
        <button onClick={handleGoBack} className="text-blue-500 text-2xl mr-4">
          ←
        </button>
        <h1 className="text-2xl font-bold text-gray-800">시작하기</h1>
      </div>

      <div className="mb-4">
        <p className="text-lg text-gray-800 mb-2">이름</p>
        <input
          className="w-full p-3 text-lg border border-gray-300 rounded-lg"
          placeholder="이름을 적어주세요."
        />
      </div>

      <div className="mb-4">
        <p className="text-lg text-gray-800 mb-3">성별</p>
        <div className="flex gap-4">
          <button
            className={`${
              gender === "남"
                ? "bg-blue-500 text-white"
                : "border-blue-500 text-blue-500"
            } py-2 px-6 rounded-full border hover:bg-blue-500 hover:text-white`}
            onClick={() => handleGender("남")}
          >
            남
          </button>
          <button
            className={`${
              gender === "여"
                ? "bg-blue-500 text-white"
                : "border-blue-500 text-blue-500"
            } py-2 px-6 rounded-full border hover:bg-blue-500 hover:text-white`}
            onClick={() => handleGender("여")}
          >
            여
          </button>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-lg text-gray-800 mb-2">출생연도</p>
        <div className="mt-4">
          <Drop />
        </div>
      </div>

      <div className="">
        <p className="text-lg text-gray-800 mb-2">거주지</p>
        <input
          className="w-full p-3 text-lg border border-gray-300 rounded-lg mb-5"
          placeholder="거주지를 입력해주세요."
        />
      </div>

      <div className="">
        <p className="text-lg text-gray-800 mb-2">취미</p>
        <input
          className="w-full p-3 text-lg border border-gray-300 rounded-lg mb-5"
          placeholder="취미를 입력해주세요."
        />
      </div>

      <div className="mb-8">
        <p className="text-lg text-gray-800 mb-2">결혼 상태</p>
        <div className="flex gap-4">
          <button
            className={`${
              maritalStatus === "미혼"
                ? "bg-blue-500 text-white"
                : "border-blue-500 text-blue-500"
            } py-2 px-6 rounded-full border hover:bg-blue-500 hover:text-white`}
            onClick={() => handleMaritalStatus("미혼")}
          >
            미혼
          </button>
          <button
            className={`${
              maritalStatus === "돌싱"
                ? "bg-blue-500 text-white"
                : "border-blue-500 text-blue-500"
            } py-2 px-6 rounded-full border hover:bg-blue-500 hover:text-white`}
            onClick={() => handleMaritalStatus("돌싱")}
          >
            돌싱
          </button>
          <button
            className={`${
              maritalStatus === "기타"
                ? "bg-blue-500 text-white"
                : "border-blue-500 text-blue-500"
            } py-2 px-6 rounded-full border hover:bg-blue-500 hover:text-white`}
            onClick={() => handleMaritalStatus("기타")}
          >
            기타
          </button>
        </div>
      </div>

      <div className="mb-8">
        <p className="text-lg text-gray-800 mb-2">사진 올리기</p>
        <input
          type="file"
          onChange={handleFileChange}
          className="w-full p-3 border border-gray-300 rounded-lg mb-5"
        />
        {previewUrl && (
          <img
            src={previewUrl}
            alt="미리보기"
            className="w-72 mt-5 rounded-lg"
          />
        )}

        <button
          onClick={handleGoMatch}
          className="w-full bg-blue-500 text-white mt-10 -mb-5 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-blue-600 transition-all"
        >
          시작하기
        </button>
      </div>
    </div>
  );
}

export default SignupPage;
