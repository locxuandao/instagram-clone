import APPInsLayout from '../../APPInsLayout';
import { publicRoutes } from '../../routes';

import {   Routes , Route } from 'react-router-dom';




function AppIns() {
    return (
        
            <div>
                <Routes>
                    {
                
                    publicRoutes.map((route,index) => {
                        const Page = route.component
                        const Layout = APPInsLayout
                        return (
                            <Route key={index} path={route.path} element={<Layout><Page/></Layout>}/>
                        )
                    })}
                </Routes>
            </div>
        
    ) ;
}

export default AppIns;