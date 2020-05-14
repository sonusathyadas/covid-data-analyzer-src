export interface ICovidData {
    id?:number;
    countryOrRegion:string;
    provinceOrState:string;
    date:Date;
    lat:number;
    long:number;
    confirmed:number;
    deaths:number;
    recovered:number;
}
