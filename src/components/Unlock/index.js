// Write your code here
import {useState} from 'react'
import {MainContainer, CustomButton, Para, Image} from './styledComponents'

const lock = 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
const unlock = 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'

const Unlock = () => {
  const [isLocked, setIsLocked] = useState(true)
  const onClickButton = () => {
    setIsLocked(prevIsLocked => !prevIsLocked)
  }
  return (
    <MainContainer>
      <Image
        src={isLocked ? lock : unlock}
        alt={isLocked ? 'lock' : 'unlock'}
      />
      {isLocked ? (
        <Para>Your Device is Locked</Para>
      ) : (
        <Para>Your Device is Unlocked</Para>
      )}

      <CustomButton type="button" onClick={onClickButton}>
        {isLocked ? 'Unlock' : 'Lock'}
      </CustomButton>
    </MainContainer>
  )
}

export default Unlock
