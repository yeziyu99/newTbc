// import { Web3Button } from '@web3modal/react'
// import { useAccount } from 'wagmi'

// import { Account } from './components'

// export function App() {
//   const { isConnected } = useAccount()

//   return (
//     <>
//       <h1>wagmi + Web3Modal + Vite</h1>

//       <Web3Button />

//       {isConnected && <Account />}
//     </>
//   )
// }
// import logo from './logo.svg';
import Layout from "./layout/layout";
// import 'antd/dist/reset.css';
import "./assets/style/index.scss";
// import Login from './page/login/login'
import { Route, BrowserRouter, Routes,Navigate } from "react-router-dom";
import { useNavigate, useLocation, useParams, } from 'react-router-dom'
import Trading from './page/trading'
import Router from "./router/index";
export function App() {
  console.log(useLocation);
  const location = useLocation()
  let arr = []
  const Routers = () => {
    Router.forEach(item => {
      arr.push(item.path)
    })
    const targetRouterConfig = Router.find((v) => v.path === location.pathname)
    if (targetRouterConfig) {
      return (
        <>
          <Routes>
            {Router.map((item) => {
              return (
                <Route
                  element={<item.component />}
                  key={item.path}
                  path={item.path}
                ></Route>
              );
            })}
            {/* <Route to='/404' component={Trading} /> */}
          </Routes>
        </>
      )
    } else {
      return <>
      <Navigate to='/'></Navigate>
      </>
    }
  }
  // for (var i = 0; i < Router.length; i++) {
  //   if (location.pathname == Router[i].path) {
  //     navigate(location.pathname);
  //   } else {
  //     console.log('first')
  //     navigate('/');
  //   }
  // }

  return (
    <div className="App">
      <Layout></Layout>
      <Routers></Routers>
    </div>
  );
}



