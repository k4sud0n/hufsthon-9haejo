import { useNavigate } from "react-router-dom";

function SignupPage() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <>
      <div className="flex items-center">
        {/* <- 좌측 화살표 버튼 */}
        <button onClick={handleGoBack} className="text-xl text-blue-500">
          ←
        </button>
        <div className="ml-2">먼저,</div>
      </div>
      <div>어쩌고저쩌고</div>
    </>
  );
}

export default SignupPage;
