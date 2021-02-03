import React, { useState } from "react";
import {
  SliderInput,
  SliderTrack,
  SliderRange,
  SliderHandle,
} from "@reach/slider";
import Layout from "components/Layout";
import Toggle from "components/Toggle";
import Button from "components/Button";

const pageViews: { [key: string]: string } = {
  "1": "10k",
  "2": "50k",
  "3": "100k",
  "4": "500k",
  "5": "1m",
};
const pricing: { [key: string]: number } = {
  "1": 8,
  "2": 12,
  "3": 16,
  "4": 24,
  "5": 36,
};

const IndexPage = () => {
  const [yearly, setYearly] = useState(false);
  const [rangeValue, setRangeValue] = useState(1);

  const price = yearly ? pricing[rangeValue] * 0.75 : pricing[rangeValue];
  const handleRangeChange = (value: number) => {
    setRangeValue(value);
  };
  return (
    <Layout title="Frontend Mentor | Interactive pricing component">
      <div className="bg-circles bg-no-repeat bg-center p-12 text-center">
        <h1 className="text-3xl font-body font-bold text-blue-dark">
          Simple, traffic-based pricing
        </h1>
        <p className="font-body text-blue-grayish mt-4">
          Sign-up for our 30-day trial. No credit card required.
        </p>
      </div>
      <div className="bg-white overflow-hidden shadow rounded-lg mx-auto mt-16 w-2/5">
        <div className="py-16">
          <div className="px-16 flex-col">
            <div className="flex justify-between items-center">
              <p className="uppercase text-blue-grayish font-semibold">
                {pageViews[rangeValue]} pageviews
              </p>
              <p className="flex items-center justify-center">
                <span className="text-4xl font-bold font-body">
                  ${price.toFixed(2)}
                </span>
                <span className="text-blue-grayish">/month</span>
              </p>
            </div>
            <SliderInput
              className="mt-12"
              onChange={handleRangeChange}
              value={rangeValue}
              min={1}
              max={5}
              step={1}
            >
              <SliderTrack className="bg-light-grayish-blue h-8">
                <SliderRange className="bg-cyan-soft" />
                <SliderHandle className="bg-cyan-strong hover:bg-cyan-soft shadow-cyan rounded-full w-10 h-10 bg-slider bg-no-repeat bg-center" />
              </SliderTrack>
            </SliderInput>
            <div className="flex justify-center mt-12">
              <p className="flex-1 text-right text-sm text-blue-grayish">
                Monthly Billing
              </p>
              <Toggle onClick={(on) => setYearly(on)} />
              <p className="flex-1 flex text-sm text-blue-grayish">
                <span>Yearly Billing</span>
                <span className="flex flex-grow-0 items-center justify-center bg-light-grayish-red rounded-2xl px-2 text-light-red text-xs mx-2">
                  25% discount
                </span>
              </p>
            </div>
          </div>
          <div>
            <hr className="my-10 w-full" />
            <div className="px-16 flex justify-between items-center">
              <ul className="font-body text-blue-grayish">
                <li className="flex mb-2">
                  <img className="mr-4" src="/icon-check.svg" />
                  <span>Unlimited websites</span>
                </li>
                <li className="flex mb-2">
                  <img className="mr-4" src="/icon-check.svg" />
                  <span>100% data ownership</span>
                </li>
                <li className="flex">
                  <img className="mr-4" src="/icon-check.svg" />
                  <span>Email reports</span>
                </li>
              </ul>
              <Button>Start my trial</Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
