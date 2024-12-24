import styles from '../../styles/Footer.module.scss';
import { Github, Linkedin, Twitter } from '../../utils/icons';
import { IconType } from 'react-icons';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <p>
        Made by{' '}
        <a href='https://github.com/atishayinfo' target='_blank' rel='noreferrer'>
          <b>Atishay</b>
        </a>
      </p>
      <div>
        <a href='https://linkedin.com/in/atishaykushwah/' className={styles.icon} target='_blank' rel='noreferrer'>
          <Linkedin />
        </a>
        <a href='https://twitter.com/atihsayinfo' className={styles.icon} target='_blank' rel='noreferrer'>
          <Twitter />
        </a>
        <a href='https://github.com/atishayinfo' className={styles.icon} target='_blank' rel='noreferrer'>
          <Github />
        </a>
      </div>
    </div>
  );
}
