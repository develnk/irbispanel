import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app.module';

if (String('<%= BUILD_TYPE %>') === 'prod') { enableProdMode(); }

// Compile and launch the module with i18n providers
// let TP = new TranslationProviders();
// TP.getTranslationFile().then((providers: any) => {
// const options: any = { providers };
platformBrowserDynamic().bootstrapModule(AppModule/*, options*/);
// });
