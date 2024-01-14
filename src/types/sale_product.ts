import {PayMethod} from "@/app/constants";

export interface PaySessionConfig {
    PayMethod: PayMethod;
}

export interface SaleProduct {
    productId: number,
    productName: string,
    productDesc: string,
    quota: number,
    price: number
}

export enum SaleProductEnum {
    SUCCESS = "0000",
    NeedLogin = "0003",
}