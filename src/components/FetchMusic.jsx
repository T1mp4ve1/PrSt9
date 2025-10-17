import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";

const FetchMusic = ({ artistName }) => {
  const [musArray, setMusArray] = useState([]);

  const fillMusicSection = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
          artistName
      );
      if (response.ok) {
        let { data } = await response.json();
        console.log(data);
        setMusArray(data);
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }
  };
  useEffect(() => {
    fillMusicSection();
  }, []);

  return (
    <>
      {musArray?.slice(0, 4).map((track) => (
        
        <Col key={track.id} className="text-center">
          <img
            className="img-fluid"
            src={track.album.cover_medium}
            alt="track"
          />
          <p>
            Track: {track.title} Artist: {track.artist.name}
          </p>
        </Col>
      ))}
    </>
  );
};
export default FetchMusic;
