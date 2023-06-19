// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  background: linear-gradient(to bottom, #161617, #3c2940);
  text-align: center;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Image = styled.img`
  width: 150px;
  display: inline-block;
`

export const Para = styled.p`
  color: white;
  font-family: 'Roboto';
`
export const CustomButton = styled.button`
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  border-style: none;
  outline: none;
  margin-top:100px;
  width:200px;
  display:block;
  background-color #06b6d4;
  cursor: pointer;
`
