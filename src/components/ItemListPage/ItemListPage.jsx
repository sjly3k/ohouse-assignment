import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import ItemListPageFilter from "../ItemListPageFilter/ItemListPageFilter";
import {api} from "../../utils/api";
import Item from "../Item/Item";
import {getScrapCards, addScrapCard, removeScrapCard} from "../utils/localStorage";
import Loading from "../Loading/Loading";
import {toast} from "react-toastify";

const ItemListPageWrapper = styled.div`
	max-width: 100%;
	margin: 0 auto;
	
	@media (min-width: 1256px) {
		width: 1136px;
	}
`

const ItemListWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
`

const ItemListPage = () => {

	const [isToggled, setIsToggled] = useState(false);
	const [loading, setLoading] = useState(false)
	const [currentPage, setCurrentPage] = useState(1);
	const [data, setData] = useState([])
	const [scrappedCard, setScrappedCard] = useState(getScrapCards("SCRAP_CARDS"))
	const [isLastPage, setIsLastPage] = useState(false);

	console.log(data.length)

	const getHouseList = async (curPage) => {
		setLoading(true)
		const { data : newData } = await api.houseList(curPage);
		if (newData.length === 0) setIsLastPage(true)
		setData(data.concat(newData));
		setCurrentPage(currentPage + 1);
		setLoading(false)
	}

	// 초기 데이터 업데이트를 위한 useEffect Hook
	useEffect( () => {
		getHouseList(1)
	}, [])

	useEffect(() => {
		window.addEventListener("scroll", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll)
		}
	})

	const onScroll = () => {
		const scrollHeight = document.documentElement.scrollHeight;
		const scrollTop = document.documentElement.scrollTop;
		const clientHeight = document.documentElement.clientHeight;
		if (scrollTop + clientHeight >= scrollHeight && !isLastPage) {
			getHouseList(currentPage);
		}
	}

	const onClickCheckIcon = (event) => {
		event.preventDefault();
		setIsToggled(!isToggled);
	}

	const onClickScrappedIcon = async (event) => {
		event.preventDefault();
		if (event.target.className === "scrap-icon-wrapper" ||
			Array.prototype.concat.apply([], event.target.parentNode.classList).find(item => item === "scrap-icon-wrapper")) {
			const id = event.target.parentNode.id;
			const newScrappedCard = data.find(data => data.id === parseInt(id, 10));
			if (scrappedCard.find(card => card.id === newScrappedCard.id)) {
				setScrappedCard(scrappedCard.filter((card => card.id !== newScrappedCard.id)))
				removeScrapCard(newScrappedCard)
				toast.info("스크랩이 정상적으로 삭제되었습니다.")
			} else {
				const nextScrapCards = scrappedCard.concat(newScrappedCard);
				setScrappedCard(nextScrapCards);
				addScrapCard(newScrappedCard)
				toast.info("스크랩이 정상적으로 추가되었습니다.")
			}
		}
	}

	if(loading) return <Loading/>
	return (
		<ItemListPageWrapper>
			<ItemListPageFilter isToggled={isToggled} onClickCheckIcon={onClickCheckIcon}/>
			<ItemListWrapper>
				{
					!isToggled ? (
						data.map((data) =>
						{
							if (scrappedCard.find(card => parseInt(card.id, 10) === data.id)) {
								return <Item data={data} onClickScrappedIcon={onClickScrappedIcon} isScrapped={true}/>
							}
							else
								return <Item data={data} onClickScrappedIcon={onClickScrappedIcon} isScrapped={false}/>
						})
					) : (
						scrappedCard.length > 0 ? (
							scrappedCard.map(data => {
								return <Item data={data} onClickScrappedIcon={onClickScrappedIcon} isScrapped={true}/>
							})
						) : (
							<div>찾으시는 데이터가 존재하지 않습니다.</div>
						)
					)
				}
			</ItemListWrapper>
		</ItemListPageWrapper>
	);
};

export default ItemListPage;