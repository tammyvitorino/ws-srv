<div id="top"></div>


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/tammyvitorino/ws-srv">
    <img src="https://www.wiliot.com/src/uploads/WhiteWiliotLogo.png" alt="Logo" width="150">
  </a>

  <h3 align="center">Websocket Server</h3>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

The project consists of creating a React App that present a data received from a socket.


### Built With
* [React.js](https://reactjs.org/)
* [Recharts](https://recharts.org/)
* [React Use Web Sockets](https://github.com/robtaussig/react-use-websocket)
* [Core UI React](https://coreui.io/react/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To visualize properly the app, you need to run the backend as you can see at [this link](https://github.com/and-dzh3/ws-srv)

### Prerequisites

* node (you can use nvm to manage node version)

### Installation

#### run backend
   ```sh
  cd ws-srv-backend/
  npm install
  npm i -g typescript
  node ./dist/server/server.js
   ```

#### run frontend
   ```sh
  cd ws-srv-frontend/
  npm install
  npm start
   ```

Disclaimer: If you have some incompablity when runing, checks if the peer dependencies for recharts includes your current version of React. 
If adding still don't work, then try to use <b>npm install --force</b>
<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the Wiliot License.

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Your Name - [Tamara Vitorino](https://www.linkedin.com/in/tamaravitorino/) - tamara@vitorino.io

Project Link: [Original Repository](https://github.com/and-dzh3/ws-srv)

<p align="right">(<a href="#top">back to top</a>)</p>
