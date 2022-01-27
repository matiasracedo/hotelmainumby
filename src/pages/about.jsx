import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import AboutContent from "../components/about-content"
import Gallery from "../components/gallery"

import styles from "./about.module.scss"

const AboutPage = ({ data }) => {
  return (
    <Layout title="Nosotros" pathName="/about">
      <h1 className="page-heading">Sobre nosotros</h1>

      <AboutContent
        heading={data.aboutSectionOne.frontmatter.heading}
        copy={data.aboutSectionOne.html}
        image={data.aboutSectionOne.frontmatter.image.childImageSharp.fluid}
        imageAlt={data.aboutSectionOne.frontmatter.imageAlt}
      />

      <AboutContent
        heading={data.aboutSectionTwo.frontmatter.heading}
        copy={data.aboutSectionTwo.html}
        image={data.aboutSectionTwo.frontmatter.image.childImageSharp.fluid}
        imageAlt={data.aboutSectionTwo.frontmatter.imageAlt}
      />

      <AboutContent
        heading={data.aboutSectionThree.frontmatter.heading}
        copy={data.aboutSectionThree.html}
        image={data.aboutSectionThree.frontmatter.image.childImageSharp.fluid}
        imageAlt={data.aboutSectionThree.frontmatter.imageAlt}
      />

      <AboutContent
        heading={data.aboutSectionFour.frontmatter.heading}
        copy={data.aboutSectionFour.html}
        image={data.aboutSectionFour.frontmatter.image.childImageSharp.fluid}
        imageAlt={data.aboutSectionFour.frontmatter.imageAlt}
      />

      <section className={styles.finalSectionWrapper}>
        <div>
          <h2 className="section-heading">¡Gracias por visitarnos!</h2>
          <h2 className="section-heading">Contacto:</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: data.aboutSectionFinal.html,
            }}
          ></div>
        </div>
      </section>

    <Gallery />

    </Layout>
  )
}

export const query = graphql`
  query {
    aboutSectionOne: markdownRemark(
      frontmatter: {
        type: { eq: "page-content" }
        name: { eq: "about-1" }
      }
    ) {
      frontmatter {
        heading
        image {
          childImageSharp {
            fluid(maxWidth: 900, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          publicURL
        }
        imageAlt
      }
      html
    }
    aboutSectionTwo: markdownRemark(
      frontmatter: { type: { eq: "page-content" }, name: { eq: "about-2" } }
    ) {
      frontmatter {
        heading
        image {
          childImageSharp {
            fluid(maxWidth: 900, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          publicURL
        }
        imageAlt
      }
      html
    }
    aboutSectionThree: markdownRemark(
      frontmatter: {
        type: { eq: "page-content" }
        name: { eq: "about-3" }
      }
    ) {
      frontmatter {
        heading
        image {
          childImageSharp {
            fluid(maxWidth: 900, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          publicURL
        }
        imageAlt
      }
      html
    }
    aboutSectionFour: markdownRemark(
      frontmatter: {
        type: { eq: "page-content" }
        name: { eq: "about-4" }
      }
    ) {
      frontmatter {
        heading
        image {
          childImageSharp {
            fluid(maxWidth: 900, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          publicURL
        }
        imageAlt
      }
      html
    }
    aboutSectionFinal: markdownRemark(
      frontmatter: {
        type: { eq: "page-content" }
        name: { eq: "about-final" }
      }
    ) {
      html
    }
  }
`

export default AboutPage
