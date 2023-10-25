import getSymbolFromCurrency from "currency-symbol-map";

const USD = getSymbolFromCurrency("USD");
const CAD = getSymbolFromCurrency("CAD");
const AUD = getSymbolFromCurrency("AUD");
const ZAR = getSymbolFromCurrency("ZAR");
const EURO = getSymbolFromCurrency("EUR");
const AED = getSymbolFromCurrency("AED");
const GBP = getSymbolFromCurrency("GBP");

export const priceData = [
  {
    id: "US",
    country: "US",
    priceArk: 25,
    priceMetaverse: 35,
    symbol: USD,
  },
  {
    id: "INR",
    country: "IN",
    priceArk: 1800,
    priceMetaverse: 2500,
    symbol: "Rs.",
  },
  //$CA
  {
    id: "CAD",
    country: "CA",
    priceArk: 32,
    priceMetaverse: 45,
    symbol: CAD,
  },
  //A$
  {
    id: "AUD",
    country: "AUD",
    priceArk: 34,
    priceMetaverse: 50,
    symbol: AUD,
  },
  {
    id: "ZAR",
    country: "ZAR",
    priceArk: 360,
    priceMetaverse: 500,
    symbol: ZAR,
  },
  //DE use for euro
  {
    id: "DE",
    country: "DE",
    priceArk: 22,
    priceMetaverse: 30,
    symbol: EURO,
  },
  //د.إ use for aed
  {
    id: "AE",
    country: "AE",
    priceArk: 92,
    priceMetaverse: 130,
    symbol: AED,
  },
  //GB use for GBp
  {
    id: "GB",
    country: "GB",
    priceArk: 18,
    priceMetaverse: 25,
    symbol: GBP,
  },
];
