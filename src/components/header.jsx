import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa"

import styles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      siteMetadata: site {
        siteMetadata {
          social {
            instagram
            facebook
          }
        }
      }
    }
  `)

  return (
    <div className={styles.headerWrapper}>
      <header className={styles.header}>
        <nav className={styles.navMain}>
          <span>
            <Link to="/" className={styles.navHomeLink}>
              Mainumby
            </Link>
            <img src='/images/logo-mainumby-transp.png' alt='mainumby' className={styles.navHomeImg}></img>
          </span>
          
          <div className={styles.navItemList}>
            <Link
              to="/"
              className={styles.navItem}
              activeClassName={styles.navItemActive}
            >
              Principal
            </Link>
            <Link
              to="/blog"
              className={styles.navItem}
              activeClassName={styles.navItemActive}
              partiallyActive={true}
            >
              Chajarí
            </Link>
            <Link
              to="/about"
              className={styles.navItem}
              activeClassName={styles.navItemActive}
            >
              Nosotros
            </Link>
            <a
              href={`https://www.instagram.com/${data.siteMetadata.siteMetadata.social.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="ml3 ml4-l"
            >
              <FaInstagram className="icon" alt="instagram icon link"/>
            </a>
            <a
              href={`https://www.facebook.com/${data.siteMetadata.siteMetadata.social.facebook}`}
              target="_blank"
              rel="noopener noreferrer"
              className="ml3 ml4-l"
            >
              <FaFacebook className="icon" alt="facebook icon link"/>
            </a>
            <a
              href={`https://wa.me/5493456413788`}
              target="_blank"
              rel="noopener noreferrer"
              className="ml3 ml4-l"
            >
              <FaWhatsapp className="icon" alt="whatsapp icon link"/>
            </a>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Header
