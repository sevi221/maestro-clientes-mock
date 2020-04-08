import React, { Component } from "react";
import { Row, Col } from "antd";
import imagenInicio from "../../../public/images/imagen_inicio.jpg";
import { maestros } from "../../Api/ApiUrl";
import axios from "axios";
class Home extends Component {
  UNSAFE_componentWillMount() {
    axios
      .get(maestros.getcp)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="Home">
        <h2>Home</h2>
        <Row>
          <Col lg={11}>
            <h3>Nuestra historia</h3>
            <p>
              El servicio de Correos nació hace más de 300 años para satisfacer
              las necesidades de comunicación de la sociedad de la época.
            </p>
            <p>
              La organización del correo en España se debe a los romanos. El
              cursus publicus, como se denominaba, recorría toda la geografía de
              Hispania a través de una cuidada red de caminos portando los
              mensajes para el ejército o los administradores romanos.
            </p>
            <p>
              Posteriormente, durante la Edad Media, los numerosos reinos en los
              que se dividió España crearon sus propios sistemas de correo. Los
              mandaderos iban de una corte a otra con los encargos de sus reyes.
              También los comerciantes o las instituciones religiosas o
              universitarias tenían sus propios mensajeros. La organización
              postal en España fue transformándose progresivamente con la
              unificación de los reinos bajo la monarquía de los Reyes
              Católicos, con el descubrimiento de América y luego con la
              ampliación de territorios en Europa durante el reinado de Carlos
              I.
            </p>
            <p>
              Al mismo tiempo, la concesión del privilegio real del correo a la
              familia Tassis, centralizó en sus manos todo el orden postal tanto
              en España como en Europa. Con el cambio de dinastía a principios
              del siglo XVIII, el correo dejó de ser una concesión del monarca
              para convertirse en una Renta Real.El 8 de julio de 1716, con el
              nombramiento de Juan Tomás de Goyeneche como Juez Superintendente
              y administrador General de las Estafetas por parte de Felipe V, el
              servicio de Correos se convierte en responsabilidad del Estado.
            </p>
            <p>
              Correos ha sido el Internet del siglo XVIII, el abanderado de la
              modernización decimonónica, la vanguardia tecnológica del siglo XX
              y con el arranque del siglo XXI, el mejor proveedor de servicios
              de comunicaciones físicas, digitales y de paquetería del país.
            </p>
          </Col>
          <Col span={1} />
          <Col lg={12}>
            <img alt="logoFachada" src={imagenInicio} />
            <h3 style={{ marginTop: "5%" }}>Nueva imagen corporativa</h3>
            <p>
              La compañía ha presentado una nueva imagen de marca más sencilla,
              abierta y digital, adaptada a las necesidades que implica su
              transformación.
            </p>
            <p>
              Sostenibilidad, digitalización e internacionalización son líneas
              estratégicas de esta compañía que ha pasado de ser eminentemente
              postal en los últimos años, a empresa líder de paquetería en
              España.
            </p>
            <p>
              CORREOS ha reconocido a José María Cruz Novillo, diseñador del
              logotipo de la compañía desde 1977, como Cartero Honorario.
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
