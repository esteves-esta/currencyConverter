import styled from 'styled-components/native';
import colors from '../../data/colors';

export const CustomButton = styled.TouchableHighlight`
    display: flex;
    flex-grow: 1;
    padding: 20px 16px;
    background-color: ${colors.white};
`;

export const Row = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const CustomText = styled.Text`
    font-size: 16px;
    color: ${colors.black}; 
    font-weight: 600;
    letter-spacing: 3px;
`;

export const SmallText = styled.Text`
    font-size: 10px;
    text-transform: uppercase;
    color: ${colors.black}; 
    font-weight: 700;
    letter-spacing: 0.5px;
    padding-left: 10px;
`;
