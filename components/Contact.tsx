import Spacer from './Spacer'
import '@fortawesome/fontawesome-free/css/all.css'
import { contacts } from '../data/portfolio'

const Contact = () => {
  if (!contacts.length || contacts.length === 0) return null
  return (
    <section className='section contact' id='contact'>
      <Spacer height={2} />
      {/* <h2 className='contact__title'>Contact Me</h2> */}
      <ul className='contact__list'>
        {contacts.map(({ name, link, icon }) => (
          <li key={name} className='contact__list-item'>
            <a
              href={link}
              target='_blank'
              className='link link--icon disabled'
              rel='noreferrer'
              title={name}
            >
              <i className={`icon ${icon}`} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Contact
