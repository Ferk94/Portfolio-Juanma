'use client';
import { useRef, useState } from 'react';
import styles from './RadioPlayer.module.css';

const playlist = [
  {
    title: 'Happy Rock - Richard León',
    src: '/songs/happyrock.mp3',
  },
  {
    title: 'Guzheng City - Mcleod',
    src: '/songs/guzhengCity.mp3',
  },
  {
    title: 'Mesmerizing Galaxy - Mcleod',
    src: '/songs/mesmerizingGalaxy.mp3',
  }
];

export default function RadioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMinimized, setIsMinimized] = useState(false);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    const next = (currentTrack + 1) % playlist.length;
    setCurrentTrack(next);
    setIsPlaying(true);
    setTimeout(() => audioRef.current?.play(), 0);
  };

  const handlePrev = () => {
    const prev = (currentTrack - 1 + playlist.length) % playlist.length;
    setCurrentTrack(prev);
    setIsPlaying(true);
    setTimeout(() => audioRef.current?.play(), 0);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div className={`${styles.container} ${isMinimized ? styles.minimized : ''}`}>
      <button className={styles.minimizeBtn} onClick={toggleMinimize}>
        {isMinimized ? '+' : '-'}
      </button>
      {!isMinimized && (
        <>
          <h3 className={styles.title}>🎵 Radio Juanma</h3>
          <p className={styles.track}>{playlist[currentTrack].title}</p>

          <div className={styles.controls}>
            <button onClick={handlePrev}>⏮️</button>
            <button onClick={handlePlayPause}>{isPlaying ? '⏸️' : '▶️'}</button>
            <button onClick={handleNext}>⏭️</button>
          </div>

          <div className={styles.progressSection}>
            <input
                type="range"
                min="0"
                max={duration}
                step="0.1"
                value={currentTime}
                onChange={handleSeek}
                className={`${styles.slider} ${styles.progressSlider}`}
                style={{
                    background: `linear-gradient(to right, #00c853 ${(currentTime / duration) * 100}%, #888 ${(currentTime / duration) * 100}%)`
                }}
            />
            <span className={styles.timeInfo}>-{formatTime(duration - currentTime)}</span>
          </div>

          <div className={styles.volumeSection}>
            <span className={styles.volumeIcon}>🔊</span>
            <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className={`${styles.slider} ${styles.volumeSlider}`}
                style={{
                    background: `linear-gradient(to right, #0288d1 ${volume * 100}%, #888 ${volume * 100}%)`
                }}
            />
          </div>
        </>
      )}

      {isMinimized && (
        <div className={styles.minimizedContent}>
          <p className={styles.minimizedTrack}>{playlist[currentTrack].title}</p>
          <div className={styles.controls}>
            <button onClick={handlePrev}>⏮️</button>
            <button onClick={handlePlayPause}>{isPlaying ? '⏸️' : '▶️'}</button>
            <button onClick={handleNext}>⏭️</button>
          </div>
        </div>
      )}

      <audio
        ref={audioRef}
        src={playlist[currentTrack].src}
        onEnded={handleNext}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        autoPlay={isPlaying}
      />
    </div>
  );
}
