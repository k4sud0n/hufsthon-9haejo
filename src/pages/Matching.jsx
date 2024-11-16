import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const PageContainer = styled.div`
  min-height: 100vh; /* 화면이 넘칠 경우에도 계속 이어지게 함 */
  overflow-y: auto; /* 세로 스크롤을 가능하게 함 */
`;

const Imgdiv = styled.div`
    background: url("../img/samsung.jpg");
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

function Matching() {

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

        <Imgdiv></Imgdiv>



    </PageContainer>
    </>
  );
}

export default Matching;

