import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import styles from './App.module.scss';
import {
  AboutUsPage,
  ContactsPage,
  DoctorsPage,
  HomePage,
  Root,
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'doctors',
        element: <DoctorsPage />,
      },
      {
        path: 'contacts',
        element: <ContactsPage />,
      },
      {
        path: 'about-us',
        element: <AboutUsPage />,
      },
    ],
  },
], {
  basename: import.meta.env.BASE_URL
});

function App() {
  return (
    <div className={styles.App}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
