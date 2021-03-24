import React, { useState } from 'react';
import {
    FormControl,
    TextField,
    Typography,
    Slider,
    Button,
} from '@material-ui/core';

const AddCandidate = () => {
    const [email,setEmail] = useState("");
    const [description,setDescription] = useState("");
    const [involvement,setInvolvement] = useState(5);
    const [talent,setTalent] = useState(5);

    const marks = [
        { value: 0, label: 0 },
        { value: 5, label: 5 },
        { value: 10, label: 10 },
    ];

    const handleSave = () => {

    };

    return (
        <div id="addCandidate">
            <FormControl>
                {/* TODO add email validation */}
                <TextField
                    id="email"
                    label="email"
                    variant="outlined"
                    defaultValue={email}
                    onChange={(e,value)=>setEmail(value)}
                />
                <TextField
                    id="description"
                    label="description"
                    multiline
                    rows={4}
                    variant="outlined"
                    defaultValue={description}
                    onChange={(e,value)=>setDescription(value)}
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
                >
                    save
                </Button>
            </FormControl>
        </div>
    )
};

export default AddCandidate;
