const LOCAL_STORAGE_SCRAP_CARDS = "SCRAP_CARDS";

export const getScrapCards = () => {
	const scrapCardsString = localStorage.getItem(LOCAL_STORAGE_SCRAP_CARDS);
	const scrapCards = scrapCardsString
		? JSON.parse(scrapCardsString)
		: [];
	return scrapCards;
};

export const setScrapCards = (cards) => {
	localStorage.setItem(LOCAL_STORAGE_SCRAP_CARDS, JSON.stringify(cards));
};

export const addScrapCard = (card) => {
	const scrapCards = getScrapCards();
	const nextScrapCards = scrapCards.concat(card);

	setScrapCards(nextScrapCards);
};

export const removeScrapCard = (newScrappedCard) => {
	console.log(newScrappedCard)
	const scrapCards = getScrapCards();
	const nextScrapCards = scrapCards.filter((card) => card.id !== newScrappedCard.id);

	setScrapCards(nextScrapCards);
};
