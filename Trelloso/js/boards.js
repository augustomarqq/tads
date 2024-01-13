import Fetch from "./fetch.js";

async function myBoards() {
    const boards = await Fetch.request('/users/me/boards')
    return boards;
}

async function create(name, color, favorito) {
    const board = {
        name: name,
        color: color,
        favorito: favorito
    }

    const newBoard = await Fetch.request('/boards', board, 'POST');
    return newBoard;
}

async function getBoardLists(board_id) {
    
    const boardLists = await Fetch.request(`/boards/${board_id}/lists`)
    return boardLists;
}

export default {myBoards, create, getBoardLists};