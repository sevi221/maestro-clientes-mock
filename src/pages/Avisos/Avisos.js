import React, { Component } from "react";
import { Descriptions, Badge } from "antd";

class Avisos extends Component {
  render() {
    return (
      <div className="Avisos">
        <h3>Avisos</h3>
        <div>
          <Descriptions bordered>
            <Descriptions.Item label="Producto">
              Paquete Premium Nacional
            </Descriptions.Item>
            <Descriptions.Item>Paquete Nacional</Descriptions.Item>
            <Descriptions.Item>Burofax</Descriptions.Item>
            <Descriptions.Item label="Registro">12548</Descriptions.Item>
            <Descriptions.Item>1258</Descriptions.Item>
            <Descriptions.Item>5589658</Descriptions.Item>
            <Descriptions.Item label="Código">58958785</Descriptions.Item>
            <Descriptions.Item>251874</Descriptions.Item>
            <Descriptions.Item>15422456</Descriptions.Item>
            <Descriptions.Item label="Detalles" span={3}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                non magna et est efficitur viverra eu eu est. Quisque purus
                diam, ultricies a dignissim id, pellentesque ut massa. Cras
                luctus id nulla id vulputate. Quisque scelerisque massa eu lorem
                interdum cursus. Morbi suscipit purus non consectetur malesuada.
                Donec sagittis scelerisque ex nec condimentum. Integer ornare
                pellentesque dignissim. In ac dui vitae sem semper tristique non
                nec urna. Suspendisse at sapien metus. Nunc molestie ut tortor
                vel fringilla. Maecenas sodales velit at condimentum consequat.
              </p>
            </Descriptions.Item>
            <Descriptions.Item label="Estado">
              <Badge status="success" text="Concebido" />
            </Descriptions.Item>
            <Descriptions.Item>
              <Badge status="success" text="Concebido" />
            </Descriptions.Item>
            <Descriptions.Item>
              <Badge status="error" text="Denegado" />
            </Descriptions.Item>
          </Descriptions>
        </div>

        <div className="infoUser">
          <h3>Información de usuario</h3>
          <Descriptions>
            <Descriptions.Item label="Abonado">
              Javier Jimenez
            </Descriptions.Item>
            <Descriptions.Item label="Telefono">915558877</Descriptions.Item>
            <Descriptions.Item label="Número de contrato">
              DT3 54872658962169
            </Descriptions.Item>
            <Descriptions.Item label="NIF">01234124C</Descriptions.Item>
            <Descriptions.Item label="Dirección">
              Avenida de Andalucía 10, 4º izda, 28021 Madrid
            </Descriptions.Item>
          </Descriptions>
          <Descriptions>
            <Descriptions.Item label="Abonado">Lucía Pérez</Descriptions.Item>
            <Descriptions.Item label="Telefono">915434578</Descriptions.Item>
            <Descriptions.Item label="Número de contrato">
              HT 5487265896216
            </Descriptions.Item>
            <Descriptions.Item label="NIF">78456963T</Descriptions.Item>
            <Descriptions.Item label="Dirección">
              Mar negro 28, 7ºC, 28034 Madrid
            </Descriptions.Item>
          </Descriptions>
          <Descriptions>
            <Descriptions.Item label="Abonado">
              Sergio Hernández
            </Descriptions.Item>
            <Descriptions.Item label="Telefono">915625847</Descriptions.Item>
            <Descriptions.Item label="Número de contrato">
              fty 45234987008
            </Descriptions.Item>
            <Descriptions.Item label="NIF">85896562E</Descriptions.Item>
            <Descriptions.Item label="Dirección">
              Atocha 23, bajo C, 28054 Madrid
            </Descriptions.Item>
          </Descriptions>
        </div>
      </div>
    );
  }
}

export default Avisos;
