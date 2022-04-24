import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from "@angular/common";
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { NgModule } from "@angular/core";
import { BrowserModule, HammerGestureConfig, HammerModule, HAMMER_GESTURE_CONFIG } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { ChartsModule } from "@progress/kendo-angular-charts";
import { GridModule } from "@progress/kendo-angular-grid";
import { InputsModule } from "@progress/kendo-angular-inputs";
import "hammerjs";
import * as Hammer from "hammerjs";
import { DatePipe } from '@angular/common';
import { SharedModule } from "../app/shared/shared.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoaderModule } from "./shared/components/loader/loader.component";
import { APIInterceptor } from "./shared/interceptors/api.interceptor";
import { AuthGuard } from './shared/interceptors/auth.guard';
import { LoaderService } from "./shared/services/loader.service";

export function httpTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
export class MyHammerConfig extends HammerGestureConfig {
    overrides = <any>{
        swipe: { direction: Hammer.DIRECTION_ALL },
    };
}

@NgModule({
    declarations: [AppComponent],
    imports: [
        GooglePlaceModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        SharedModule,
        GridModule,
        ButtonsModule,
        InputsModule,
        ChartsModule,
        HammerModule,
        HttpClientModule,

        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: httpTranslateLoader,
                deps: [HttpClient]
            }
        }),
        LoaderModule
    ],
    providers: [
        LoaderService,
        AuthGuard,
        DatePipe,
        {
            provide: APP_BASE_HREF,
            useValue: "/",
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: APIInterceptor,
            multi: true,
        },
        { provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig },
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        }
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
