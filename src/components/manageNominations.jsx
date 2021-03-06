import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
    updateStatus,
} from "../store/actions";
import {
    FormControlLabel,
    Checkbox,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Button,
    TablePagination,
} from '@material-ui/core';

const ManageNominations = (props) => {
    const {
        candidates,
        updateStatus,
    } = props;
    const [page,setPage] = useState(0);
    const [rowsPerPage,setRowsPerPage] = useState(10);
    const [showRejected,setShowRejected] = useState(false);

    const validCandidates = candidates
        .filter(candidate => showRejected
            ? candidate.status === "rejected"
            : candidate.status !== "rejected"
        );
    const shownCandidates = validCandidates
        .slice(page*rowsPerPage, page*rowsPerPage+rowsPerPage);

    return (
        <div data-testid="manageNominations">
            <FormControlLabel
                control={
                    <Checkbox
                        checked={showRejected}
                        onChange={()=> {
                            setShowRejected(!showRejected);
                            setPage(0);
                        }}
                    />
                }
                label="show rejected"
            />

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
                                        onClick={() => updateStatus({...candidate, status: "accepted"})}
                                        disabled={candidate.status === "accepted"}
                                    >
                                        ???
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    <Button
                                        onClick={() => updateStatus({...candidate, status: "rejected"})}
                                        disabled={candidate.status === "rejected"}
                                    >
                                        ???
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

const mapStateToProps = state => {
    return {
        candidates: state.candidates,
    }
};

const mapDispatchToProps = {
    updateStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageNominations);
