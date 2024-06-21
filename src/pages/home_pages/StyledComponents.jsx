import styled from 'styled-components'

export const StyledHeroImage = styled.div`
  position: relative;
  width: 100vw; /* Half the width of the viewport */
  height: 80vh; /* 50vh for the square + 25vh for the half-circle */
  border-bottom-left-radius: 50% 25%;
  border-bottom-right-radius: 50% 25%;
  overflow: hidden;
  background: url(${(props) => props.$src && props.$src}) no-repeat center 15% /
    cover;
  filter: brightness(80%);
`
