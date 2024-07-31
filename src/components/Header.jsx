// const Header = () => {
//   return (
//     <header class="p-3 text-bg-dark">
//       <div class="container">
//         <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
//           <a
//             href="/"
//             class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
//           >
//             <svg
//               class="bi me-2"
//               width="40"
//               height="32"
//               role="img"
//               aria-label="Bootstrap"
//             >
//               <use xlink:href="#bootstrap"></use>
//             </svg>
//           </a>

//           <div class="text-end loginbtn">
//             <button type="button" class="btn btn-outline-light me-2">
//               Login
//             </button>
//             <button type="button" class="btn btn-warning">
//               Sign-up
//             </button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React from "react";

const Header = ({ onLoginClick }) => {
  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <svg
              className="bi me-2"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            >
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </a>

          <div className="text-end loginbtn">
            <button
              type="button"
              className="btn btn-outline-light me-2"
              onClick={onLoginClick}
            >
              Login
            </button>
            <button type="button" className="btn btn-warning">
              Sign-up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
