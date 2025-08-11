// import React from 'react'
// import Card from './Components/Card'
// import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
// import Mainlayouts from './Layouts/Mainlayouts'
// import Todo from './Components/Todo.jsx'
// const App = () => {
//   return (
//     <Router>
//         <Routes>
//           <Route element={<Mainlayouts/>}>
//             <Route index element={<Card/>}/>
//             <Route path='/Todo' element={<Todo/>}/>
//           </Route>
//         </Routes>
//       </Router>  
//   )
// }

// export default App
import React from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Mainlayouts from './Layouts/Mainlayouts'
import Card from './Components/Card'
import Todo from './Components/Todo'
import Shop from './Components/Shop'

const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route element={<Mainlayouts />}>
                        <Route index element={<Card />} />
                        <Route path='/Card' element={<Card/>}/>
                        <Route path='/Todo' element={<Todo/>}/>
                        <Route path='/Shop' element={<Shop/>}/>
                    </Route>
                </Routes>
            </Router>

        </div>
    )
}

export default App