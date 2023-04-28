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
                <h5>Your Portfolio</h5>
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
                                                      <p className='portfolio-coin-stat-value'>progress bar</p>
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
                                                      <p className='portfolio-coin-stat-title'>Value:</p>
                                                      <p className='portfolio-coin-stat-value'>€24,222</p>
                                                  </div>
                                                  <div className='portfolio-coin-stat'>
                                                      <p className='portfolio-coin-stat-title'>Price since purchase:</p>
                                                      <p className='portfolio-coin-stat-value'>-22.33%</p>
                                                  </div>
                                                  <div className='portfolio-coin-stat'>
                                                      <p className='portfolio-coin-stat-title'>Purchase Date:</p>
                                                      <p className='portfolio-coin-stat-value'>12-09-2021</p>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </article>
                              );
                          })
                        : null}
                </div>
            </div>
        </main>
    );
};

export default PortfolioPage;
