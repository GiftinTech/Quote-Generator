import { Fragment } from 'react';

export interface SingleQuote {
  quote: string;
  author: string;
}

interface QuoteDisplayProps {
  quote: SingleQuote;
  fetchFallbackQuote: () => void;
  fetchApiQuote: () => void;
  loading: boolean;
  error: string | null;
}

const QuoteDisplay = ({ quote, fetchApiQuote, loading }: QuoteDisplayProps) => {
  console.log(quote);

  const generateNewQuote = () => {
    fetchApiQuote();
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-3 pt-25">
        <h1 className="text-2xl font-extrabold">Quote Generator</h1>
        <div className="mt-4 mb-3 h-[250px] w-[70%] place-content-center rounded-2xl border border-transparent p-6 shadow-sm hover:shadow-lg md:w-[50%]">
          {loading ? (
            <div>Fetching your quote! Please wait...</div>
          ) : (
            <Fragment>
              <blockquote className="relative">
                <p className='font-[500] before:absolute before:top-0 before:left-0 before:-translate-x-5 before:-translate-y-14 before:transform before:font-serif before:text-9xl before:opacity-25 before:content-["\201C"] after:absolute after:right-0 after:-bottom-20 after:translate-x-5 after:translate-y-19 after:transform after:font-serif after:text-9xl after:opacity-25 after:content-["\201D"] sm:text-[22px] dark:text-slate-600'>
                  {quote.quote}
                </p>
              </blockquote>
              <div className="mt-4 text-right font-bold">
                &#8212;{quote.author}
              </div>
            </Fragment>
          )}
        </div>
        <div>
          <button
            onClick={generateNewQuote}
            className="cursor-pointer rounded-md border-0 bg-[#333] p-2 text-white hover:bg-black"
            disabled={loading}
          >
            Generate New Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuoteDisplay;
