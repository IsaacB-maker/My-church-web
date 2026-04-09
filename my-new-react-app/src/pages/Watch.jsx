import { useEffect, useState } from "react";
import "./Watch.css";

function Watch() {
  const [isLive, setIsLive] = useState(false);

  // ===== YouTube channel ID and playlist ID =====
  const ytChannelId = "UCxxxxxx"; // Replace with your actual channel ID
  const playlistId = "PLDX_EOXkSN-T9vazicFnDZNnFRbP1W_bm";

  // ===== Check live status =====
  useEffect(() => {
    const checkLiveStatus = async () => {
      try {
        // Using YouTube API or simulate for now
        // You could call: https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=CHANNEL_ID&type=video&eventType=live&key=YOUR_API_KEY
        // For now, let's simulate offline
        const live = false; // change to true if live
        setIsLive(live);
      } catch (error) {
        console.error("Error checking live status:", error);
        setIsLive(false);
      }
    };
    checkLiveStatus();
  }, []);

  return (
    <div className="watch-page">
      <section className="watch-hero">
        <h1>Watch Live</h1>
        <p>Join us live and worship with us wherever you are</p>
      </section>

      <section className="watch-stream">
        <div className="video-wrapper">
          {isLive ? (
            // Live stream embed
            <iframe
              src={`https://www.youtube.com/embed/live_stream?channel=${ytChannelId}`}
              title="Live Church Service"
              allowFullScreen
            ></iframe>
          ) : (
            // Fallback: latest sermons playlist
            <iframe
              src={`https://www.youtube.com/embed/videoseries?list=${playlistId}&autoplay=0&rel=0`}
              title="Latest Sermons Playlist"
              allowFullScreen
            ></iframe>
          )}
        </div>

        <div className="watch-info">
          <h2>Live Worship Experience</h2>
          <p>
            Join us live for worship and the Word. You can watch directly here
            or connect with us on TikTok Live.
          </p>

          <a
            href="https://www.youtube.com/@electusgospelministriesint"
            target="_blank"
            rel="noopener noreferrer"
            className="watch-btn"
          >
            Watch on YouTube
          </a>

          <a
            href="https://www.tiktok.com/@electusgospelministries"
            target="_blank"
            rel="noopener noreferrer"
            className="watch-btn tiktok-btn"
          >
            Watch on TikTok Live
          </a>
        </div>
      </section>
    </div>
  );
}

export default Watch;
