import { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';

import styles from './Profile.module.scss';
import Image from '~/components/Img';
import Button from '~/components/Button';
import { BanIcon, EllipsisHorizontalIcon, FlagIcon, LinkIcon, ShareIcon, UserRegularIcon } from '~/components/Icons';
import ShareAction from '~/components/ShareAction';
import VideoPreview from '~/components/VideoPreview';
import Popper from '~/components/Popper';
import { ModalContext } from '~/components/ModalProvider';
import assetImages from '~/assets/images';

const cx = classNames.bind(styles);

function Profile() {
    const location = useLocation();

    console.log("location.state", location.state)

    const data = location.state;

    const [videos, setVideos] = useState([]);
    const context = useContext(ModalContext);

    useEffect(() => {
        if (data.nickname === 'bentaidev') {
            // Mock data
            const result = [

                {
                    id: 1,
                    user_id: 1,
                    type: '',
                    thumb_url: require('~/assets/images/Thumbnail1.jpg'),
                    file_url: require('../../videos/video1.mp4'),
                    description:
                        'Finding peace in the serene landscape of Swiss nature 😍🇨🇭 #italy #dolomites #landscape #relax #swissviews #viral ',
                    //music: 'Nép vào anh và nghe anh hát - Cover - Sami Dũng',
                    is_liked: true,
                    likes_count: 999,
                    comments_count: 202,
                    shares_count: 29,
                    views_count: 1408,
                    viewable: 'public',
                    allows: ['comment', 'duet', 'stitch'],
                    published_at: '2024-09-09 16:41:34',
                    created_at: '2024-09-09 16:41:34',
                    updated_at: '2024-09-09 16:41:36',
                    user: {
                        id: 1,
                        first_name: 'Sami',
                        last_name: 'Bentaiba',
                        nickname: 'bentaidev',
                        avatar: assetImages.avartar,
                        bio: 'Hi, I’m Sami Bentaiba and I’m into tech.',
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
                    },
                    meta: {
                        file_format: 'mp4',
                        mime_type: 'video/mp4',
                        video: {
                            resolution_x: 768,
                            resolution_y: 1071,
                        },
                    },
                },
            ];

            setVideos(result);
        } else {
            fetch(`https://tiktok.fullstack.edu.vn/api/users/@${data.nickname}`)
                .then((response) => response.json())
                .then((json) => setVideos(json.data.videos));
        }
    }, [data.nickname]);

    return (
        <div className={cx('profile-wrapper')}>
            <div className={cx('info-container')}>
                <div className={cx('info')}>
                    <div className={cx('basic')}>
                        <Image className={cx('avatar')} src={data.avatar} alt={data.avatar} />
                        <div className={cx('text')}>
                            <div className={cx('username')}>{data.nickname}</div>
                            <div className={cx('name')}>{data.full_name || `${data.first_name} ${data.last_name}`}</div>
                            <Button color primary style={{ minWidth: '208px' }} onClick={context.handleShowModal}>
                                Follow
                            </Button>
                        </div>
                    </div>

                    <div className={cx('counts')}>
                        <div className={cx('following')}>
                            <strong>{data.followings_count}</strong> Mutual
                        </div>
                        <div className={cx('followers')}>
                            <strong>{data.followers_count}</strong> Follower
                        </div>
                        <div className={cx('likes')}>
                            <strong>{data.likes_count}</strong> Following
                        </div>
                    </div>

                    <div className={cx('bio')}>{data.bio ? data.bio : 'Chưa có tiểu sử.'}</div>

                    <a href={data.website_url} target="blank">
                        {data.website_url && (
                            <div className={cx('website')}>
                                <LinkIcon className={cx('link-icon')} />
                                {data.website_url}
                            </div>
                        )}
                    </a>
                </div>
                <div className={cx('side-btns')}>
                    <div className={cx('share-btn')}>
                        <ShareAction offset={[-100, 10]}>
                            <div>
                                <ShareIcon />
                            </div>
                        </ShareAction>
                    </div>

                    <HeadlessTippy
                        interactive
                        hideOnClick="false"
                        placement="bottom-end"
                        offset={[0, 10]}
                        delay={[0, 700]}
                        zIndex="99"
                        render={(attrs) => (
                            <div tabIndex="-1" {...attrs}>
                                <Popper className={cx('more-tab')}>
                                    <div className={cx('action-report')}>
                                        <p>
                                            <FlagIcon height="16" /> Report
                                        </p>
                                    </div>
                                    <div className={cx('action-block')}>
                                        <p>
                                            <BanIcon /> Block
                                        </p>
                                    </div>
                                </Popper>
                            </div>
                        )}
                    >
                        <div>
                            <EllipsisHorizontalIcon />
                        </div>
                    </HeadlessTippy>
                </div>
            </div>

            <div className={cx('video-container')}>
                <div className={cx('tabs')}>
                    <p className={cx('video-tab')}>Videos</p>
                    <p className={cx('liked-tab')}>Liked</p>
                    <div className={cx('underline')}></div>
                </div>

                {videos.length > 0 && (
                    <div className={cx('videos')}>
                        {videos.map((video, index) => {
                            return <VideoPreview data={video} key={index} />;
                        })}
                    </div>
                )}

                {videos.length === 0 && (
                    <div className={cx('no-content')}>
                        <div>
                            <UserRegularIcon />
                            <p className={cx('title')}>No content</p>
                            <p className={cx('description')}>This user has not published any videos.</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Profile;
