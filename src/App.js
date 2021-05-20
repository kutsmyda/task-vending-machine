import './App.css';

import {Route, Switch} from 'react-router-dom';

import BaseLayout from "./Components/BaseLayout/BaseLayout";
import CategoryList from "./Components/pages/categoryList/categoryList";
import Controls from "./Components/pages/controls/Controls";
import Statistic from "./Components/pages/statistic/Statistic";
import PageNotFound from "./Components/PageNotFound/PageNotFound";

function App() {


    return (
        <div className='App'>
            <BaseLayout>
                <div className={'body'}>
                    <Switch>
                        <Route exact path='/' component={CategoryList}/>
                        <Route path={'/editing'} component={Controls}/>
                        <Route path={'/statistic'} component={Statistic}/>
                        <Route render={()=> <PageNotFound/>}/>
                    </Switch>
                </div>
            </BaseLayout>
        </div>

    );
}

export default App;
