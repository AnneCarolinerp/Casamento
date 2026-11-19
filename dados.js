/* =========================================================
   Dados do site do casamento de Anne Caroline e Marcos.
   Este é o único arquivo que precisa ser editado no dia a dia.
   ========================================================= */

/* Informações gerais */
const CONFIG = {
  whatsapp: "",  // número que recebe confirmações e avisos de presente, só números com DDD (ex.: 85999998888)
  pix: "",       // chave Pix dos presentes
  horario: "16h" // horário da cerimônia
};

/* Lista de presentes
   - nome: o texto da cota
   - valor: em reais, sem centavos; null deixa o convidado escolher o valor (a partir do mínimo)
   - figura: a ilustração da cota (taxa, mala, relogio, salao, janela, dj, valsa, prioridade,
     namorada, ressaca, calma, primeira, casa, passaporte, patrocinador, filhos, livre)
   - foto (opcional): troca a ilustração por uma foto sua. Suba a imagem numa pasta "fotos"
     do repositório e escreva, por exemplo, foto: "fotos/buque.jpg" */
const VALOR_MINIMO = 100;
const PRESENTES = [
  { nome: "Vim, comi, dancei e ainda deixei a taxa de embarque", valor: 100, figura: "taxa" },
  { nome: "Fim da briga pela janelinha do avião", valor: 150, figura: "janela" },
  { nome: "Cota para o DJ tocar a sua música três vezes seguidas", valor: 200, figura: "dj" },
  { nome: "Kit ressaca para a manhã seguinte", valor: 250, figura: "ressaca" },
  { nome: "Cota para a noiva sair do salão no horário", valor: 300, figura: "salao" },
  { nome: "Seguro-viagem para o noivo não se atrasar no altar", valor: 350, figura: "relogio" },
  { nome: "Cota para o excesso de bagagem da noiva", valor: 400, figura: "mala" },
  { nome: "Prioridade de embarque para pegar o buquê", valor: 450, figura: "prioridade" },
  { nome: "Cota para o buquê não cair na mão da sua namorada", valor: 500, figura: "namorada" },
  { nome: "Aula de dança para o noivo brilhar na valsa", valor: 550, figura: "valsa" },
  { nome: "Calma, Carol! Respiro garantido antes de entrar", valor: 600, figura: "calma" },
  { nome: "Cota para a nossa casa ficar ainda mais completa", valor: 650, figura: "casa" },
  { nome: "Passaporte carimbado: uma boa ajuda na lua de mel", valor: 700, figura: "passaporte" },
  { nome: "Patrocinador oficial da lua de mel", valor: 1000, figura: "patrocinador" },
  { nome: "Upgrade para a primeira classe na lua de mel", valor: 1500, figura: "primeira" },
  { nome: "Cota para responder \"e os filhos?\" só daqui a uns anos", valor: 2000, figura: "filhos" },
  { nome: "Prefiro escolher o valor", valor: null, figura: "livre" }
];

/* Lista de convidados para a confirmação de presença.
   Um nome por linha, entre aspas e com vírgula no fim, escrito do jeito que deve aparecer na busca.
   Exemplo:
     "Maria José da Silva",
     "João Pedro Souza", */
const CONVIDADOS = [
];
