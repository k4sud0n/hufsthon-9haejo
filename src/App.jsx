import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // framer-motion import
import MainPage from "./pages/MainPage";
import SignupPage from "./pages/SignupPage";
import Navbar from "./components/navbar";

function App() {
  const location = useLocation();

  // 경로에 따라 key를 동적으로 반환
  const getRouteKey = (pathname) => {
    if (pathname === "/") return "main"; // 메인 페이지
    if (pathname === "/signup") return "signup"; // 회원가입 페이지
    return "default"; // 기본 키
  };

  return (
    <div className="flex justify-center items-center bg-cover bg-center bg-gray-100">
      <Navbar />
      <div className="w-full max-w-sm h-full bg-white bg-opacity-70 border border-gray-300 rounded-lg shadow-lg flex flex-col p-6">

        
        <AnimatePresence initial={false} mode="wait">

          {" "}
          {/* mode="wait" 추가 */}
          <Routes location={location} key={getRouteKey(location.pathname)}>

            <Route
              path="/"
              element={
                <motion.div
                  initial={{ x: "100%" }} // 오른쪽에서 등장
                  animate={{ x: 0 }} // 중앙으로
                  exit={{ x: "-100%" }} // 오른쪽으로 퇴장
                  transition={{ type: "tween", duration: 0.3 }}
                >
                  <MainPage />

                </motion.div>
              
              }
            />
            <Route
              path="/signup"
              element={
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }} // 중앙으로
                  exit={{ x: "100%" }}
                  transition={{ type: "tween", duration: 0.3 }}
                >
                  <SignupPage />
                </motion.div>
              }
            />
          </Routes>

        </AnimatePresence>
      </div>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      {" "}
      {/* Router를 AppWrapper에서 감쌈 */}
      <App />
    </Router>
  );
}
