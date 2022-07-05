import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope } from "react-icons/fa"

import styles from "./footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social {
            instagram
            facebook
          }
          mailchimpUrl
        }
      }
    }
  `)

  return (
    <div className={styles.footerWrapper}>
      <footer className={styles.footer}>
        <div className={styles.footerColumnName}>
          <span className={styles.name}>Mainumby</span>
          <p className="f5">
            Chajarí, Entre Ríos, Argentina.
          </p>
         
        </div>
        <div className={styles.footerColumnLinks}>
          <Link to="/" className={styles.navItem}>
            Principal
          </Link>
          <Link to="/blog" className={styles.navItem}>
            Chajarí
          </Link>
          <Link to="/about" className={styles.navItem}>
            Nosotros
          </Link>
          <hr />
          <div>
            <a
              href={data.site.siteMetadata.mailchimpUrl}
              target="__blank"
              className="nav-link mh3"
            >
              Suscribirse
            </a>
            |
            <a href="/rss.xml" className="nav-link mh3">
              RSS
            </a>
            |
            <a href="/sitemap.xml" className="nav-link mh3">
              Sitemap
            </a>
          </div>
        </div>
        <div className={styles.footerColumnSocial}>
          <a
            href={`https://www.instagram.com/${data.site.siteMetadata.social.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="icon" alt="instagram icon link" />
          </a>
          <a
            href={`https://www.facebook.com/${data.site.siteMetadata.social.facebook}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="icon" alt="twitter icon link" />
          </a>
          <a
              href={`https://wa.me/5493416941201/?text=Consulta%20desde%20el%20sitio%0Ahttps%3A%2F%2Fhotelmainumby.com%0A----------------------------%0A%0A`}
              target="_blank"
              rel="noopener noreferrer"
              className="ml3 ml4-l"
            >
              <FaWhatsapp className="icon" alt="whatsapp icon link"/>
            </a>
            <a
              href={`mailto:hotelmainumbyreservas@gmail.com`}
              target="_blank"
              rel="noopener noreferrer"
              className="ml3 ml4-l"
            >
              <FaEnvelope className="icon" alt="email icon link"/>
            </a>
        </div>
      </footer>
    </div>
  )
}

export default Footer
