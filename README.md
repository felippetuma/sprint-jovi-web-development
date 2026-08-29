# Sprint Jovi Web Development - Visionists

O protótipo desenvolvido para **Web Development** da solução de câmera inteligente **CamSense**, foi elaborada para o Challenge da Jovi. O projeto foi criado para simular a experiência do aplicativo da câmera com múltiplos modos inteligentes sendo Pet, Documentos e Chatbot (*JoviHelp*), oferecendo assim uma interface simples para demonstrar como a JOVI poderia interpretar e reagir a cena que está sendo fotografada, além de disponibilizar o uso do chatbot *JoviHelp* para auxiliar o usuário para utilizar a câmera da melhor maneira possível.

### Funcionalidades implementadas
- **Tela de login e simulação de cadastro**: uma validação simples de e-mail e senha e a persistência do nome de usuário utilizando o `localStorage`, para poder persinalizar a saudação nas próximas visitas desse usuário.
- **Navegação entre as páginas**: um rediredicionamento automático da tela de login para a tela de prévias dos modos da câmera.
- **Prévia dos modos de câmera**:
    - **Modo Pet**: slideshow de imagens ao clicar, simulando dessa forma como o aplicativo tenta chamar a atenção dos animais de estimação.
    - **Modo Documentos**: simulação de leitura ou reconhecimento de documentos.
    - **JoviHelp (Chatbot)**: presença de um menu interativo por meio de `prompt` e `alert` em que explica os modos da JOVI e dando o acesso aos minigames.
- **Minigames de matemático** utilizado para demonstração da lógica, laços de repedições e randomização:
    - Jogo de Adivinhação número sorteado de 1 a 100
    - Jogo da Tabuada com operações aleatórias de soma, subtração, multiplicação e divisão
    - Par ou Ímpar
- **Cálculos e randomização com a utilização do `Math`**: geração de números aleatórios e cálculo dinâmico das resposta corretas de cada jogo.

### Tecnologias Utilizadas

- **HTML**
- **CSS**
- **JavaScript**

### Como Instalar

Esse projeto foi desenvolvida de forma **estática**, sem a instalação de dependências basta somente clonar o repositório para começar a usar.

```bash
git clone https://github.com/felippetuma/sprint-jovi-web-development.git
```

### Como execultar o projeto

- Abra a pasta do projeto no **Visual Studio Code**
- Instale a extensão **Live Server**
- Clique com o botão direito no arquivo `index.html` e selecione o **Open with Live Server**
- O projeto irá abrir de forma automática no navegador, diretamente na tela de login.

### Uso de Inteligência Artificial

Foi utilizado inteligencia artificial para auxiliar na conexão entre o `script.js`, `previas.js` e `jogo-matematica.js`. Todos os códigos que foram gerados por inteligencia artificial foram revisados, testados e ajustados de forma manual pela nossa equipe antes mesmo de ser incorporado a esse projeto.

### Login no sistema

Não é necessario utilizar nenhum e-mail ou senha de teste nesse protótipo não contem uma atentificação real. A tela de login é apenas uma simulação, utilizando qualquer e-mail em formato válido e senha com **no mínimo 6 caracteres** são aceitos para prossegir até a tela de prévias.

### Links

- **Repositório no GitHub**: [Repositório no GitHub](https://github.com/felippetuma/sprint-jovi-web-development)
- **Deploy na Vercel**: [Link da Vercel](https://sprint-jovi-web-development.vercel.app/)

### Integrantes

- Davi Yuu Santos Toyota RM.: 569557
- Felipe Santana Motta RM.: 570550
- Felippe Tuma Costa RM.: 569459
- Renan Martins da Silva RM.: 569549
- Yan da Silva Lima RM.: 572373
