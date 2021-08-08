import styled from 'styled-components';

export const MovieContainer = styled.div`
    display: flex;
    width: calculate(33% - 10px);
    flex-direction: column;
    margin: 10px;
    background-color: #fff;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12),
      0px 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
`;

export const PosterMovie = styled.img`
  max-width: 100%;
  max-height: 100%;
  display: block; /* remove extra space below image */
  object-fit: cover;
`;

export const PosterTitle = styled.p`
 font-size: 25px;
 font-family: 'Times New Roman', Times, serif;
`
export const PosterYear = styled.p`
font-size: 25px;
font-family: 'Times New Roman', Times, serif;
`
export const PosterType = styled.p`
font-size: 25px;
font-family: 'Times New Roman', Times, serif;
`