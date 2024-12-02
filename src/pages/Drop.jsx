import styled from "styled-components";
import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const DropContainer = styled.ul`
  list-style: none;
  cursor: pointer;
  padding: 10px;
  border-radius: 4px;
  border: 1.811px solid #D9D9D9;
  display: inline-block;
  position: relative;
`;

const DropContent = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border: 1px solid #ddd;
  width: 100%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
  padding: 5px 0;
  color: #737373;
  font-family: Inter;
  font-size: 14.782px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  max-height: 300px; /* 최대 높이를 설정 */
  overflow-y: auto;  /* 내용이 넘칠 경우 스크롤을 추가 */
`;

const DropDownItem = styled.li`
  padding: 8px 12px;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const IconWrapper = styled.span`
  margin-left: 5px; /* 텍스트와 아이콘 사이 간격 조정 */
  display: inline-flex;
  align-items: center;
`;

export default function DropDown() {
  const [view, setView] = useState(false);
  const [major, setYear] = useState("1965");

  const BoxContent = () => (
    <>
      <DropDownItem onClick={() => handleItemClick("1965")}>1965</DropDownItem>
      <DropDownItem onClick={() => handleItemClick("1964")}>1964</DropDownItem>
      <DropDownItem onClick={() => handleItemClick("1963")}>1963</DropDownItem>
      <DropDownItem onClick={() => handleItemClick("1962")}>1962</DropDownItem>
      <DropDownItem onClick={() => handleItemClick("1961")}>1961</DropDownItem>
      <DropDownItem onClick={() => handleItemClick("1960")}>1960</DropDownItem>
      <DropDownItem onClick={() => handleItemClick("1959")}>1959</DropDownItem>
      <DropDownItem onClick={() => handleItemClick("1958")}>1958</DropDownItem>
      <DropDownItem onClick={() => handleItemClick("1957")}>1957</DropDownItem>
      <DropDownItem onClick={() => handleItemClick("1956")}>1956</DropDownItem>
      <DropDownItem onClick={() => handleItemClick("1955")}>1955</DropDownItem>
      <DropDownItem onClick={() => handleItemClick("1954")}>1954</DropDownItem>
      <DropDownItem onClick={() => handleItemClick("1953")}>1953</DropDownItem>
      <DropDownItem onClick={() => handleItemClick("1952")}>1952</DropDownItem>
      <DropDownItem onClick={() => handleItemClick("1951")}>1951</DropDownItem>
      <DropDownItem onClick={() => handleItemClick("1950")}>1950</DropDownItem>
      <DropDownItem onClick={() => handleItemClick("1949")}>1949</DropDownItem>
      <DropDownItem onClick={() => handleItemClick("1948")}>1948</DropDownItem>
      <DropDownItem onClick={() => handleItemClick("1947")}>1947</DropDownItem>
      <DropDownItem onClick={() => handleItemClick("1946")}>1946</DropDownItem>
      <DropDownItem onClick={() => handleItemClick("1945")}>1945</DropDownItem>
    </>
  );

  const handleItemClick = (item) => {
    setMajor(item);
    setYear(false);
  };

  return (
    <DropContainer onClick={() => setView(!view)}>
      {major} 
      <IconWrapper>{view ? <FaChevronUp /> : <FaChevronDown />}</IconWrapper>
      {view && (
        <DropContent>
          <BoxContent />
        </DropContent>
      )}
    </DropContainer>
  );
}