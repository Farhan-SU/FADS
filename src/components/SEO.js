import React from "react"
import Helmet from "react-helmet"
import Logo from '../assets/images/fadslogo.png';

export default ({ pageMeta, children }) => (
  <>
    <Helmet>
      <html lang="en" />  
      <title>{`${pageMeta.title} | FADS`}</title>
      <meta charset="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Fashion and Design Society | FADS" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content='https://drive.google.com/file/d/1pP3iD_XnTCDY3wPsrH0uP4mqP_qI6PLp/view?usp=sharing'/>
      <meta name="author" content="Fashion and Design Society" />
      <meta property="og:description" name="description" content={pageMeta.description} />
      <meta name="keywords" content={pageMeta.keywords.join(',')} />
    </Helmet>

    <>
      {children}
    </>
  </>
)