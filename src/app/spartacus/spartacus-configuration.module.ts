import { NgModule } from '@angular/core';
import { translationChunksConfig, translations as ENGLISH_TRANSLATIONS } from "@spartacus/assets";
import { FeaturesConfig, I18nConfig, OccConfig, provideConfig, SiteContextConfig, ConfigModule, DeferLoadingStrategy } from "@spartacus/core";
import { defaultCmsContentProviders, layoutConfig, mediaConfig } from "@spartacus/storefront";
import { customConfig, customTranslations } from 'src/locales';

const GERMAN_TRANSLATIONS = {
  de: {
    common:  {
      searchBox: {
        placeholder: 'Some german words'
      }
    }
  }
}
@NgModule({
  declarations: [],
  imports: [
  ],
  providers: [provideConfig(layoutConfig), provideConfig(mediaConfig), ...defaultCmsContentProviders, provideConfig(<OccConfig>{
    backend: {
      occ: {
        baseUrl: 'https://localhost:9002/',
      }
    },
  }), provideConfig(<SiteContextConfig>{
    context: {
      // ONLY IF WE DON'T WANT TO USE BACKEND SETTINGS!
      // urlParameters: ['customParam','baseSite','language','currency'],
      // baseSite: ['electronics-spa'],
      // customParam: ['test'],
    },
  }), provideConfig(<I18nConfig>{
    i18n: {
      resources: {
        ...ENGLISH_TRANSLATIONS,
        ...GERMAN_TRANSLATIONS
      },
      chunks: translationChunksConfig,
      fallbackLang: 'en'
    },
  }), provideConfig(<I18nConfig>{
    i18n: {
      resources: customTranslations,
      chunks: customConfig,
    }
  }), provideConfig(<ConfigModule>{
    direction: {
      detect: true,
      default: "ltr",
      rtlLanguages: ["he", "ar"],
    },
  }), provideConfig(<FeaturesConfig>{
    features: {
      level: '4.3'
    }
  }),
  provideConfig(<FeaturesConfig>{
    deferredLoading: {
      strategy: DeferLoadingStrategy.DEFER,
      intersectionMargin: '50px',
    }
  })
  ]
})
export class SpartacusConfigurationModule { }
