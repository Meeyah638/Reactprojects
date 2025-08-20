
import React from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Mainlayouts from './Layouts/Mainlayouts'
import Contact from './Components/Contact'
import Todo from './Components/Todo'
import Shop from './Components/Shop'
import Portfolio from './Components/Portfolio'

const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route element={<Mainlayouts />}>
                        <Route index element={<Portfolio/>} />
                        <Route path='/Portfolio' element={<Portfolio/>}/>
                        <Route path='/Contact' element={<Contact/>}/>
                        <Route path='/Todo' element={<Todo/>}/>
                        <Route path='/Shop' element={<Shop/>}/>
                    </Route>
                </Routes>
            </Router>

        </div>
    )
}

export default App