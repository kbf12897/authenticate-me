import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "./SongPage.css";

function SongPage() {
    const songsObj = useSelector((state) => state.songState.songs);
    const songs = Object.values(songsObj);
    const { songId } = useParams();
    const song = songs[songId];

    return (
        <div>
            <div className="song-info">
                <h3 className="song-title">{song.title}</h3>
                <img
                    className="no-song-img"
                    src="https://cdn2.iconfinder.com/data/icons/audio-files-essential/48/v-30-512.png"
                />
                <div className="comment-div">
                    <h4 className="comment-label">Comments</h4>
                    <div className="comment-input-button">
                        <input
                            className="comment-input"
                            placeholder="Write a comment"
                            required
                        ></input>
                        <button className="comment-button">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SongPage;
