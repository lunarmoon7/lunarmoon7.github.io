import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

// const PROFILE_IMAGE_LINK = 
// 'https://i.ibb.co/f4HNC2H/profile.jpg'

const ProfileImageWrapper = styled(GatsbyImage)`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;

  @media (max-width:768px) {
    width: 80px;
    height: 80px;
  }
`

type ProfileImageProps = {
  profileImage: IGatsbyImageData
}

function ProfileImage ({profileImage} : ProfileImageProps) {
  return <ProfileImageWrapper image={profileImage} alt="Profile Image" />
}

export default ProfileImage