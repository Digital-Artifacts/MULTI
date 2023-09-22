import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export abstract class LivepeerRestService {
  protected readonly baseURL: string;
  protected readonly config: AxiosRequestConfig;

  constructor(baseURL: string, config?: AxiosRequestConfig) {
    this.baseURL = baseURL;
    this.config = config || {};
  }

  // protected async
}
