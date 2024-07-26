import type {Config} from '@docusaurus/types';
import * as process from "process";

//const isProd = process.env.IS_PROD_BUILD == "true";

export default {
    title: 'Попугай в халате',
    favicon: '/img/logo.svg',
    url: 'https://medicine.mirdukkkkk.space/',
    baseUrl: '/',
    trailingSlash: false,
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    i18n: {
        defaultLocale: 'ru',
        locales: ['ru'],
    },
    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                path: 'docs',
                routeBasePath: '/',
                sidebarPath: './sidebars.ts',
                editUrl: ({ _versionDocsDirPath, docPath }) =>
                    `https://github.com/mirdukkkkk/miniature-happiness/tree/docusaurus/docs/${docPath}`
            }
        ],
        [
            '@docusaurus/theme-classic',
            {
                customCss: './src/css/custom.css'
            }
        ]
    ],
    themeConfig: {
        logo: {
            src: '/img/logo.svg',
            alt: 'Логотип сайта'
        },
        navbar: {
            title: 'Попугай в халате',
            logo: {
                src: '/img/logo.svg',
                alt: 'Логотип сайта'
            }
        },
        colorMode: {
            defaultMode: 'dark',
            disableSwitch: false,
            respectPrefersColorScheme: false,
        }
    },
} satisfies Config;