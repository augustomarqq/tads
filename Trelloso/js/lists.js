import Fetch from "./fetch.js";

async function create(name, board_id, position) {
    const list = {
        name: name,
        board_id: board_id,
        position: position
    }
    const newList = await Fetch.request('/lists', list, 'POST');
    return newList;
}

export default {create};