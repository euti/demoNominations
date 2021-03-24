export function addCandidate(newCandidate) {
    return {
        type: 'ADD_CANDIDATE',
        data: newCandidate,
    }
}

export function updateStatus(updatedCandidate) {
    return {
        type: 'UPDATE_STATUS',
        data: updatedCandidate,
    }
}
