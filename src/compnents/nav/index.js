import rickandmorty from '../icone/rickandmorty.png';
import github from '../icone/github.png';
import linkedin from '../icone/linkedin.png';
import './nav.css';

function Nav() {
  return (
    // <nav class="navbar navbar-light bg-light">
    <div className="container">
        <div id="row-center" className="row">
            <div className="col-md-4" align="center">
                <a class="navbar-brand" target="_blank" href="https://github.com/pedroHenriqueMaia">
                    <img src={github} width="60" height="60" class="d-inline-block align-top" alt="" />
                </a>
            </div>
            <div className="col-md-4" align="center">
                <a class="navbar-brand" target="_blank" href="https://www.youtube.com/watch?v=DuYpZeszaM4">
                    <img src={rickandmorty} width="100" height="100" class="d-inline-block align-top" alt="" />
                </a>
            </div>
            <div className="col-md-4" align="center">
                <a class="navbar-brand" target="_blank" href="https://www.linkedin.com/in/pedro-maia-99629a1b5/">
                    <img src={linkedin} width="60" height="60" class="d-inline-block align-top" alt="" />
                </a>
            </div>

        </div>
        </div>

  );
}

export default Nav;
