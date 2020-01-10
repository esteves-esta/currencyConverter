import styled, { css } from 'styled-components/native';
import colors from '../../data/colors';

export const Container = styled.SafeAreaView`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.background};
`;

export const Title = styled.Text`
    /* font-size: 25px; */
    color: ${colors.white}; 
    font-weight: 700;
`;
