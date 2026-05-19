export const SUGGESTION_CATALOG = [
  {
    name: "Hortifruti",
    products: ["Banana", "Maçã", "Laranja", "Tomate", "Batata", "Cebola", "Cenoura", "Alface", "Pepino", "Limão"],
  },
  {
    name: "Açougue",
    products: ["Bife de boi", "Carne moída", "Linguiça fresca", "Frango", "Filé de frango", "Picanha", "Costela bovina", "Frango inteiro", "Carne para churrasco", "Linguiça suína"],
  },
  {
    name: "Peixaria",
    products: ["Filé de tilápia", "Salmão fresco", "Merluza", "Sardinha", "Atum fresco", "Pescada", "Filé de polaca", "Camarão cru", "Lula", "Bacalhau"],
  },
  {
    name: "Frios e Laticínios",
    products: ["Queijo mussarela", "Queijo prato", "Presunto", "Mortadela", "Salame", "Iogurte natural", "Iogurte de frutas", "Leite longa vida", "Manteiga", "Creme de leite"],
  },
  {
    name: "Padaria e Confeitaria",
    products: ["Pão francês", "Pão de forma", "Pão integral", "Bolo de fubá", "Bolo de chocolate", "Torta de frango", "Biscoito cream cracker", "Pão de queijo", "Croissant", "Pão de hambúrguer"],
  },
  {
    name: "Mercearia",
    products: ["Arroz", "Feijão", "Molho de tomate", "Óleo de soja", "Sal refinado", "Açúcar", "Café em pó", "Farinha de trigo", "Macarrão", "Leite em pó"],
  },
  {
    name: "Bebidas",
    products: ["Água mineral", "Água com gás", "Refrigerante de cola", "Refrigerante de laranja", "Suco em caixinha", "Cerveja lata", "Suco em pó", "Energético", "Chá pronto", "Água de coco"],
  },
  {
    name: "Produtos de Limpeza",
    products: ["Sabão em pó", "Detergente líquido", "Desinfetante", "Água sanitária", "Limpa-vidros", "Limpa-multiuso", "Lustra móveis", "Sabão em barra", "Esponja de cozinha", "Sacos de lixo"],
  },
  {
    name: "Higiene Pessoal",
    products: ["Sabonete em barra", "Creme dental", "Escova de dentes", "Shampoo", "Condicionador", "Desodorante aerosol", "Creme hidratante", "Papel higiênico", "Absorvente", "Cotonete"],
  },
  {
    name: "Pet Shop",
    products: ["Ração para cães", "Ração para gatos", "Sachê", "Areia para gatos", "Petisco para cães", "Biscoito para gatos", "Tapete higiênico", "Escova para cães", "Shampoo para cães", "Coleira"],
  },
  {
    name: "Utilidades Domésticas",
    products: ["Pano de prato", "Guardanapos de papel", "Papel-toalha", "Copos plásticos", "Pratos plásticos", "Sacos plásticos", "Lenço de papel", "Esponja extra", "Amaciante", "Mini-vassoura"],
  },
  {
    name: "Temperos e Condimentos",
    products: ["Azeite de oliva", "Sal fino", "Pimenta do reino", "Pimenta calabresa", "Orégano", "Alho granulado", "Molho de pimenta", "Ketchup", "Mostarda", "Vinagre"],
  },
  {
    name: "Massas e Grãos",
    products: ["Macarrão espaguete", "Macarrão penne", "Macarrão parafuso", "Farinha de milho", "Arroz integral", "Feijão preto", "Feijão carioca", "Grão de bico", "Lentilha", "Aveia"],
  },
  {
    name: "Cereais e Chás",
    products: ["Café tradicional", "Café descafeinado", "Café solúvel", "Chá-mate", "Chá de camomila", "Chá verde", "Cereal matinal", "Granola", "Chocolate em pó", "Achocolatado"],
  },
] as const;

export type SuggestionCategoryName = (typeof SUGGESTION_CATALOG)[number]["name"];
