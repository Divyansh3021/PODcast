import React from 'react'
import Recommendation_card from './Recommendation_card'

function Hindi_sugg() {
  return (
    <div className='recommend-con'>
        <h2 className='recommend_title'>Top Grossing Hindi Podcasts</h2>
        <div className="recommendations" onLoad={window.scrollTo(0,0)}>
            <Recommendation_card title="how to live in your teenage" img="https://uploads-ssl.webflow.com/5f8d8ab496d65849f731ba00/60d1df6b269e8c378c79bcb2_RA_Podcast_Tile-scaled.jpg"/>
            <Recommendation_card title="how to live in your teenage" img="https://uploads-ssl.webflow.com/5f8d8ab496d65849f731ba00/6093d14d99961d540306cdeb_Jw7_pr0JSt9IMJexJ80xY8qV3PkwC2ivSfrYAWh8n_Xapr3aQseAqlLgLuUhrMPhmb2pJI8mh8QxBh7QFvh9uRZmKf0R2AvjtRkKS2Nys1WAqthE98_4zQGEJOKXXbJpFW6-javo2fj-4pXeDw.jpeg"/>
            <Recommendation_card title="how to live in your teenage" img="https://uploads-ssl.webflow.com/5f8d8ab496d65849f731ba00/6093d14d548b02d1c1ef1d55_tr6lYNinrqsKZGBIDWTVvDdTZxnNDthansIbq-95f-0MfzooBEX46TCdi9UNpjjhhq45QGj88414JN8EmEhKHdVYTi8CGGfOHd7XA76nJFJ_UfNg4X8u1Os7N3hC2bHaEXjVsMxomJ_Ib1DR0w.jpeg"/>
            <Recommendation_card title="how to live in your teenage" img="https://uploads-ssl.webflow.com/5f8d8ab496d65849f731ba00/6093d14d99961d540306cdeb_Jw7_pr0JSt9IMJexJ80xY8qV3PkwC2ivSfrYAWh8n_Xapr3aQseAqlLgLuUhrMPhmb2pJI8mh8QxBh7QFvh9uRZmKf0R2AvjtRkKS2Nys1WAqthE98_4zQGEJOKXXbJpFW6-javo2fj-4pXeDw.jpeg"/>
            <Recommendation_card title="how to live in your teenage" img="https://uploads-ssl.webflow.com/5f8d8ab496d65849f731ba00/60d1df6b269e8c378c79bcb2_RA_Podcast_Tile-scaled.jpg"/>
        </div>
    </div>
  )
}

export default Hindi_sugg