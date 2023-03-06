import React from "react";
import { Grid, Row, Col } from "react-bootstrap";

import { Link } from "react-router-dom";
import DOMPurify from "dompurify";
import CoinsChart from "./CoinsChart";

const SingleCoinPageDetails = ({ coin }) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  if (!coin) {
    <></>;
  }
  return (
    <div>
      <Grid bsClass="custom-single-coin">
        <Row>
          <Col>
            <ul key={coin.id}>
              {coin.image ? (
                <img circle src={coin.image.small} alt="logo"></img>
              ) : null}

              <h3 className="single-coin-list">{coin.id}</h3>
              <h4>
                <CoinsChart />
              </h4>
              <li>
                <div className="social-box">
                  <p>Current Price:</p>
                  {coin.market_data ? (
                    <span>
                      &euro;
                      {coin.market_data.current_price.eur.toLocaleString()}
                    </span>
                  ) : (
                    "-"
                  )}
                </div>
              </li>
              <li>
                <div className="social-box">
                  <p>Description:</p>
                </div>
              </li>
              <p
                // style={{ maxWidth: "500px" }}
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    coin.description ? coin.description.en.slice(0, 189) : "-"
                  ),
                }}
              ></p>
              <li>
                <div className="social-box">
                  <p>Twitter Followers:</p>
                  {coin.community_data ? (
                    <span>
                      {coin?.community_data.twitter_followers?.toLocaleString()}
                    </span>
                  ) : (
                    "-"
                  )}
                </div>
              </li>
              <li>
                <div className="social-box">
                  <p>Facebook Lkes:</p>
                  {coin.community_data ? (
                    <span>{coin?.community_data?.facebook_likes}</span>
                  ) : (
                    "-"
                  )}
                </div>
              </li>
              <li>
                <div className="social-box">
                  <p>Contact Links :</p>
                  {coin.links ? (
                    <Link to={`http//official_forum_url/org`}>
                      {coin?.links?.official_forum_url[0]}
                    </Link>
                  ) : (
                    "-"
                  )}
                </div>
              </li>
              <li>
                <div className="social-box">
                  <p>GitHb statics :</p>
                  <ul>
                    <li>
                      Forks :
                      {coin.developer_data ? (
                        <span>
                          {coin?.developer_data?.forks?.toLocaleString()}
                        </span>
                      ) : (
                        "-"
                      )}
                    </li>
                    <li>
                      Stars :
                      {coin.developer_data ? (
                        <span>
                          {coin?.developer_data.stars?.toLocaleString()}
                        </span>
                      ) : (
                        "-"
                      )}
                    </li>
                    <li>
                      Subscribers :
                      {coin.developer_data ? (
                        <span>
                          {coin?.developer_data?.subscribers?.toLocaleString()}
                        </span>
                      ) : (
                        "-"
                      )}
                    </li>
                    <li>
                      issues :
                      {coin.developer_data ? (
                        <span>
                          {coin?.developer_data?.total_issues?.toLocaleString()}
                        </span>
                      ) : (
                        "-"
                      )}
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="social-box">
                  <p>Reputation Score:</p>
                  <ul>
                    <li>
                      &#128078;
                      {coin.sentiment_votes_down_percentage ? (
                        <span>{coin?.sentiment_votes_down_percentage} %</span>
                      ) : (
                        "-"
                      )}
                    </li>
                    <li>
                      &#128077;
                      {coin.sentiment_votes_up_percentage ? (
                        <span>{coin?.sentiment_votes_up_percentage} %</span>
                      ) : (
                        "-"
                      )}
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="social-box">
                  <p>Price change:</p>
                  <ul>
                    <li>
                      1 hour :
                      {coin.market_data
                        ?.price_change_percentage_1h_in_currency ? (
                        <span>
                          {coin?.market_data.price_change_percentage_1h_in_currency?.eur?.toFixed(
                            2
                          )}
                          %
                        </span>
                      ) : (
                        "-"
                      )}
                    </li>
                    <li>
                      24 hours :
                      {coin.market_data
                        ?.price_change_percentage_24h_in_currency ? (
                        <span>
                          {coin?.market_data.price_change_percentage_24h_in_currency?.eur?.toFixed(
                            2
                          )}
                          %
                        </span>
                      ) : (
                        "-"
                      )}
                    </li>
                    <li>
                      7 days :
                      {coin.market_data
                        ?.price_change_percentage_7d_in_currency ? (
                        <span>
                          {coin?.market_data?.price_change_percentage_7d_in_currency?.eur?.toFixed(
                            2
                          )}
                          %
                        </span>
                      ) : (
                        "-"
                      )}
                    </li>
                    <li>
                      14 days :
                      {coin.market_data
                        ?.price_change_percentage_14d_in_currency ? (
                        <span>
                          {coin?.market_data?.price_change_percentage_14d_in_currency?.eur?.toFixed(
                            2
                          )}
                          %
                        </span>
                      ) : (
                        "-"
                      )}
                    </li>
                    <li>
                      1 Month :
                      {coin.market_data
                        ?.price_change_percentage_1m_in_currency ? (
                        <span>
                          {coin?.market_data?.price_change_percentage_1m_in_currency?.eur?.toFixed(
                            2
                          )}
                          %
                        </span>
                      ) : (
                        "-"
                      )}
                    </li>
                    <li>
                      2 Months :
                      {coin.market_data
                        ?.price_change_percentage_2m_in_currency ? (
                        <span>
                          {coin?.market_data?.price_change_percentage_2m_in_currency?.eur?.toFixed(
                            2
                          )}
                          %
                        </span>
                      ) : (
                        "-"
                      )}
                    </li>
                    <li>
                      200 Days :
                      {coin.market_data
                        ?.price_change_percentage_200d_in_currency ? (
                        <span>
                          {coin?.market_data?.price_change_percentage_200d_in_currency?.eur?.toFixed(
                            2
                          )}
                          %
                        </span>
                      ) : (
                        "-"
                      )}
                    </li>
                    <li>
                      1 Year:
                      {coin.market_data
                        ?.price_change_percentage_1y_in_currency ? (
                        <span>
                          {coin?.market_data?.price_change_percentage_1y_in_currency?.eur?.toFixed(
                            2
                          )}
                          %
                        </span>
                      ) : (
                        "-"
                      )}
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="social-box">
                  <p>Highest price on the last day :</p>
                  {coin.market_data ? (
                    <span>
                      &euro;{coin?.market_data?.high_24h?.eur?.toLocaleString()}
                    </span>
                  ) : (
                    "-"
                  )}
                </div>
              </li>
              <li>
                <div className="social-box">
                  <p>
                    Highest price :
                    {coin.market_data ? (
                      <span>
                        &euro;{coin?.market_data?.ath?.eur?.toLocaleString()}
                      </span>
                    ) : (
                      "-"
                    )}
                    <br />
                    <span>on:</span>
                    {coin.market_data ? (
                      <span>
                        {new Date(
                          coin?.market_data?.ath_date?.eur
                        ).toLocaleDateString("eu-EU", options)}
                      </span>
                    ) : (
                      "-"
                    )}
                  </p>
                </div>
              </li>
              <li>
                <div className="social-box">
                  <p>
                    Lowest price:
                    {coin.market_data ? (
                      <span>
                        &euro;{coin?.market_data?.atl?.eur?.toLocaleString()}
                      </span>
                    ) : (
                      "-"
                    )}
                    <br /> <span>on:</span>
                    {coin.market_data ? (
                      <span>
                        {new Date(
                          coin?.market_data?.atl_date?.eur
                        ).toLocaleDateString("eu-EU", options)}
                      </span>
                    ) : (
                      "-"
                    )}
                  </p>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default SingleCoinPageDetails;
