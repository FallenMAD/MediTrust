import { RouterProvider, createHashRouter } from 'react-router-dom';

import styles from './App.module.scss';
import {
  AboutUsPage,
  ContactsPage,
  DoctorDetailPage,
  DoctorsPage,
  HomePage,
  Root,
} from './pages';

const router = createHashRouter(
  [
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
          children: [
            {
              index: true,
              element: <DoctorsPage />,
            },
            {
              path: ':doctorId',
              element: <DoctorDetailPage />,
            },
          ],
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
  ]
  // {
  //   basename: import.meta.env.BASE_URL,
  // }
);

function App() {
  return (
    <div className={styles.App}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
