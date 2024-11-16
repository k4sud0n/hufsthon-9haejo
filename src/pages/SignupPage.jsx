import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Drop from "../pages/Drop";

const PageContainer = styled.div`
  min-height: 100vh; /* 화면이 넘칠 경우에도 계속 이어지게 함 */
  overflow-y: auto; /* 세로 스크롤을 가능하게 함 */
`;

const InfoTextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 40px;
`;

const InfoText = styled.p`
  color: #000000;
  font-family: Inter;
  font-size: 37px;
  font-weight: bold;
  text-align: center;
`;

const NameContainer = styled.div`
  width: 100%;
  align-items: center; 
  display: flex;
  flex-direction: row;
  margin-top: -20px;
  margin-left: 10px;
  gap: 20px;
`;

const NameText = styled.h4`
  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 10px;
`;

const NameInput = styled.input`
  width: 50%;
  padding: 8px;
  border-radius: 4px;
  border: 1.811px solid #d9d9d9;
  margin-bottom: 15px;
`;

const SeContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: -20px;
  margin-left: 10px;
  gap: 20px;
`;

const GenderButton = styled.div`
  width: 60px;
  height: 40px;
  border-radius: 16px;
  border: 1.811px solid ${(props) => (props.isActive ? "#5D96E8" : "#D9D9D9")};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  color: ${(props) => (props.isActive ? "#5D96E8" : "#A09F9F")};
  cursor: pointer;

  &:hover {
    border-color: #5d96e8;
    color: #5d96e8;
  }
`;

const SeText = styled.p`
  color: #000000;
  font-family: Inter;
  font-size: 20px;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const AgeContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: -40px;
  margin-left: 10px;
  gap: 20px;
`;

const AgeText = styled.p`
  color: #000000;
  font-family: Inter;
  font-size: 20px;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const AdressInput = styled.input`
  width: 55%;
  padding: 8px;
  border-radius: 4px;
  border: 1.811px solid #d9d9d9;
  margin-bottom: 15px;
`;

const AdressContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: -30px;
  margin-left: 10px;
  gap: 20px;
`;

const AdressText = styled.p`
  color: #000000;
  font-family: Inter;
  font-size: 20px;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const HobbyInput = styled.input`
  width: 55%;
  padding: 8px;
  border-radius: 4px;
  border: 1.811px solid #d9d9d9;
  margin-bottom: 15px;
`;

const HobbyContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: -40px;
  margin-left: 10px;
  gap: 35px;
`;

const HobbyText = styled.p`
  color: #000000;
  font-family: Inter;
  font-size: 20px;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const MarryContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: -40px;
  margin-left: 10px;
  gap: 20px;
  justify-content: flex-start;  /* 버튼들이 좌측 정렬되도록 설정 */
`;

const MarryButton = styled.div`
  height: 40px;
  padding: 0 20px; /* 버튼 안쪽 여백을 추가하여 텍스트가 잘리지 않도록 함 */
  border-radius: 16px;
  border: 1.811px solid ${(props) => (props.isActive ? "#5D96E8" : "#D9D9D9")};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.isActive ? "#5D96E8" : "#A09F9F")};
  cursor: pointer;

  &:hover {
    border-color: #5d96e8;
    color: #5d96e8;
  }
`;


const MarryText = styled.p`
  color: #000000;
  font-family: Inter;
  font-size: 20px;
  margin-top: 40px;
  margin-bottom: 40px;
  white-space: nowrap; /* 텍스트가 한 줄로 나오도록 설정 */
`;

function SignupPage() {
  const navigate = useNavigate();
  const [gender, setGender] = useState("남");
  const [maritalStatus, setMaritalStatus] = useState("미혼"); // maritalStatus 상태 추가
  const [file, setFile] = useState(null); // 선택된 파일 상태
  const [previewUrl, setPreviewUrl] = useState(null); // 이미지 미리보기 URL 상태

  const handleGoBack = () => {
    navigate("/");
  };

  const handleGender = (value) => {
    setGender(value);
  };

  const handleMaritalStatus = (value) => { // 결혼 상태 처리 함수 추가
    setMaritalStatus(value);
  };

  // 파일 변경 시 호출되는 함수
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile)); // 파일을 URL로 변환하여 미리보기 설정
    }
  };

  return (
    <>
    <PageContainer>
        <div className="flex items-center">
          {/* <- 좌측 화살표 버튼 */}
          <button onClick={handleGoBack} className="text-xl text-blue-500">
            ←
          </button>
          <div className="ml-2">먼저,</div>
        </div>
        <div>회원가입페이지</div>

      
        <InfoTextContainer>
          <InfoText>정보입력</InfoText>
        </InfoTextContainer>

        <NameContainer>
          <NameText>이름</NameText>
          <NameInput placeholder="이름을 입력해주세요." />
        </NameContainer>

        <SeContainer>
          <SeText>성별</SeText>
          <GenderButton isActive={gender === "남"} onClick={() => handleGender("남")}>
            남
          </GenderButton>
          <GenderButton isActive={gender === "여"} onClick={() => handleGender("여")}>
            여
          </GenderButton>
        </SeContainer>

        <AgeContainer>
          <AgeText>출생연도</AgeText>
          <Drop />
        </AgeContainer>

        <AdressContainer>
          <AdressText>거주지</AdressText>
          <AdressInput placeholder="거주지를 입력해주세요." />
        </AdressContainer>

        <HobbyContainer>
          <HobbyText>취미</HobbyText>
          <HobbyInput placeholder="취미를 입력해주세요." />
        </HobbyContainer>

        <MarryContainer>
          <MarryText>결혼</MarryText>
          <MarryButton isActive={maritalStatus === "미혼"} onClick={() => handleMaritalStatus("미혼")}>
            미혼
          </MarryButton>
          <MarryButton isActive={maritalStatus === "돌싱"} onClick={() => handleMaritalStatus("돌싱")}>
            돌싱
          </MarryButton>
          <MarryButton isActive={maritalStatus === "기타"} onClick={() => handleMaritalStatus("기타")}>
            기타
          </MarryButton>
        </MarryContainer>

        {/* 이미지 업로드 섹션 */}
        <div>
          <h2>사진 올리기</h2>
          <input type="file" onChange={handleFileChange} />
          {previewUrl && <img src={previewUrl} alt="미리보기" style={{ width: '300px', marginTop: '20px' }} />}
        </div>
      </PageContainer>
    </>
  );
}

export default SignupPage;

