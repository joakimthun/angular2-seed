import { Injectable } from '@angular/core';

@Injectable()
export class AppConfig { 
    public static ApiEndpoint = process.env.API_ENDPOINT;
}