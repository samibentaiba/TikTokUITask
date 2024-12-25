import SvgIcon from '~/components/SvgIcon';
import {
    iconCreators,
    iconDarkMode,
    iconLanguge,
    iconLogout,
    iconProfile,
    iconQuestion,
    iconSetting,
    iconTiktokCoin,
    iconTiktokLive,
} from '~/components/SvgIcon/iconsRepo';

export const PUBLIC_MENU = [
    {
        icon: <SvgIcon icon={iconCreators} />,
        title: 'Tools for creators',
    },
    {
        icon: <SvgIcon icon={iconLanguge} />,
        title: 'Vietnamese',
        children: {
            title: 'Language',
            data: [
                {
                    title: 'العربية',
                },
                {
                    title: 'Cebuano (Pilipinas)',
                },
                {
                    title: 'Čeština (Česká republika)',
                },
                {
                    title: 'Deutsch',
                },
                {
                    title: 'English',
                },
                {
                    title: 'Ελληνικά (Ελλάδα)',
                },
                {
                    title: 'Español',
                },
                {
                    title: 'Suomi (Suomi)',
                },
                {
                    title: 'Filipino (Pilipinas)',
                },
                {
                    title: 'Français',
                },
                {
                    title: 'हिंदी',
                },
                {
                    title: 'Magyar (Magyarország)',
                },
                {
                    title: 'Bahasa Indonesia (Indonesia)',
                },
                {
                    title: 'Italiano (Italia)',
                },
                {
                    title: '日本語（日本）',
                },
                {
                    title: 'Basa Jawa (Indonesia)',
                },
                {
                    title: 'ខ្មែរ (កម្ពុជា)',
                },
                {
                    title: '한국어 (대한민국)',
                },
                {
                    title: 'Bahasa Melayu (Malaysia)',
                },
                {
                    title: 'မြန်မာ (မြန်မာ)',
                },
                {
                    title: 'Nederlands (Nederland)',
                },
                {
                    title: 'Polski (Polska)',
                },
                {
                    title: 'Português (Brasil)',
                },
                {
                    title: 'Română (Romania)',
                },
                {
                    title: 'Русский (Россия)',
                },
                {
                    title: 'Svenska (Sverige)',
                },
                {
                    title: 'ไทย (ไทย)',
                },
                {
                    title: 'Türkçe (Türkiye)',
                },
                {
                    title: 'Українська (Україна)',
                },
                {
                    title: 'اردو',
                },
                {
                    title: 'Tiếng Việt (Việt Nam)',
                },
                {
                    title: 'বাঙ্গালি (ভারত)',
                },
                {
                    title: '简体中文',
                },
                {
                    title: '繁體中文',
                },
            ],
        },
    },
    {
        icon: <SvgIcon icon={iconQuestion} />,
        title: 'Feedback and help',
        // to: '/feedback',
    },
    {
        icon: <SvgIcon icon={iconDarkMode} />,
        title: 'Dark mode',
        children: {
            title: 'Dark mode',
            data: [
                {
                    title: 'Use device theme',
                },
                {
                    title: 'Dark mode',
                },
                {
                    title: 'Bright mode',
                },
            ],
        },
    },
];

export const PRIVATE_MENU = [
    {
        icon: <SvgIcon icon={iconProfile} />,
        title: 'View profile',
    },
    {
        icon: <SvgIcon icon={iconTiktokCoin} />,
        title: 'Get coins',
    },
    {
        icon: <SvgIcon icon={iconTiktokLive} />,
        title: 'LIVE Studio',
    },
    {
        icon: <SvgIcon icon={iconSetting} />,
        title: 'Settings',
    },

    ...PUBLIC_MENU,

    {
        icon: <SvgIcon icon={iconLogout} />,
        title: 'Sign out',
        separate: true,
    },
];
