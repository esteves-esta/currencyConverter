import styled from 'styled-components/native';
import colors from '../../data/colors';

export const CustomButton = styled.TouchableHighlight`
    display: flex;
    flex-grow: 1;
`;

export const Row = styled.View`
  padding: 20px 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${colors.white};
`;

export const CustomText = styled.Text`
    font-size: 16px;
    color: ${colors.dark}; 
    font-weight: 600;
    letter-spacing: 3px;
`;

