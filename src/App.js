import './App.css';
import ReactDOM from 'react-dom'
import {Link, Route, Switch} from 'react-router-dom';

import BaseLayout from "./Components/BaseLayout/BaseLayout";
import CategoryList from "./Components/pages/categoryList/categoryList";
import Controls from "./Components/pages/controls/Controls";
import Statistic from "./Components/pages/statistic/Statistic";

function App() {


    return (
        <div className='App'>
            <BaseLayout>
                <div className={'body'}>
                    <Switch>
                        <Route exact path='/' component={CategoryList}/>
                        <Route path={'/editing'} render={() => <Controls/>}/>
                        <Route path={'/statistic'} render={() => <Statistic/>}/>
                    </Switch>
                </div>
            </BaseLayout>
        </div>

    );
}

export default App;
