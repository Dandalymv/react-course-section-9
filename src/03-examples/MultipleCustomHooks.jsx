import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "./";

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  const { data, isloading, hasError } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );
  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {isloading ? <LoadingQuote /> : <Quote author={author} quote={quote} />}

      <button
        className="btn btn-secondary"
        disabled={isloading}
        onClick={() => increment()}
      >
        Next Quote
      </button>
    </>
  );
};
