import Fetch from "./fetch";

async function getListCards(list_id) {
    
    const listCards = await Fetch.request(`/lists/${list_id}/cards`)
    return listCards;
}