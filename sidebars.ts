import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

export default {
    default: [
        {
            type: 'doc',
            id: 'index',
            label: 'Привет!'
        },
        {
            type: 'doc',
            id: 'important',
            label: 'Обязательно к прочтению'
        },
        {
            type: 'category',
            label: 'Иммунология',
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'immunology'
                }
            ]
        },
        {
            type: 'category',
            label: 'Для любопытных',
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'for-curious'
                }
            ]
        }
    ]
} as SidebarsConfig;