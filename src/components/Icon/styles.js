import styled from 'styled-components/native';
import colors from '../../data/colors';

export const Container = styled.View`
    height: 30px;
    width: 30px;
    background-color: 
    ${props => props.visible ?
        (props.iconBackground ? props.iconBackground : colors.blue)
        : 'transparent'};
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
`;


export const IconImage = styled.Image`
height: 12px;
`;
