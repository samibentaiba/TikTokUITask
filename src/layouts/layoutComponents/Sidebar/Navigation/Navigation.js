import { memo } from 'react';
import classNames from 'classnames/bind';

import styles from './Navigation.module.scss';
import NavigationItem from './NavigationItem';
import SvgIcon from '~/components/SvgIcon';
import {
    iconHouseRegular,
    iconHouse,
    iconFriendRegular,
    iconExploreRegular,
    iconExplore,
    iconFriend,
    iconLive,
    iconLiveRegular,
    iconMyProfile,
} from '~/components/SvgIcon/iconsRepo';
import config from '~/configs';
import assetImages from '~/assets/images';

const cx = classNames.bind(styles);

function Navigation() {
    const my_user = {
        id: 1,
        first_name: 'Sami',
        last_name: 'Bentaiba',
        nickname: 'bentaidev',
        avatar: assetImages.avartar,
        bio: 'Trang này chứa thông tin chi tiết của một nhân tài 🤫🤫',
        tick: true,
        is_followed: true,
        followings_count: 1,
        followers_count: 384,
        likes_count: 7070,
        website_url: 'https://www.facebook.com/share/HCN8WkdFAkxEoAaK/?mibextid=wwXIfr',
        facebook_url: '',
        youtube_url: '',
        twitter_url: '',
        instagram_url: '',
    };

    return (
        <nav className={cx('wrapper')}>
            <NavigationItem
                title="Home"
                icon={<SvgIcon icon={iconHouseRegular} />}
                iconActive={<SvgIcon icon={iconHouse} />}
                to={config.routes.home}
            />
            <NavigationItem
                title="For you"
                icon={<SvgIcon icon={iconExploreRegular} />}
                iconActive={<SvgIcon icon={iconExplore} />}
                to={config.routes.explore}
            />
            <NavigationItem
                title="Following"
                icon={<SvgIcon icon={iconFriendRegular} />}
                iconActive={<SvgIcon icon={iconFriend} />}
                to={config.routes.following}
            />
            <NavigationItem
                title="LIVE"
                icon={<SvgIcon icon={iconLiveRegular} />}
                iconActive={<SvgIcon icon={iconLive} />}
                to={config.routes.live}
            />
            <NavigationItem
                title="You"
                icon={<SvgIcon icon={iconMyProfile} />}
                iconActive={<SvgIcon icon={iconMyProfile} />}
                to={"/@bentaidev"}
                state={my_user}
            />
        </nav>
    );
}

export default memo(Navigation);