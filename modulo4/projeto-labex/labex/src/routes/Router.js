import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage'
import TripDetailsPage from '../pages/TripDetailsPage'
import DestinationsPage from '../pages/DestinationsPage'
import CreateTripPage from '../pages/CreateTripPage'
import ApplicationPage from '../pages/ApplicationPage'
import AdmBoradPage from '../pages/AdmBoardPage'
import LoginPage from "../pages/LoginPage";
import ErrorPage from "../pages/ErrorPage"

function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<HomePage />} />
                
                <Route path="/trips/list" element={<DestinationsPage />} />

                <Route path="/trips/application" element={<ApplicationPage />} />

                <Route path="/login" element={<LoginPage />} />

                <Route path="/admin/trips/list" element={<AdmBoradPage />} />

                <Route path="/admin/trips/create" element={<CreateTripPage />} />

                <Route path="/admin/trips/:id" element={<TripDetailsPage />} />

                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;