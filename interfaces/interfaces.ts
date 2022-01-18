export interface Item {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string | null;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
  explorer: string;
}
export interface User {
  id: number;
  username: string;
  password: string;
}
export interface partnerList {
  name:string,
  url: string,
  comments: string
}
export interface Icon{
  color?:string;
  width?:number;
  heigth?: number;
}