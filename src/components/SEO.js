import React from "react";
import Helmet from "react-helmet";

export default ({ pageMeta, children }) => (
  <>
    <Helmet>
      <html lang="en" />  
      <title>{`${pageMeta.title} | FADS`}</title>
      <meta charset="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable = no" />
      <meta property="title" content="Fashion and Design Society | FADS" />
      <meta name="subject" content="Creative, Agency, Fashion"/>
      <meta property="type" content="website" />
      <meta name="author" content="Fashion and Design Society, Farhan Islam" />
      <meta property="description" content={pageMeta.description} />
      <meta name="keywords" content={pageMeta.keywords.join(',')} />
      <meta http-equiv="Cache-Control" content="public"/>
    </Helmet>
    <>
      {children}
    </>
  </>
)