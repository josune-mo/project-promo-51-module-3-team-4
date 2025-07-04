import defaultAvatar from '../../images/default-avatar.svg'


function CardPreview() {
  const avatar = defaultAvatar;
  return (
    <article className="card-preview">
      <section className='card-preview__profile'>
      <img src={avatar} alt="Profile preview" />
      <p className='card-preview__job'>Full Stack Developer</p>
      <h2 className='card-preview__name'>Emmelie Björklund</h2>
      </section>
      <section className='card-preview__project'>
        <p className='card-preview__label'>Personal Project Card</p>
        <h3 className='card-preview__title'>Elegant</h3>
        <h4 className='card-preview__subtitle'>Diseños Exclusivos</h4>
        <p className='card-preview__description'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed reiciendis ipsa voluptatem vero sit, doloribus beatae quaerat deleniti laborum cupiditate laboriosam dolorem autem aut magnam debitis nesciunt eum. Molestiae, vel!</p>
      </section>
      <section className='card-preview__links'>
        <p className='card-preview__techs'>React JS - HTML - CSS</p>
        <div className='card-preview__icons'>
          
        </div>
      </section>
    </article>
  );
}
export default CardPreview;