import { useEffect, useState } from "react";
import quotes from "./quote/config";
import QuoteDisplay from "./quote/quote-display";

function App() {
  const [quote, setQuote] = useState({
    quote: "",
    author: "",
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  //console.log(quote);
  const fetchFallbackQuote = () => {
    const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
    const randomFallbackQuote = quotes[randomQuoteIndex];
    //console.log(randomFallbackQuote);
    setQuote(randomFallbackQuote);
  };

  const fetchApiQuote = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://dummyjson.com/quotes");

      if (!res.ok) {
        setError(res.statusText);
        throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
      }

      const data = await res.json();
      //console.log(data?.quotes);

      if (data && Array.isArray(data.quotes) && data.quotes.length > 0) {
        const quotes = data?.quotes;
        const getRandomIndex = Math.floor(Math.random() * quotes?.length);
        const getRandomQuotes = quotes[getRandomIndex];
        //console.log(getRandomQuotes);
        setQuote(getRandomQuotes);
        setLoading(false);
        setError(null);
      } else {
        console.warn("API returned no quotes.");
        setError("API did not return a valid quote.");
        fetchFallbackQuote();
      }
    } catch (err: unknown) {
      console.error("Network or parsing error:", err);
      setError("err.message");
      fetchFallbackQuote();
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApiQuote();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //console.log(quote);

  //prettier-ignore
  return (
    <div>
      <QuoteDisplay quote={quote} fetchFallbackQuote={fetchFallbackQuote} fetchApiQuote={fetchApiQuote} loading={loading} error={error} />
    </div>
  );
}

export default App;
