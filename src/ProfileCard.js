function ProfileCard({ title, handle, image, descrition }) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image} alt="logos" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{title}</p>
          <p className="title is-6">{handle}</p>
        </div>
        <div className="content">{descrition}</div>
      </div>
    </div>
  );
}

export default ProfileCard;
