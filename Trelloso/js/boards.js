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

async function deleteBoard(board_id) {
    const deleteBoard = await Fetch.request(`/boards/${board_id}`, null, 'DELETE')
}

async function updateBoardInfo(board_id, { name, color, favorito }) {

    const board = {
        "name": name,
        "color": color,
        "favorito": favorito
      }

    const updateBoard = await Fetch.request(`/boards/${board_id}`, board, 'PATCH')
    return updateBoard;
}

export default {myBoards, create, getBoardLists, deleteBoard, updateBoardInfo};