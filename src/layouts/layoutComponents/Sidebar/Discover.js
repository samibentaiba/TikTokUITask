import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import BorderTopContainer from '~/components/BorderTopContainer';
import Button from '~/components/Button';
import SvgIcon from '~/components/SvgIcon';
import { iconTag, iconMusic } from '~/components/SvgIcon/iconsRepo';
import LineLoading from '~/components/Loading/LineLoading';

const cx = classNames.bind(styles);

const discoverListFake = [
    {
        type: 'hashtag',
        title: 'fyp',
    },
    {
        type: 'hashtag',
        title: 'tiktok',
    },
    {
        type: 'hashtag',
        title: 'trending',
    },
    {
        type: 'hashtag',
        title: 'foryoupage',
    },
    {
        type: 'hashtag',
        title: 'viralvideos',
    },
    {
        type: 'music',
        title: 'beabadoobee Glue Song',
    },
    {
        type: 'hashtag',
        title: 'guitar',
    },
    {
        type: 'hashtag',
        title: 'coding',
    },
    {
        type: 'hashtag',
        title: 'game',
    },
    {
        type: 'music',
        title: 'ROSÉ & Bruno Mars - APT.',
    },
    {
        type: 'music',
        title: 'NLE Choppa - Gang Babyfyp.',
    },
];

function Discover() {
    const [discoverList, setDiscoverList] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setDiscoverList(discoverListFake);
        }, 5000);
    }, []);

    return (
        <BorderTopContainer className={cx('discover-container')}>
            <h3 className={cx('title')}>Discover</h3>
            <section className={cx('content')}>
                {discoverList.map((disItem, index) => {
                    const isHashtag = disItem.type === 'hashtag';
                    return (
                        <Button
                            key={index}
                            className={cx('btn', {
                                hashtag: isHashtag,
                            })}
                            primary
                            xsmall
                            rounded
                            leftIcon={<SvgIcon icon={isHashtag ? iconTag : iconMusic} />}
                        >
                            {disItem.title}
                        </Button>
                    );
                })}
                {discoverList.length < 1 && (
                    <>
                        <LineLoading />
                        <LineLoading />
                    </>
                )}
            </section>
        </BorderTopContainer>
    );
}

export default Discover;
