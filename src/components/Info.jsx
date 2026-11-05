export default function Info() {
  return (
    <section className="section-info">
      <img
        src="/src/assets/profile-image.png"
        alt="Profile image of Laura Smith"
      />

      <h1>Laura Smith</h1>
      <p>Frontend Developer</p>

      <a href="#" className="website-link">
        laurasmith.website
      </a>

      <div className="info-btns">
        <a href="#" className="btn btn-email">
          <i class="fa-solid fa-envelope"></i>
          Email
        </a>
        <a href="#" className="btn btn-linkedin">
          <i class="fa-brands fa-linkedin"></i>
          LinkedIn
        </a>
      </div>
    </section>
  );
}
