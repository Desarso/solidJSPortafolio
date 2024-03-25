import { Router, Route, Routes } from "@solidjs/router"; 
import ChessInfo from "./ChessInfo";
import  Index  from "./Index";


type Props = {}

function Home({}: Props) {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Index/>} />
            <Route path="/development" element={<Index/>} />
            <Route 
            path="/chess-info" component={ChessInfo}
             />
        </Routes>
    </Router>
  )
}

export default Home