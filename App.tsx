import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BottomNav from './components/Navigation/BottomNav'
import Home from './pages/Home'
import Categories from './pages/Categories'
import Looks from './pages/Looks'
import Stores from './pages/Stores'
import Account from './pages/Account'

function App() {
    return (
        <Router>
            <div className="h-screen flex flex-col">
                <div className="flex-1 overflow-y-auto">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/categories" element={<Categories />} />
                        <Route path="/looks" element={<Looks />} />
                        <Route path="/stores" element={<Stores />} />
                        <Route
                            path="/stores/product/:id"
                            element={<Stores />}
                        />
                        <Route path="/account" element={<Account />} />
                    </Routes>
                </div>
                <BottomNav />
            </div>
        </Router>
    )
}

export default App
