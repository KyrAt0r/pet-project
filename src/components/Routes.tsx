import {
    Switch,
    Route
} from 'react-router-dom';
import FunctionalComponent from './FunctionalComponent/FunctionalComponent';
import ClassComponent from './ClassComponent/ClassComponent';
import Authorization from "./Authorization/Authorization";
import Home from "../../../react-ipr_2023/src/Pages/Home/Home";
import Posts from "./Posts/Posts";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/functional" component={FunctionalComponent} />
            <Route exact path="/class" component={ClassComponent} />
            <Route exact path="/login" component={Authorization}/>
            <Route exact path="/feed" component={Posts}/>
        </Switch>
    );
};

export default Routes;


// <Route path="/example/:id" component={ExampleComponent} /> Передача в роут параметра
// const { id } = useParams<ExampleParams>();
