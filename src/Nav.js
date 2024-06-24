import React from 'react';

function Nav() {
  return (
   <nav class="navbar navbar-expand-lg bg-primary">
     <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Products</a>
          </li>
          <li class="nav-item">
           <a class="nav-link" href="#">About</a>
         </li>
        </ul>
      </div>
   </nav>
  );
}

export default Nav;
