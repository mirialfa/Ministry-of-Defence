// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { createRoot } from 'react-dom';
// import { Provider } from 'react-redux';
// import { CssBaseline, Container, Grid } from '@mui/material';
// import CategoriesList from './components/CategoriesList';
// import CategoryDetail from './components/CategoryDetail';
// import store from './store/store';

// // import ItemForm from './components/ItemForm';
// // import ItemList from './components/ItemList';
// import store from './store/store';
// // import axios from 'axios';
// // import {API_URL} from './generalComponents/consts'


// function App() {
//   return (
//     <Provider store={store}>
//       <Router>
//         <CssBaseline />
//         <Container>
//           {/* <Grid container spacing={3}>
//             <Grid item xs={12} md={6}> */}
//               <Routes>
//                 <Route path="/" exact component={CategoriesList} />
//                 {/* <Route path="/:categoryId" component={CategoryDetail} /> */}
//               </Routes>
//             {/* </Grid> */}
//             {/* <Grid item xs={12} md={6}> */}
//               {/* Additional components */}
//             {/* </Grid>
//           </Grid> */}
//         </Container>
//       </Router>
//     </Provider>
//   );
// }

// export default App;



// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CssBaseline, Container, Grid } from '@mui/material';
import CategoriesList from './components/CategoriesList';
import CategoryDetail from './components/CategoryDetail';
import ShoppingCart from './components/ShoppingCart'; // Import the new component
import store from './store/store';
import OrderSummaryPage from './components/OrderSummaryPage';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<CategoriesList />} exact />
          <Route path="/OrderSummary" element={<OrderSummaryPage  />}></Route>

          {/* <Route path="/categories/:categoryId" element={<CategoryDetail />} /> */}
          {/* <Route path="/cart" element={<ShoppingCart />} /> New route for the shopping cart */}
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;


