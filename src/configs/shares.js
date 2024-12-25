import SvgIcon from '~/components/SvgIcon';
import {
    iconEmail,
    iconEmbed,
    iconFacebookShare,
    iconLine,
    iconLink,
    iconLinkedIn,
    iconPinterest,
    iconPlaneShare,
    iconTelegram,
    iconTwitter,
    iconWhatsApp,
} from '~/components/SvgIcon/iconsRepo';

const shares = [
    {
        title: 'More',
        icon: <SvgIcon icon={iconEmbed} />,
    },
    {
        title: 'Send to friends',
        icon: <SvgIcon icon={iconPlaneShare} />,
    },
    {
        title: 'Share with Facebook',
        icon: <SvgIcon icon={iconFacebookShare} />,
        href: 'https://facebook.com',
    },
    {
        title: 'Copy link',
        icon: <SvgIcon icon={iconLink} />,
    },
    {
        title: 'Share with WhatsApp',
        icon: <SvgIcon icon={iconWhatsApp} />,
        href: 'https://wa.me',
    },
    {
        title: 'Share to Twitter',
        icon: <SvgIcon icon={iconTwitter} />,
        href: 'https://twitter.com',
    },
    {
        title: 'Share with LinkedIn',
        icon: <SvgIcon icon={iconLinkedIn} />,
        href: 'https://www.linkedin.com',
    },
    {
        title: 'Share with Telegram',
        icon: <SvgIcon icon={iconTelegram} />,
        href: 'https://t.me',
    },
    {
        title: 'Share with Email',
        icon: <SvgIcon icon={iconEmail} />,
        href: 'mailto:',
    },
    {
        title: 'Share with Line',
        icon: <SvgIcon icon={iconLine} />,
        href: 'https://lineit.line.me',
    },
    {
        title: 'Share to Pinterest',
        icon: <SvgIcon icon={iconPinterest} />,
        href: 'https://pinterest.com',
    },
];

export default shares;
