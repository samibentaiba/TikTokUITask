import { useEffect, useRef, useState } from 'react';
import { InView } from 'react-intersection-observer';
import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import SuggestVideo from '~/components/Videos/SuggestVideo';
// import { videoService } from '~/services';
import assetImages from '~/assets/images';
// import TiktokLoading from '~/components/TiktokLoading';
// import SvgIcon from '~/components/SvgIcon';
import VideoContext from '~/Context/VideoContext';

const cx = classNames.bind(styles);

function Home() {
    // State
    const [videoList, setVideoList] = useState([]);
    // const [page, setPage] = useState(Math.random() * 10);
    const [volume, setVolume] = useState(0.5);
    const [muted, setMuted] = useState(true);

    // Ref
    const inViewArr = useRef([]);

    // Set value for context
    const contextValue = {
        volumeState: [volume, setVolume],
        mutedState: [muted, setMuted],
        inViewArr: inViewArr.current,
    };

    // Call API to load video list
    useEffect(() => {
        const fetchVideoList = async () => {
            // const result = await videoService.getSuggestVideo(page);
            // console.log('result::', result);

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

            const shuffledResult = result.sort(() => Math.random() - 0.5);
            setVideoList([...shuffledResult]);
        };

        fetchVideoList();
    }, []);

    return (
        <VideoContext value={contextValue}>
            <div className={cx('wrapper')}>
                {videoList.map((video, index) => {
                    return (
                        <InView key={index} threshold={0.8}>
                            {({ inView, ref: observeRef }) => (
                                <SuggestVideo ref={observeRef} isInView={inView} videoInfo={video} videoId={index} />
                            )}
                        </InView>
                    );
                })}
                {/* <InView onChange={(inView) => inView && setPage(handleRandomPage(1, 10))}>
                    <SvgIcon className={cx('auto-load-more')} icon={<TiktokLoading />} />
                </InView> */}
            </div>
        </VideoContext>
    );
}

export default Home;
