import * as React from "react";
import { Helmet } from "react-helmet-async";
import { Container } from "@mui/material"

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>

      <Container maxWidth="lg" />
    </>
  );
}
