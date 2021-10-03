import React, { useState, useEffect } from "react";

const url = "https://api.quotable.io/random";
function Quotes() {
  const [quotes, setQuotes] = useState([]);

  //Fetch Quotes from API
  const getQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setQuotes(data));
  };

  useEffect(() => {
    getQuote();
  }, []);

  const getNewQuote = () => {
    getQuote();
  };

  const tweetQuote = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quotes.content} - ${quotes.author}`;
    window.open(twitterUrl, "_blank");
  };

  const { content, author } = quotes;
  return (
    <div className="mt-5 pt-2">
      <div className="row justify-content-center">
        <div className="col-12 text-center my-3">
          <h1 className="todo-text">
            Random <span>Quotes</span>
          </h1>
        </div>
        <div className="col-md-5 my-2">
          <div className="card toto-card">
            <div className="card-body text-center py-5">
              <h4>{content}</h4>
              <h5 className="text-muted my-4">
                <i>- By {author}</i>
              </h5>
              <div className="button-container">
                <button className="btn btn-primary" onClick={tweetQuote}>
                  <i className="fab fa-twitter"></i> Share on Twitter
                </button>
              </div>
              <div className="button-container mt-3">
                <button
                  className="btn btn-primary btn-hero"
                  onClick={getNewQuote}
                >
                  New Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quotes;
