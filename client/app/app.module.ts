import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MaterialModule} from './app.material';
import {ServicesModule} from './services/services.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        MaterialModule,
        ServicesModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {
}
