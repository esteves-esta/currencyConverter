import styled from 'styled-components/native';

export const CustomButton = styled.TouchableHighlight`
    display: flex;
    flex-grow: 1;
`;

export const Row = styled.View`
  padding: 20px 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #fff;
`;

export const CustomText = styled.Text`
    font-size: 16px;
    color: #343434; 
    font-weight: 600;
    letter-spacing: 5px;
`;

export const Separartor = styled.View`
  margin-left: 20px;
  background-color: "#efefef";
  height: 5px;
`;