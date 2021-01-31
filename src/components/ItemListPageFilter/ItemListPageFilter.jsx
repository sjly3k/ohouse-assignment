import React from 'react';
import checkedIcon from "../../images/checkedIcon.svg"
import uncheckedIcon from "../../images/uncheckedIcon.svg"
import styled from "styled-components"

const ItemListPageFilterWrapper = styled.div`
	display: flex;
	
`

const CheckIconWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 10px;
`
const CheckIcon = styled.img`

`

const ItemListPageFilterText = styled.p`

`

const ItemListPageFilter = ({
	isToggled,
    onClickCheckIcon
}) => {
	return (
		<ItemListPageFilterWrapper>
			<CheckIconWrapper onClick={onClickCheckIcon}>
			{
				isToggled ? <CheckIcon src={checkedIcon}/> : <CheckIcon src={uncheckedIcon}/>
			}
			</CheckIconWrapper>
			<ItemListPageFilterText>스크랩한 것만 보기</ItemListPageFilterText>
		</ItemListPageFilterWrapper>
	);
};

export default ItemListPageFilter;