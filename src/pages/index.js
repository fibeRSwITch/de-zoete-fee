import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Layout from "../layouts/index"
import Img from 'gatsby-image'

export default () => (
  <StaticQuery
    query={graphql`
      query CatalogueQuery {
        products: allDatoCmsProduct {
          edges {
            node {
              id
              name
              price
              image {
                url
                sizes(maxWidth: 300, imgixParams: { fm: "jpg" }) {
                  ...GatsbyDatoCmsSizes
                }
              }
            }
          }
        }
        site {
          siteMetadata {
            siteName
          }
        }
      }
    `}
render={data => (
  <Layout site={data.site}>
    <div id="my-store-35311023"></div>
<div>
  <script data-cfasync="false" type="text/javascript" src="https://app.ecwid.com/script.js?35311023&data_platform=code&data_date=2020-08-19" charset="utf-8"></script>
  <script type="text/javascript"> xProductBrowser("categoriesPerRow=3","views=grid(20,3) list(60) table(60)","categoryView=grid","searchView=list","id=my-store-35311023");</script>
</div>
  </Layout>
     )}
   />
)
