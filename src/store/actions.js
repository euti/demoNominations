export function addCandidate(newCandidate) {
    return {
        type: 'ADD_CANDIDATE',
        data: newCandidate,
    }
}
