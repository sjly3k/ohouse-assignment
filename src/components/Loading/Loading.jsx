import React from "react";
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

const Image = styled.img`
    width: 20%;
    margin: auto;
    display: block;
    animation-name: fadeOut;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    
    @keyframes fadeOut {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    
`

const Loading = () => {
	return (
		<Container>
			<Image src={"https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/118841893_411920483105800_352106157547146821_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=MBT6lWPHn4EAX9iefRI&tp=1&oh=6b20c27f00f9b38b00d5a0611f4008f2&oe=603AF794"}/>
		</Container>
	)
}

export default Loading;