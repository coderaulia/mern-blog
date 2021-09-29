import TopBar from "./parts/topbar/TopBar";
import Home from "./Pages/home/Home";
import SinglePost from "./parts/singlePost/SinglePost";
import Write from "./Pages/write/Write";
import Setting from "./Pages/setting/Setting";
import Login from "./Pages/login/Login";
import Register from "./Pages/register/Register";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
	// user testing
	const user = false;
	return (
		<Router>
			<TopBar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/register">{user ? <Home /> : <Register />}</Route>
				<Route path="/login">{user ? <Home /> : <Login />}</Route>
				<Route path="/write">{user ? <Write /> : <Login />}</Route>
				<Route path="/settings">{user ? <Setting /> : <Login />}</Route>
				<Route path="/post/:postId">
					<SinglePost />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
