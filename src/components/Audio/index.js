import React, {useEffect} from "react";
import section from "../../containers/Section";

import "./index.scss";

const Audio = ({ audio }) => {
    useEffect(() => {
        document.addEventListener('play', function(e){
            const audios = document.getElementsByTagName('audio');
            for (let i = 0, len = audios.length; i < len;i++){
                if (audios[i] !== e.target){
                    audios[i].pause();
                }
            }
        }, true);
    }, [])

    return (
        <div className="audio-wrapper">
          {audio.map((({ title, file }) => (
            <div className="audio-item">
              <h3>{title}</h3>
              <audio controls>
                  <source src={file} type="audio/mpeg" />
                    Your browser does not support the audio element.
              </audio>
            </div>
          )))}
        </div>
    );
};

export default section(Audio, {id: "audio", title: "AUDIO"});

