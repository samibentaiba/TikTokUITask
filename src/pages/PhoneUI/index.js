import React, { useEffect, useState, useRef } from 'react';

import './App.scss';
import assetImages from '~/assets/images';
import VideoCard from '~/components/PhoneComponents/VideoCard';
import BottomNavbar from '~/components/PhoneComponents/BottomNavbar';
import TopNavbar from '~/components/PhoneComponents/TopNavbar';

const videoUrls = [

  {
    url: require('../../videos/video1.mp4'),
    profilePic: assetImages.avartar,
    username: 'bentaidev',
    description: 'Finding peace in the serene landscape of Swiss nature 😍🇨🇭 #italy #dolomites #landscape #relax #swissviews #viral ',
    //song: 'Nép vào anh và nghe anh hát - Cover - Hoàng Dũng',
    likes: 999,
    comments: 202,
    saves: 12,
    shares: 29,
  },
];


function App() {
  const [videos, setVideos] = useState([]);
  const videoRefs = useRef([]);

  useEffect(() => {
    const shuffledResult = videoUrls.sort(() => Math.random() - 0.5);
    setVideos(shuffledResult);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.8, // Adjust this value to change the scroll trigger point
    };

    // This function handles the intersection of videos
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const videoElement = entry.target;
          videoElement.play();
        } else {
          const videoElement = entry.target;
          videoElement.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // We observe each video reference to trigger play/pause
    videoRefs.current.forEach((videoRef) => {
      observer.observe(videoRef);
    });

    // We disconnect the observer when the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, [videos]);

  // This function handles the reference of each video
  const handleVideoRef = (index) => (ref) => {
    videoRefs.current[index] = ref;
  };

  return (
    <div className="app">
      <div className="container">
        <TopNavbar className="top-navbar" />
        {/* Here we map over the videos array and create VideoCard components */}
        {videos.map((video, index) => (
          <VideoCard
            key={index}
            username={video.username}
            description={video.description}
            song={video.song}
            likes={video.likes}
            saves={video.saves}
            comments={video.comments}
            shares={video.shares}
            url={video.url}
            profilePic={video.profilePic}
            setVideoRef={handleVideoRef(index)}
            autoplay={index === 0}
          />
        ))}
        <BottomNavbar className="bottom-navbar" />
      </div>
    </div>
  );
  
}

export default App;
