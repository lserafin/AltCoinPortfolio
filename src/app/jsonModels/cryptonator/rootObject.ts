import { Ticker } from "app/jsonModels/cryptonator/ticker";

export interface RootObject {
        ticker: Ticker;
        timestamp: number;
        success: boolean;
        error: string;
}