import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./image/alexa.png";
import CortanaImage from "./image/cortana.png";
import SiriImage from "./image/siri.png";

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="Alexa"
                handle="@alexa99"
                image={AlexaImage}
                descrition="Alexa was createt by Amazon and helps you buy things"
              />
            </div>

            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                handle="@Cortana33"
                image={CortanaImage}
                descrition="Cortana was createt by Microsoft. Who know what it does?"
              />
            </div>

            <div className="column is-4">
              <ProfileCard
                title="Siri"
                handle="@Siri01"
                image={SiriImage}
                descrition="Siri was createt by Apple and is being phased out"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default App;
