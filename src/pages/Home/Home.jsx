import React from "react";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Link,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Navbar from "../../components/Navbar/Navbar";
// import Footer from "../../components/Footer/Footer";

import heroImage from "./Images/banner.jpg";
import rectangle20 from "./Images/rectangle20.png";
import rectangle22 from "./Images/rectangle22.png";
import rectangle23 from "./Images/rectangle23.png";
import rectangle24 from "./Images/rectangle24.png";
import rectangle57 from "./Images/rectangle57.png";
import rectangle58 from "./Images/rectangle58.png";
import rectangle52 from "./Images/rectangle52.png";

const programCards = [
  { title: "TONS OF LOVE", image: rectangle20 },
  { title: "CLOTHING", image: rectangle22 },
  { title: "EDUCATION", image: rectangle23 },
  { title: "OUTREACH", image: rectangle24 },
];

const values = ["Relief", "Unity", "Kindness", "Humanity", "Support"];

const donationCards = [
  { title: "HELP WITH EDUCATION", image: rectangle58 },
  { title: "HELP WITH FOOD", image: rectangle57 },
];

export const Homepage = () => {
  return (
    <Box component="main" sx={{ bgcolor: "common.white" }}>
      {/* Hero Section */}
      <Box
        component="section"
        sx={{
          position: "relative",
          minHeight: { xs: 560, md: 700 },
          color: "common.white",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={heroImage}
          alt="Hero background"
          sx={{
            position: "absolute",
            inset: 0,
            width: 1,
            height: 1,
            objectFit: "cover",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            bgcolor: "rgba(44,42,42,0.6)",
          }}
        />

        <Navbar />

        {/* Hero Content */}
        <Container
          maxWidth={false}
          sx={{
            position: "relative",
            zIndex: 1,
            px: { xs: 2, sm: 3, md: 6 },
            pt: { xs: 14, md: 22 },
            pb: { xs: 8, md: 12 },
          }}
        >
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            <Grid item xs={12} md={7}>
              <Stack spacing={3} sx={{ maxWidth: 760 }}>
                <Typography
                  component="h1"
                  sx={{
                    fontSize: { xs: 32, sm: 42, md: 54 },
                    lineHeight: 1.15,
                    fontWeight: 700,
                    color: "common.white",
                  }}
                >
                  The Active Foundation Trust revolves around the fact that{" "}
                  <Box component="span" sx={{ color: "#ff7d00" }}>
                    "One Block Can Change A Nation"
                  </Box>
                </Typography>
                <Button
                  variant="contained"
                  id="donate"
                  sx={{
                    bgcolor: "#ff7d00",
                    color: "common.white",
                    borderRadius: 999,
                    px: 4,
                    py: 1.25,
                    minWidth: 140,
                    textTransform: "none",
                    fontSize: { xs: 18, md: 22 },
                    fontWeight: 400,
                    "&:hover": { bgcolor: "#e67000" },
                  }}
                >
                  DONATE
                </Button>
              </Stack>
            </Grid>
            <Grid
              item
              xs={12}
              md={5}
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-end" },
              }}
            >
              <Box
                sx={{
                  width: { xs: 220, sm: 260, md: 320 },
                  height: { xs: 260, sm: 320, md: 420 },
                  bgcolor: "rgba(44,42,42,0.7)",
                  borderRadius: 2,
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Programs Section */}
      <Box component="section" id="projects" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Stack spacing={{ xs: 4, md: 5 }}>
            <Typography
              component="h2"
              align="center"
              variant="h2"
              sx={{ fontWeight: 800 }}
            >
              OUR PROGRAM
            </Typography>
            <Grid container spacing={{ xs: 2.5, md: 4 }}>
              {programCards.map((card) => (
                <Grid item xs={6} md={6} key={card.title}>
                  <Card
                    sx={{
                      position: "relative",
                      borderRadius: 3,
                      overflow: "hidden",
                      boxShadow: "none",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={card.image}
                      alt={`Program: ${card.title}`}
                      sx={{
                        height: { xs: 180, sm: 240, md: 320 },
                        objectFit: "cover",
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,
                        bgcolor: "rgba(22,21,21,0.35)",
                      }}
                    />
                    <CardContent
                      sx={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        bottom: 0,
                        p: 2,
                      }}
                    >
                      <Typography
                        sx={{
                          color: "common.white",
                          fontWeight: 800,
                          fontSize: { xs: 22, md: 32 },
                          lineHeight: 1.1,
                        }}
                      >
                        {card.title}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Box>

      {/* Donation Section */}
      <Box component="section">
        <Box sx={{ bgcolor: "#ff7d00", py: 0.75 }}>
          <Container maxWidth="lg">
            <Stack
              direction="row"
              spacing={{ xs: 1, sm: 2 }}
              justifyContent="center"
              alignItems="center"
              flexWrap="wrap"
              useFlexGap
            >
              {values.map((item, index) => (
                <React.Fragment key={item}>
                  <Typography
                    sx={{
                      color: "common.white",
                      fontSize: { xs: 14, md: 18 },
                      fontWeight: 300,
                    }}
                  >
                    {item}
                  </Typography>
                  {index < values.length - 1 && (
                    <Typography
                      sx={{
                        color: "common.white",
                        fontSize: { xs: 14, md: 18 },
                      }}
                    >
                      •
                    </Typography>
                  )}
                </React.Fragment>
              ))}
            </Stack>
          </Container>
        </Box>

        <Box sx={{ bgcolor: "#f4f2f2", py: { xs: 5, md: 7 } }}>
          <Container maxWidth="lg">
            <Stack spacing={1} alignItems="center" sx={{ mb: { xs: 4, md: 5 } }}>
              <Typography
                component="h2"
                variant="h2"
                sx={{ fontWeight: 700, color: "text.primary" }}
              >
                START DONATING
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 18, md: 24 },
                  fontWeight: 400,
                  color: "text.primary",
                  textAlign: "center",
                }}
              >
                Be the reason someone smiles today!
              </Typography>
            </Stack>

            <Stack
              direction="row"
              spacing={{ xs: 1, md: 2 }}
              alignItems="center"
              justifyContent="center"
            >
              <Button aria-label="Previous donation card" sx={{ minWidth: 0 }}>
                <KeyboardArrowLeftIcon />
              </Button>

              <Grid container spacing={{ xs: 2, md: 4 }} justifyContent="center">
                {donationCards.map((card) => (
                  <Grid item xs={12} sm={6} md={4} key={card.title}>
                    <Card
                      sx={{
                        bgcolor: "#d9d9d9",
                        borderRadius: 3,
                        boxShadow: "none",
                        maxWidth: 340,
                        mx: "auto",
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={card.image}
                        alt={`Donation: ${card.title}`}
                        sx={{ height: 140, objectFit: "cover" }}
                      />
                      <CardContent sx={{ p: 2.5 }}>
                        <Stack spacing={2}>
                          <Typography
                            sx={{
                              fontSize: { xs: 18, md: 22 },
                              fontWeight: 800,
                              color: "text.primary",
                              minHeight: { sm: 52 },
                            }}
                          >
                            {card.title}
                          </Typography>
                          <Button
                            variant="contained"
                            sx={{
                              bgcolor: "#166d42",
                              color: "common.white",
                              borderRadius: 999,
                              px: 2,
                              py: 0.5,
                              textTransform: "none",
                              fontSize: 13,
                              fontWeight: 300,
                              "&:hover": { bgcolor: "#125b36" },
                            }}
                          >
                            Donate Now
                          </Button>
                        </Stack>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              <Button aria-label="Next donation card" sx={{ minWidth: 0 }}>
                <KeyboardArrowRightIcon />
              </Button>
            </Stack>
          </Container>
        </Box>
      </Box>

      {/* About Section */}
      <Box component="section" id="about" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Stack spacing={{ xs: 3, md: 4 }}>
            <Typography
              component="h2"
              align="center"
              variant="h2"
              sx={{ fontWeight: 800 }}
            >
              ABOUT THE ACTIVE FOUNDATION TRUST
            </Typography>
            <Stack spacing={2} sx={{ color: "text.primary" }}>
              <Typography variant="body2">
                Who We Are: The Active Foundation Trust
              </Typography>
              <Typography variant="body1">
                <Box component="span" sx={{ fontWeight: 700 }}>
                  • Our Belief
                </Box>
                : We believe that improving one city block can inspire an entire
                nation to change for the better.
              </Typography>
              <Typography variant="body1">
                <Box component="span" sx={{ fontWeight: 700 }}>
                  • Our Goal
                </Box>
                : To transform neglected, unhealthy areas into clean, safe, and
                thriving communities.
              </Typography>
              <Typography variant="body1">
                <Box component="span" sx={{ fontWeight: 700 }}>
                  • Our Method
                </Box>
                : We help residents clean up their own neighborhoods, creating
                an environment where people can live well and businesses can
                grow. We teach skills and provide support, not just handouts.
              </Typography>
              <Typography variant="body1">
                <Box component="span" sx={{ fontWeight: 700 }}>
                  • Our Proof
                </Box>
                : We&apos;ve already begun our work in Selby, Johannesburg, by
                cleaning up Loveday Street and building new sidewalks.
              </Typography>
              <Typography variant="body1">
                Join us in proving that one block can truly change a nation.
              </Typography>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Volunteer Section */}
      <Box component="section" sx={{ pb: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Card
            sx={{
              position: "relative",
              borderRadius: 4,
              overflow: "hidden",
              boxShadow: "none",
            }}
          >
            <CardMedia
              component="img"
              image={rectangle52}
              alt="Become a Volunteer"
              sx={{ height: { xs: 220, md: 260 }, objectFit: "cover" }}
            />
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                bgcolor: "rgba(254,247,247,0.4)",
              }}
            />
            <CardContent
              sx={{
                position: "absolute",
                inset: 0,
                p: { xs: 3, md: 4.5 },
                display: "flex",
                alignItems: "center",
              }}
            >
              <Grid container spacing={3} alignItems="center" sx={{ width: 1 }}>
                <Grid item xs={12} md={8}>
                  <Stack spacing={2}>
                    <Typography component="h2" variant="h2">
                      Become a Volunteer
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: 16, md: 24 },
                        color: "text.primary",
                        maxWidth: 1040,
                      }}
                    >
                      Join our team and help us change our community, one block
                      at a time! Volunteers are the heart of our work. By giving
                      just a little of your time, you can make a big difference
                      in your neighborhood.
                    </Typography>
                  </Stack>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={4}
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "flex-start", md: "flex-end" },
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "#ff7d00",
                      color: "common.white",
                      borderRadius: 999,
                      px: 4,
                      py: 1.25,
                      textTransform: "none",
                      fontSize: { xs: 18, md: 24 },
                      fontWeight: 400,
                      "&:hover": { bgcolor: "#e67000" },
                    }}
                  >
                    APPLY NOW
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Container>
      </Box>
      {/* <Footer /> */}
    </Box>
  );
};

export default Homepage;
