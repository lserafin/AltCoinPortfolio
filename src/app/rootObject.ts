import { Ticker } from "app/ticker";

export interface RootObject {
        ticker: Ticker;
        timestamp: number;
        success: boolean;
        error: string;
}