import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
    addCandidate,
} from "../store/actions";
import {
    FormControl,
    TextField,
    Typography,
    Slider,
    Button,
} from '@material-ui/core';

const AddCandidate = (props) => {
    const [email,setEmail] = useState("");
    const [description,setDescription] = useState("");
    const [involvement,setInvolvement] = useState(5);
    const [talent,setTalent] = useState(5);
    const [error,setError] = useState("");

    const {
        candidates,
        addCandidate,
    } = props;

    const marks = [
        { value: 0, label: 0 },
        { value: 5, label: 5 },
        { value: 10, label: 10 },
    ];

    const handleSave = () => {
        const newCandidate = {
            email,
            description,
            involvement,
            talent,
            status: talent < 8 ? "rejected" : "pending"
        };

        addCandidate(newCandidate);

        setEmail("");
        setDescription("");
        setInvolvement(5);
        setTalent(5);
    };

    return (
        <div id="addCandidate">
            <FormControl>
                <Typography>
                        {error}
                </Typography>
                {/* TODO add email validation */}
                <TextField
                    id="email"
                    label="email"
                    variant="outlined"
                    value={email}
                    onChange={ e => {
                        if (candidates.findIndex(c=> c.email === e.target.value)>-1) {
                            setError("email already in nominations")
                        } else {
                            setError("")
                        };
                        setEmail(e.target.value);
                    }}
                />
                <TextField
                    id="description"
                    label="description"
                    multiline
                    rows={4}
                    variant="outlined"
                    value={description}
                    onChange={e=>setDescription(e.target.value)}
                />
                <Typography id="involvementText" gutterBottom>
                    involvement
                </Typography>
                <Slider
                    value={involvement}
                    min={0}
                    max={10}
                    step={1}
                    marks={marks}
                    onChange={(e,value) => setInvolvement(value)}
                />
                <Typography id="talentText" gutterBottom>
                    talent
                </Typography>
                <Slider
                    value={talent}
                    min={0}
                    max={10}
                    step={1}
                    marks={marks}
                    onChange={(e,value) => setTalent(value)}
                />
                <Button
                    variant="contained"
                    onClick={handleSave}
                    disabled={error}
                >
                    save
                </Button>
            </FormControl>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        candidates: state.candidates,
    }
};

const mapDispatchToProps = {
    addCandidate,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCandidate);
