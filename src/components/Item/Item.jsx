import React from 'react';
import styled from "styled-components";
import scrapedIcon from "../../images/scrapedIcon.svg"
import unscrapedIcon from "../../images/unScrapedIcon.svg"

const ItemWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex : 0 0 25%;
	@media (max-width: 768px) {
		flex: 0 0 50%;
	}
	
	padding : 0 10px 30px 10px;
`

const ItemUserInfoWrapper = styled.div`
	display: flex;
	align-items: center;
`

const ItemUserNickName = styled.p`
	font-weight: bold;
`

const ItemUserProfileImgWrapper = styled.div`
	margin-right: 10px;
`

const ItemUserProfileImg = styled.img`
	width: 36px;
	height: 36px;
`

const ItemImageWrapper = styled.div`
	position: relative;
`
const ItemImage = styled.img`
	border-radius: 5%;
	width: 100%;
`

const ScrapIconWrapper = styled.div`
	position : absolute;
	cursor : pointer;
	z-index: 99999999;
	right: 10px;
	bottom: 10px;
	
`

const ScrapButtonImg = styled.img`
	width: 32px;
	height: 32px;
`


const Item = ({ data, onClickScrappedIcon, isScrapped }) => {
	const { id, image_url, nickname, profile_image_url, description } = data;

	return (
		<ItemWrapper key={id}>
			<ItemUserInfoWrapper>
				<ItemUserProfileImgWrapper>
					<ItemUserProfileImg src={profile_image_url} alt={description}/>
				</ItemUserProfileImgWrapper>
				<ItemUserNickName>{nickname}</ItemUserNickName>
			</ItemUserInfoWrapper>
			<ItemImageWrapper className={"item-image-wrapper"} id={id}>
				<ItemImage src={image_url} key={id}/>
				<ScrapIconWrapper onClick={onClickScrappedIcon} className={"scrap-icon-wrapper"} id={id}>
					{
						isScrapped ? <ScrapButtonImg src={scrapedIcon}/> : <ScrapButtonImg src={unscrapedIcon}/>
					}
				</ScrapIconWrapper>
			</ItemImageWrapper>
		</ItemWrapper>
	);
};

export default Item;