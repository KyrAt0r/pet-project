import { Switch, Route } from 'react-router-dom';
import FunctionalComponent from './FunctionalComponent/FunctionalComponent';
import Authorization from './Authorization/Authorization';
import Posts from './Posts/Posts';
import Home from '../Pages/Home/Home.tsx';
import Unix from './Unix/Unix.tsx';

const Routes = () => {
    return (
        <Switch>
            <Route exact path={process.env.BASE_URL} component={Home} />
            <Route exact path={`${process.env.BASE_URL}functional`} component={FunctionalComponent} />
            <Route exact path={`${process.env.BASE_URL}login`} component={Authorization} />
            <Route exact path={`${process.env.BASE_URL}feed`} component={Posts} />
            <Route exact path={`${process.env.BASE_URL}unix-conv`} component={Unix} />
        </Switch>
    );
};

export default Routes;



// <Route path="/example/:id" component={ExampleComponent} /> Передача в роут параметра
// const { id } = useParams<ExampleParams>();
