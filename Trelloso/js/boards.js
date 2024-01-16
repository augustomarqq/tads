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

    if (deleteBoard.status === 204) {
        console.log(`Board ${board_id} deletado com sucesso.`);
        return true; // Indica que a exclusão foi bem-sucedida
    } else {
        console.error(`Erro ao deletar o board ${board_id}.`);
        return false; // Indica que houve um erro na exclusão
    }
}

export default {myBoards, create, getBoardLists, deleteBoard};