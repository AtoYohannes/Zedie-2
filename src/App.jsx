import React from "react";
import "./Styles/magazine.scss";
import "react-animated-slider/build/horizontal.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import routes from "./Config/routes";
import { Spinner } from "reactstrap";
import { MainLayout } from "./Components/Layout";
import { ToastContainer, Zoom } from "react-toastify";

const SingleBook = React.lazy(() => import("./Pages/SingleBook"));
const LandingPage = React.lazy(() => import("./Pages/LandingPage"));

const SingleNews = React.lazy(() => import("./Pages/SingleNews"));
const Books = React.lazy(() => import("./Pages/Books"));
const News = React.lazy(() => import("./Pages/News"));
const Directories = React.lazy(() => import("./Pages/Directories"));
const CinemaSchedules = React.lazy(() => import("./Pages/CinemaSchedule"));
const AddNews = React.lazy(() => import("./Pages/News/components/AddNews"));
const AdminPannel = React.lazy(() => import("./Pages/Admin"));
const AboutUs = React.lazy(() => import("./Pages/Static/AboutUs"));
const ContactUs = React.lazy(() => import("./Pages/Static/ContactUs"));

const TermsAndConditions = React.lazy(() =>
  import("./Pages/Static/TermAndConditions")
);
const PrivacyPolicy = React.lazy(() => import("./Pages/Static/PrivacyPolicy"));

const AddDirectories = React.lazy(() =>
  import("./Pages/Directories/components/addDirectories")
);
const AddBooks = React.lazy(() => import("./Pages/Books/components/AddBooks"));
const AddMovies = React.lazy(() =>
  import("./Pages/CinemaSchedule/components/AddMovies")
);

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split("/").pop()}`;
};

function App() {
  return (
    <BrowserRouter basename={getBasename()}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        transition={Zoom}
        rtl={false}
        pauseOnFocusLoss
        closeButton={false}
        draggable
        pauseOnHover
      />
      <Switch>
        {/* <LayoutRoute
              exact
              path={routes.signIn}
              layout={EmptyLayout}
              component={SignInPage}
            /> */}
        <React.Fragment>
          <MainLayout>
            <React.Suspense
              fallback={
                <div className="spinnerContainer">
                  <Spinner color="secondary" />
                </div>
              }
            >
              <Route exact path={routes.homePage} component={LandingPage} />
              <Route exact path={routes.singleBook} component={SingleBook} />
              <Route exact path={routes.singleNews} component={SingleNews} />
              <Route exact path={routes.news} component={News} />
              <Route exact path={routes.books} component={Books} />
              <Route exact path={routes.directories} component={Directories} />
              <Route exact path={routes.adminPannel} component={AdminPannel} />
              <Route exact path={routes.contactUs} component={ContactUs} />

              <Route
                exact
                path={routes.privacyPolicy}
                component={PrivacyPolicy}
              />
              <Route
                exact
                path={routes.termsAndConditions}
                component={TermsAndConditions}
              />
              <Route exact path={routes.aboutUs} component={AboutUs} />
              <Route
                exact
                path={routes.cinemaSchedules}
                component={CinemaSchedules}
              />
              <Route exact path={routes.addNews} component={AddNews} />
              <Route exact path={routes.addBooks} component={AddBooks} />
              <Route
                exact
                path={routes.addDirectories}
                component={AddDirectories}
              />
              <Route exact path={routes.addMovies} component={AddMovies} />
            </React.Suspense>
          </MainLayout>
        </React.Fragment>
        <Redirect to={routes.homePage} />
      </Switch>
    </BrowserRouter>
  );
}

// const query = ({ width }) => {
//   if (width < 575) {
//     return { breakpoint: "xs" };
//   }

//   if (576 < width && width < 767) {
//     return { breakpoint: "sm" };
//   }

//   if (768 < width && width < 991) {
//     return { breakpoint: "md" };
//   }

//   if (992 < width && width < 1199) {
//     return { breakpoint: "lg" };
//   }

//   if (width > 1200) {
//     return { breakpoint: "xl" };
//   }

//   return { breakpoint: "xs" };
// };

export default App;
