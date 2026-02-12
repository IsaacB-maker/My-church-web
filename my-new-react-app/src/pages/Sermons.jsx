import { useEffect, useRef, useState } from "react";
import "./Sermons.css";

function Sermons() {
  // ===== SERMON DATA =====
  const sermons = [
    {
      title: "Walking by Faith",
      preacher: "Pastor John",
      date: "Jan 14, 2026",
      scripture: "Hebrews 11:1",
      videoId: "_-E61hisfZ4",
      audio: "/audio/walking-by-faith.mp3",
    },
    {
      title: "The Power of Prayer",
      preacher: "Pastor Grace",
      date: "Jan 21, 2026",
      scripture: "James 5:16",
      videoId: "VIDEO_ID_2",
      audio: "/audio/power-of-prayer.mp3",
    },
    {
      title: "Living in God’s Will",
      preacher: "Pastor Samuel",
      date: "Jan 28, 2026",
      scripture: "Romans 12:2",
      videoId: "VIDEO_ID_3",
      audio: "/audio/living-in-gods-will.mp3",
    },
  ];

  // ===== STATE =====
  const [searchTerm, setSearchTerm] = useState("");
  const playerRef = useRef(null);

  // ===== FILTER LOGIC =====
  const filteredSermons = sermons.filter(
    (sermon) =>
      sermon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sermon.preacher.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sermon.scripture.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // ===== YOUTUBE PLAYER SETUP =====
  useEffect(() => {
    if (window.YT) {
      initPlayer();
    } else {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      window.onYouTubeIframeAPIReady = initPlayer;
      document.body.appendChild(tag);
    }

    function initPlayer() {
     playerRef.current = new window.YT.Player("yt-player", {
    height: "100%",
    width: "100%",
    videoId: "aSuyP_kM_wU", // 🔹 FIRST video to load
    playerVars: {
      autoplay: 1,          // ▶ autoplay on page load
      controls: 1,
      rel: 0,
      modestbranding: 1,
      playsinline: 1,
      playlist: [
        "aSuyP_kM_wU",   // video 1
        "o71iziOqD1w&t",    // video 2
        "_-E61hisfZ4",    // video 3
        "CbKURcAx5DA&t",
        // add more video IDs here
      ],
        },
      });
    }
  }, []);

  return (
    <div className="sermons-page">
      {/* HERO */}
      <section className="sermons-hero">
        <h1>Sermons</h1>
        <p>Messages to strengthen your faith</p>
      </section>

      {/* MAIN VIDEO */}
      <section className="sermons-content">
        <div className="video-container">
          <div className="video-wrapper">
            <div id="yt-player"></div>
          </div>
        </div>

        {/* NEXT / PREVIOUS BUTTONS */}
        <div className="sermon-controls">
          <button onClick={() => playerRef.current?.previousVideo()}>
            ⏮ Previous
          </button>
          <button onClick={() => playerRef.current?.nextVideo()}>
            Next ⏭
          </button>
        </div>

        <a
          href="https://www.youtube.com/@electusgospelministriesint/videos"
          target="_blank"
          rel="noopener noreferrer"
          className="watch-btn"
        >
          View All Sermons on YouTube
        </a>
      </section>

      {/* SEARCH */}
      <div className="sermons-search">
        <input
          type="text"
          placeholder="Search sermons by title, preacher, or scripture..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* SERMON GRID */}
      <section className="sermons-grid">
        {filteredSermons.map((sermon, index) => (
          <div
            className="sermon-card"
            key={index}
            onClick={() =>
              playerRef.current?.loadVideoById({
                videoId: sermon.videoId,
              })
            }
          >
            <h3>{sermon.title}</h3>
            <div className="sermon-meta">
              {sermon.preacher} • {sermon.date}
            </div>
            <div className="sermon-scripture">{sermon.scripture}</div>
            <a
              href={sermon.audio}
              download
              className="download-btn"
              onClick={(e) => e.stopPropagation()}
            >
              Download Audio
            </a>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Sermons;
