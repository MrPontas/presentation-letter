import {
  WhatsApp,
  MailOutline,
  HomeOutlined,
  PersonOutline,
} from "@mui/icons-material";

import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="content">
        <div className="info">
          <div className="icon-with-text">
            <PersonOutline sx={{ color: "white" }} />
            <p style={{ fontWeight: "bold", fontSize: 20 }}>Paola Schnaider</p>
          </div>
          <div>
            <div className="icon-with-text">
              <HomeOutlined sx={{ color: "white" }} />
              <div className="address">
                <p>Rua Theorodo Rosas, 159 - Centro</p>
                <p style={{ fontWeight: 400, color: "#e9e9e9" }}>
                  Ponta Grossa - PR, 84010-180
                </p>
              </div>
            </div>
          </div>
          <div className="icon-with-text">
            <WhatsApp sx={{ color: "white" }} />
            <p>(42) 9 9910-3267</p>
          </div>
          <div className="icon-with-text">
            <MailOutline sx={{ color: "white" }} />
            <p>paoladefatima12@gmail.com</p>
          </div>
        </div>
        <div className="presentation">
          <h1>Estágio em administração</h1>
          <div className="text-container">
            <p>
              Meu nome é Paola de Fátima Schnaider, tenho 22 anos e sou formada
              em Administração pelo curso técnico, e atualmente, estou cursando
              Bacharelado em Administração.
            </p>
            <p>
              Eu adquiri conhecimentos técnicos e práticos em administração
              durante meu curso técnico e, agora, estou aprimorando ainda mais
              essas habilidades com o curso de bacharelado. Além disso, estou
              sempre buscando novos desafios e aprimoramento de minhas
              habilidades.
            </p>
            <p>
              Sou uma pessoa organizada, comprometida e com grande capacidade de
              comunicação, o que me permite trabalhar em equipe e lidar com
              pessoas de diferentes perfis e culturas. Possuo conhecimentos em
              gerenciamento de estoque, atendimento ao cliente, gestão de
              documentos e processos administrativos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
