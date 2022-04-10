import React, {useEffect, useState} from 'react';

import Card from "./components/Card/Card";
import Grid from "./components/Grid/Grid";
import Pagination from "./components/Pagination/Pagination";
import './styles.scss';
import data from "./digimon.json";

function App() {
  const [digimons, setDigimons] = useState(data.slice(0, 12));
  const [page, setpage] = useState(12);

  useEffect(() => {
    setDigimons(data.slice(page - 12, page));
  }, [page]);
  return (
    <>
      <Grid>
        {digimons.map(item => {
          return (
            <Card
              key={item.url}
              image={item?.image?.split("/revision")[0]}
              title={item.title}
            />
          );
        })}
      </Grid>
      <Pagination setPage={setpage}/>
    </> 
  );
}

export default App;
