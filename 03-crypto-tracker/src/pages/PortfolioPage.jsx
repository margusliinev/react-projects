import React from 'react';
import { useSelector } from 'react-redux';
import { CgClose } from 'react-icons/cg';

const PortfolioPage = () => {
    const { portfolio } = useSelector((store) => store.portfolio);

    if (portfolio.length < 1) {
        return (
            <main className='portfolio'>
                <div className='portfolio-container'>
                    <h4>Portfolio is empty</h4>
                </div>
            </main>
        );
    }

    return (
        <main className='portfolio'>
            <div className='portfolio-container'>
                <div className='totals'>
                    <h5>Your Portfolio</h5>
                    <div className='portfolio-totals'>
                        <div className='totals-stat'>
                            <p>Portfolio Total Value:</p>
                            <p>€26,632</p>
                        </div>
                        <div className='totals-stat'>
                            <p>Gained Total Profit:</p>
                            <p>€4,817</p>
                        </div>
                        <div className='totals-stat'>
                            <p>Portfolio Value Change 24h:</p>
                            <p>9.04%</p>
                        </div>
                        <div className='totals-stat'>
                            <p>Number Of Unique Coins:</p>
                            <p>3</p>
                        </div>
                    </div>
                </div>
                <div className='assets'>
                    <h5>Your Coins</h5>
                    <div className='portfolio-content-divider'></div>
                    <div className='portfolio-list'>
                        {portfolio.length > 0
                            ? portfolio.map((coin) => {
                                  console.log(coin);
                                  return (
                                      <article className='portfolio-item' key={coin.id}>
                                          <div className='portfolio-coin-header'>
                                              <img src={coin.image} alt={coin.name} />
                                              <p>{coin.name.charAt(0).toUpperCase() + coin.name.slice(1)}</p>
                                              <p>({coin.symbol.toUpperCase()})</p>
                                              <button className='remove-coin-btn'>
                                                  <CgClose />
                                              </button>
                                          </div>
                                          <div className='portfolio-coin-stats'>
                                              <div className='portfolio-coin-market'>
                                                  <p className='portfolio-coin-market-title'>Market Price</p>
                                                  <div className='portfolio-coin-market-stats'>
                                                      <div className='portfolio-coin-stat'>
                                                          <p className='portfolio-coin-stat-title'>Price now:</p>
                                                          <p className='portfolio-coin-stat-value'>€26,632</p>
                                                      </div>
                                                      <div className='portfolio-coin-stat'>
                                                          <p className='portfolio-coin-stat-title'>All time High:</p>
                                                          <p className='portfolio-coin-stat-value'>€59717</p>
                                                      </div>
                                                      <div className='portfolio-coin-stat'>
                                                          <p className='portfolio-coin-stat-title'>Price 24h Change:</p>
                                                          <p className='portfolio-coin-stat-value'>2.33%</p>
                                                      </div>
                                                      <div className='portfolio-coin-stat'>
                                                          <p className='portfolio-coin-stat-title'>Circ/Total Sup:</p>
                                                          <p className='portfolio-coin-stat-value'>30%</p>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className='portfolio-coin-user'>
                                                  <p className='portfolio-coin-market-title'>Your Coin</p>
                                                  <div className='portfolio-coin-user-stats'>
                                                      <div className='portfolio-coin-stat'>
                                                          <p className='portfolio-coin-stat-title'>Amount:</p>
                                                          <p className='portfolio-coin-stat-value'>1</p>
                                                      </div>
                                                      <div className='portfolio-coin-stat'>
                                                          <p className='portfolio-coin-stat-title'>Purchase Price:</p>
                                                          <p className='portfolio-coin-stat-value'>€24,222</p>
                                                      </div>
                                                      <div className='portfolio-coin-stat'>
                                                          <p className='portfolio-coin-stat-title'>Price Since Purchase:</p>
                                                          <p className='portfolio-coin-stat-value'>9.04%</p>
                                                      </div>
                                                      <div className='portfolio-coin-stat'>
                                                          <p className='portfolio-coin-stat-title'>Gained Profit</p>
                                                          <p className='portfolio-coin-stat-value'>€2410</p>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className='portfolio-content-divider'></div>
                                      </article>
                                  );
                              })
                            : null}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default PortfolioPage;
