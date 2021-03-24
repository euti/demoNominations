import React, {useState} from 'react';
import {
    Tabs,
    Tab,
} from '@material-ui/core';
import {
    AddCandidate,
    ManageNominations,
} from './components';

function App() {
    const [selectedTab,setSelectedTab] = useState(0);

    return (
        <div className="App">
            <Tabs
                value={selectedTab}
                onChange={(event, newValue) => {
                    setSelectedTab(newValue);
                }}
            >
                <Tab label="Add Candidate" id="simple-tab-0" />
                <Tab label="Manage Nominations"  id="simple-tab-1"/>
            </Tabs>
            <div id="selected">
                {
                    {
                        0: <AddCandidate />,
                        1: <ManageNominations />
                    }[selectedTab]
                }

            </div>
        </div>
    );
}

export default App;
