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
            <p style={{ fontWeight: "bold", fontSize: 20 }}>
              Guilherme Pontarolo
            </p>
          </div>
          <div>
            <div className="icon-with-text">
              <HomeOutlined sx={{ color: "white" }} />
              <div className="address">
                <p>Rua Theorodo Rosas, 159 - Centro</p>
                <p style={{ fontWeight: 400, color: "#e9e9e9" }}>
                  Ponta Grossa - PR, 84010-180 - Brazil
                </p>
              </div>
            </div>
          </div>
          <div className="icon-with-text">
            <WhatsApp sx={{ color: "white" }} />
            <p>+55 (42) 9 3618-0803</p>
          </div>
          <div className="icon-with-text">
            <MailOutline sx={{ color: "white" }} />
            <p>guipontarolo@gmail.com</p>
          </div>
        </div>
        <div className="presentation">
          <h1>Frontend Dev</h1>
          <div className="text-container">
            <p>
              Hi! I'm computer engineer, and I'm passionated about UX/UI. I also
              love programming, which led me to focus my career on the front
              end. I am looking for a job opportunity to help me improve my
              career, by doing what I do best.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
