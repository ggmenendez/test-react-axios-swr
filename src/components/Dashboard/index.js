import React, {useState} from 'react';
import useFetch from '../../hooks/useFetch';
import styled from 'styled-components';

const Column = styled.div`
    display: inline-block;
    width: 50%;
    height: 100%;
`;

function Dashboard () {
    const [activeRegion, setActiveRegion] = useState(null);
    const {data: regions, error: regionsError} = useFetch('regions.all');
    const {data: provinces, error: provincesError} = useFetch('provinces.all', activeRegion);

    if (regionsError||provincesError) return <p>Error</p>;
    if (regions) {
        return <div style={{display: 'flex'}}>
            <Column>
                <ul>
                    {regions.data.data.map((r, i) => <li key={i} onClick={() => setActiveRegion(r.iso)}>{r.name}</li>)}
                </ul>
            </Column>
            <Column>
                {provinces?.data ? JSON.stringify(provinces.data.data) : null}
            </Column>
        </div>
    }
    
    return <p>Loading...</p>;
}

export default Dashboard;