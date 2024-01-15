import Fetch from "./fetch.js";

async function create(name, list_id) {
    const card = {
        name: name,
        list_id: list_id
    }
    const newCard = await Fetch.request('/cards', card, 'POST');
    return newCard;
}

export default {create};