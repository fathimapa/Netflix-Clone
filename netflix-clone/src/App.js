import Header from './Components/Header/Header';
import './App.css';
import Banner from './Components/Banner/Banner';
import RawPost from './Components/RawPost/RawPost';
import constant from './CONST/const';
import Frequent from './Components/Frequent/Frequent';
import Footer from './Components/Footer/Footer';



function App() {

  

  const rows = [
    { title: "Netflix Originals", fetchUrl : constant.originals , isLargeRow:true },
    // { title: "Trending Now", fetchUrl: constant.trending },
    { title: "Action Movies", fetchUrl: constant.ActionMovies },
    { title: "Comedy Movies", fetchUrl: constant.ComedyMovies },
    { title: "Horror Movies", fetchUrl: constant.HorrorMovies },
    { title: "Romance Movies", fetchUrl: constant.RomanceMovies },
    { title: "Documentaries", fetchUrl: constant.Documentaries }
  ];

  return (
    <div className="App">
      <Header/>
      <Banner/>
      {rows.map((row, index) => (
        <RawPost key={index} title={row.title} fetchUrl={row.fetchUrl} isLargeRow={row.isLargeRow} />
      ))}
      <Frequent/>
      <Footer/>
    </div>
  );
}

export default App;
