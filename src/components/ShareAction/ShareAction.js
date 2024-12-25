import { useState } from 'react';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';

import styles from './ShareAction.module.scss';
import { ChevronDownIcon, EmailIcon, EmbedIcon, LinkRoundedIcon } from '~/components/Icons';
import Popper from '~/components/Popper';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function ShareAction({ children, offset }) {
    const [expanded, setExpanded] = useState(false);

    const SHARE_MENU = [
        {
            icon: <EmbedIcon />,
            title: 'More',
        },
        {
            icon: <img src={images.facebook} alt="" />,
            title: 'Share on Facebook',
        },
        {
            icon: <img src={images.whatsapp} alt="" />,
            title: 'Share on WhatsApp',
        },
        {
            icon: <img src={images.twitter} alt="" />,
            title: 'Share on Twitter',
        },
        {
            icon: <LinkRoundedIcon />,
            title: 'Copy link',
        },
    ];

    const EXPANDED_SHARE_MENU = [
        ...SHARE_MENU,
        {
            icon: <img src={images.linkedin} alt="" />,
            title: 'Share on LinkedIn',
        },
        {
            icon: <img src={images.telegram} alt="" />,
            title: 'Share on Telegram',
        },
        {
            icon: <EmailIcon />,
            title: 'Share via Email',
        },
        {
            icon: <img src={images.line} alt="" />,
            title: 'Share on LINE',
        },
        {
            icon: <img src={images.whatsapp} alt="" />,
            title: 'Share on Pinterest',
        },
    ];

    return (
        <HeadlessTippy
            interactive
            hideOnClick="false"
            placement="top"
            offset={offset}
            delay={[200, 700]}
            zIndex="99"
            render={(attrs) => (
                <div tabIndex="-1" {...attrs}>
                    <Popper className={cx('share-tab')}>
                        <div className={cx('share-wrapper')}>
                            {expanded
                                ? EXPANDED_SHARE_MENU.map((item, index) => {
                                      return (
                                          <div className={cx('share-item')} key={index}>
                                              {item.icon} {item.title}
                                          </div>
                                      );
                                  })
                                : SHARE_MENU.map((item, index) => {
                                      return (
                                          <div className={cx('share-item')} key={index}>
                                              {item.icon} {item.title}
                                          </div>
                                      );
                                  })}

                            {!expanded && (
                                <div className={cx('more-btn')} onClick={() => setExpanded(true)}>
                                    <ChevronDownIcon />
                                </div>
                            )}
                        </div>
                    </Popper>
                </div>
            )}
            onHide={() => setExpanded(false)}
        >
            {children}
        </HeadlessTippy>
    );
}

export default ShareAction;
