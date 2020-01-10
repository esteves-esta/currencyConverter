import colors from '../../data/colors';
import styled from 'styled-components/native';

export const Container = styled.View`
    width: 90%;
    display: flex;
    flex-direction: row;
    margin-top: 25px;
`;

export const Input = styled.TextInput`
    background-color: #FFF;
    opacity: ${props => props.disabled ? 0.7 : 1};
    height: 48px;
    padding: 0px 8px;
    color: ${props => props.color};
    font-size: 18px;
    display: flex;
    flex: 1;
`;

export const Button = styled.TouchableHighlight`
    background-color: #FFF;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 4;
    border-bottom-left-radius: 4;
`;

export const Text = styled.Text`
    font-weight:700;
    font-size: 20px;
    padding: 0px 16px;
    color: ${props => props.color};
`;

export const Border = styled.View`
    background-color: ${props => props.color};
    height:100%;
    width: 3px;
`;
