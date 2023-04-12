import React from 'react';
import { useSelector } from 'react-redux';

const ExchangesList = () => {
    const { displayed_exchanges } = useSelector((store) => store.exchanges);

    return (
        <div className='exchanges-list'>
            {displayed_exchanges
                ? displayed_exchanges.map((exchange, index) => {
                      return (
                          <article key={index} className='exchange'>
                              <div className='exchange-header'>
                                  <img src={exchange.image} alt={exchange.name} className='exchange-logo' />
                                  <h4 className='exchange-title'>{exchange.name}</h4>
                              </div>
                              <div className='exchange-data-container'>
                                  <div className='data-container-column-one'>
                                      <div className='exchange-data'>
                                          <p className='exchange-data-title'>Trust Score Rank</p>
                                          <p className='exchange-data-value'>{!exchange.trust_score_rank ? 'Not Ranked' : exchange.trust_score_rank}</p>
                                      </div>
                                      <div className='exchange-data'>
                                          <p className='exchange-data-title'>Trust Score</p>
                                          <p className='exchange-data-value'>{!exchange.trust_score ? 0 : exchange.trust_score}</p>
                                      </div>
                                      <div className='exchange-data'>
                                          <p className='exchange-data-title'>Trade Volume 24h</p>
                                          <p className='exchange-data-value'>{!exchange.trade_volume_24h_btc ? 0 + ' BTC' : exchange.trade_volume_24h_btc.toFixed(2) + ' BTC'}</p>
                                      </div>
                                  </div>
                                  <div className='data-container-column-two'>
                                      <div className='exchange-data'>
                                          <p className='exchange-data-title'>Year Established</p>
                                          <p className='exchange-data-value'>{!exchange.year_established ? 'Unknown' : exchange.year_established}</p>
                                      </div>
                                      <div className='exchange-data'>
                                          <p className='exchange-data-title'>Country</p>
                                          <p className='exchange-data-value'>{!exchange.country ? 'worldwide' : exchange.country}</p>
                                      </div>
                                      <div className='exchange-data'>
                                          <p className='exchange-data-title'>Website</p>
                                          <p className='exchange-data-value'>{!exchange.url ? 'No Website' : exchange.url}</p>
                                      </div>
                                  </div>
                              </div>
                          </article>
                      );
                  })
                : null}
        </div>
    );
};

export default ExchangesList;
