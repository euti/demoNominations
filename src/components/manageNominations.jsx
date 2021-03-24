import React, { useState } from 'react';
import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Button,
    TablePagination,
} from '@material-ui/core';
import {
    initialState,
} from "../utils/config";

const ManageNominations = () => {
    const [candidates,setCandidates] = useState(initialState)
    const [page,setPage] = useState(0);
    const [rowsPerPage,setRowsPerPage] = useState(10);

    const validCandidates = candidates
        .filter(candidate => candidate.status !== "rejected");
    const shownCandidates = validCandidates
        .slice(page*rowsPerPage, page*rowsPerPage+rowsPerPage);

    return (
        <div id="manageNominations">
            <TableContainer id="dataTable">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>email</TableCell>
                            <TableCell>description</TableCell>
                            <TableCell>involvement</TableCell>
                            <TableCell>talent</TableCell>
                            <TableCell>status</TableCell>
                            <TableCell />
                            <TableCell />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {shownCandidates.map((candidate) => (
                            <TableRow key={candidate.email}>
                                <TableCell>{candidate.email}</TableCell>
                                <TableCell>{candidate.description}</TableCell>
                                <TableCell>{candidate.involvement}</TableCell>
                                <TableCell>{candidate.talent}</TableCell>
                                <TableCell>{candidate.status}</TableCell>
                                <TableCell>
                                    <Button
                                        onClick={()=>{}}
                                    >
                                        ✓
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    <Button
                                        onClick={()=>{}}
                                    >
                                        ✘
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={validCandidates.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={(e, value) => setPage(value)}
                    onChangeRowsPerPage={(e) => {
                        setRowsPerPage(parseInt(e.target.value, 10));
                        setPage(0);
                    }}
                />
            </TableContainer>
        </div>
    )
};

export default ManageNominations;
