/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react'
import NewsTicker from '../../../newsTicker/components/NewsTicker'
import { SPFI } from '@pnp/sp';
import { getSP } from '../pnpConfig';
import SpService from '../../../newsTicker/service/SpService';

const News = (props:any) => {
  const [newstms, setNewsItms] = React.useState<any>();
  const[loading, setLoading] = React.useState<boolean>(true)
  const getNewsData = async () => {
    const sp: SPFI = getSP(props.context);
    const spService = new SpService(sp);
    const newsItems = await spService.getNewsItems(
      "HighlightNews",
      "Published News"
    );

    setNewsItms(newsItems);
    setLoading(false);
  };


  useEffect(()=>{
    getNewsData()
  })
  if(loading)return(
    <div>Loading...</div>
  )
  else{
  return (
    
        <div >
          <NewsTicker
            items={newstms}
            bgColor="#ad65f763"
            textColor="black"
            spService={props.newsTickerSpService}
          />
        </div>
      
  )
  }
}

export default News