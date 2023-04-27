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
                <h6>Your Portfolio</h6>
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
                                              <p>Market Price</p>
                                              <div className='portfolio-coin-market-stats'>
                                                  <div className='portfolio-coin-stat'>
                                                      <p>Price now:</p>
                                                      <p>€26,632</p>
                                                  </div>
                                                  <div className='portfolio-coin-stat'>
                                                      <p>All time High:</p>
                                                      <p>€59717</p>
                                                  </div>
                                                  <div className='portfolio-coin-stat'>
                                                      <p>Price 24h Change:</p>
                                                      <p>2.33%</p>
                                                  </div>
                                                  <div className='portfolio-coin-stat'>
                                                      <p>Circ/Total Sup:</p>
                                                      <p>progress bar</p>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className='portfolio-coin-user'>
                                              <p>Your Coin</p>
                                              <div className='portfolio-coin-user-stats'>
                                                  <div className='portfolio-coin-user-stat'>
                                                      <p>Amount</p>
                                                      <p>1</p>
                                                  </div>
                                                  <div className='portfolio-coin-user-stat'>
                                                      <p>Value:</p>
                                                      <p>€24,222</p>
                                                  </div>
                                                  <div className='portfolio-coin-user-stat'>
                                                      <p>Price change since purchase</p>
                                                      <p>-22.33%</p>
                                                  </div>
                                                  <div className='portfolio-coin-user-stat'>
                                                      <p>Purchase Date</p>
                                                      <p>12-09-2021</p>
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
