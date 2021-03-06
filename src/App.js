import Home from "./Home";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import movies from "./movies";
//Libraries
import { Route, Switch } from "react-router";
import NavBar from "./components/NavBar";

const theme = {
  light: {
    mainColor: "#003049",
    backgroundColor: "#669bbc",
    red: "red",
  },
  dark: {
    mainColor: "#669bbc",
    backgroundColor: "#003049",
    red: "red",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const [_movies, setMovies] = useState(movies);

  const toggleTheme = () => {
    if (currentTheme === "light") setCurrentTheme("dark");
    else setCurrentTheme("light");
  };

  return (
    <div>
      <ThemeProvider theme={theme[currentTheme]}>
        <GlobalStyle />
        <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />

        <Switch>
          <Route path="/movies/:movieSlug">
            <MovieDetail movies={_movies} />
          </Route>

          <Route path="/movies">
            <MovieList movies={_movies} />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </ThemeProvider>
    </div>
  );
}
export default App;
