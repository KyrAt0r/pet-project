import {
    Switch,
    Route
} from 'react-router-dom';
import FunctionalComponent from './FunctionalComponent/FunctionalComponent';
import Authorization from "./Authorization/Authorization";
import Posts from "./Posts/Posts";
import Home from "../Pages/Home/Home.tsx";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/functional" component={FunctionalComponent} />
            <Route exact path="/login" component={Authorization}/>
            <Route exact path="/feed" component={Posts}/>
        </Switch>
    );
};

export default Routes;


// <Route path="/example/:id" component={ExampleComponent} /> Передача в роут параметра
// const { id } = useParams<ExampleParams>();
