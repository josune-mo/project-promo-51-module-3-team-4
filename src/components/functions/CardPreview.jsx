import defaultAvatar from '../../images/default-avatar.svg'


function CardPreview() {
  const avatar = defaultAvatar;
  return (
    <div className='styleCardPreview'>
      <article className="cardStyle">
        <section className='cardStyle__header'>
          <img src={avatar} alt="profile-pic" className="cardStyle__profile-pic" />
          <div className='cardStyle__body'>
            <p className='cardStyle__role'>Full Stack Developer</p>
            <h2 className='cardStyle__name'>Emmelie Björklund</h2>
          </div>
        </section>

        <section className='cardStyle__content'>
          <p className='cardStyle__personal-project'>Personal Project Card</p>
          <h3 className='cardStyle__title'>Elegant</h3>
          <h4 className='cardStyle__subtitle'>Diseños Exclusivos</h4>
          <p className='cardStyle__description'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed reiciendis ipsa voluptatem vero sit, doloribus beatae quaerat deleniti laborum cupiditate laboriosam dolorem autem aut magnam debitis nesciunt eum. Molestiae, vel!
          </p>

          <div className='cardStyle__tech-list'>
            <p className='cardStyle__tech-tag'>React JS - HTML - CSS</p>
            <div className='cardStyle__contact-links'>
              {/* Aquí puedes agregar íconos o enlaces */}
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
export default CardPreview;