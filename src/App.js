import React, {useState} from 'react';
import useSWR from 'swr';
import region from './api/region';
import provinces from './api/provinces';

function App() {
  const [activeRegion, setActiveRegion] = useState(null);
  const { data, error } = useSWR(true, region.all);
  const { data: province } = useSWR(activeRegion, provinces.all);

  if (error) return <p>error {JSON.stringify(error)}</p>;
  if (!data) return <p>Loading...</p>;

  const {data: {data: regions}} = data;

  return <div>
    <div style={{display: 'inline-block', width: '50%'}}>
      <ul> {regions.map(r => <li key={r.iso} onClick={() => setActiveRegion(r.iso)}>{r.name}</li>)} </ul>
    </div>
    <div style={{display: 'inline-block', width: '50%'}}>
      {
        province?.data ?
          JSON.stringify(province.data)
          : null
      }
    </div>
  </div>;
}

export default App;