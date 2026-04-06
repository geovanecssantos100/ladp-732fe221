// ============================================================
// Para adicionar um novo artigo, basta copiar o modelo abaixo
// e adicionar ao array "articles":
//
// {
//   slug: "url-do-artigo",
//   title: "Título do Artigo",
//   authors: ["Autor 1", "Autor 2"],
//   date: "Mês/Ano",
//   tags: ["tag1", "tag2"],
//   abstract: "Resumo breve do artigo...",
//   content: `
//     Texto completo do artigo aqui.
//     Pode usar múltiplos parágrafos separados por \n\n.
//   `,
// },
// ============================================================

export interface Article {
  slug: string;
  title: string;
  authors: string[];
  date: string;
  tags: string[];
  abstract: string;
  content: string;
}

export const articles: Article[] = [
  {
    slug: "reforma-previdencia-regras-transicao",
    title: "A Reforma da Previdência e seus Impactos nas Regras de Transição",
    authors: ["Maria Clara Silva", "João Pedro Almeida"],
    date: "Março/2026",
    tags: ["Reforma", "Regras de Transição"],
    abstract:
      "Este artigo analisa os principais impactos da Emenda Constitucional nº 103/2019 nas regras de transição para aposentadoria, com foco nos segurados do RGPS.",
    content: `A Emenda Constitucional nº 103, promulgada em 12 de novembro de 2019, representou uma das maiores transformações no sistema previdenciário brasileiro. Conhecida como Reforma da Previdência, ela alterou significativamente os requisitos para concessão de benefícios, especialmente no que diz respeito às regras de transição para os segurados que já estavam vinculados ao Regime Geral de Previdência Social (RGPS) antes de sua entrada em vigor.

As regras de transição foram pensadas para suavizar o impacto da reforma sobre aqueles que já possuíam expectativa de direito à aposentadoria sob as regras anteriores. Foram estabelecidas cinco modalidades principais de transição: sistema de pontos, idade mínima progressiva, pedágio de 50%, pedágio de 100% e a regra de transição da aposentadoria por idade.

No sistema de pontos, o segurado precisa atingir uma pontuação mínima que resulta da soma da idade com o tempo de contribuição. Essa pontuação é progressiva e aumenta um ponto por ano até atingir os limites de 100 pontos para mulheres e 105 para homens. Essa regra beneficia particularmente aqueles que começaram a contribuir cedo, pois podem se aposentar sem necessariamente atingir uma idade mínima elevada.

A regra da idade mínima progressiva estabelece uma idade mínima que aumenta gradualmente: 6 meses por ano para ambos os sexos, partindo de 56 anos para mulheres e 61 para homens, até atingir 62 e 65 anos, respectivamente. Essa modalidade é destinada aos segurados que preferem uma previsibilidade maior quanto à data de aposentadoria.

O pedágio de 50% é exclusivo para quem estava a menos de dois anos de cumprir o tempo mínimo de contribuição na data da reforma. Nesse caso, o segurado precisa trabalhar o tempo restante acrescido de 50% desse período. Já o pedágio de 100% exige que o segurado cumpra o dobro do tempo que faltava para atingir o tempo mínimo de contribuição, mas garante o cálculo do benefício sem a aplicação do fator previdenciário.

A análise dessas regras revela que, embora tenham sido criadas para proteger os direitos dos segurados, cada uma delas apresenta vantagens e desvantagens que devem ser avaliadas caso a caso. A escolha da regra mais favorável depende de fatores como idade atual, tempo de contribuição acumulado e valor dos salários de contribuição.

Conclui-se que a reforma previdenciária, apesar de necessária do ponto de vista fiscal, impôs sacrifícios significativos aos trabalhadores brasileiros, especialmente àqueles das camadas mais vulneráveis da sociedade. As regras de transição, embora mitiguem parcialmente esses impactos, não eliminam a perda de direitos que a reforma representou para milhões de segurados.`,
  },
  {
    slug: "bpc-criterios-miserabilidade",
    title: "Benefício de Prestação Continuada: Critérios de Miserabilidade à Luz da Jurisprudência",
    authors: ["Ana Beatriz Rocha"],
    date: "Janeiro/2026",
    tags: ["BPC", "Jurisprudência"],
    abstract:
      "Estudo sobre a evolução do critério de renda per capita para concessão do BPC e o papel do STF na flexibilização dos requisitos legais.",
    content: `O Benefício de Prestação Continuada (BPC), previsto no artigo 203, inciso V, da Constituição Federal e regulamentado pela Lei nº 8.742/1993 (Lei Orgânica da Assistência Social — LOAS), constitui um dos mais importantes instrumentos de proteção social no ordenamento jurídico brasileiro. Destinado a pessoas idosas com 65 anos ou mais e a pessoas com deficiência, o BPC garante o pagamento de um salário mínimo mensal àqueles que comprovem não possuir meios de prover a própria subsistência.

O principal critério objetivo para aferição da condição de miserabilidade é a renda familiar per capita inferior a 1/4 do salário mínimo, conforme estabelecido no artigo 20, §3º, da LOAS. No entanto, esse critério tem sido objeto de intensa controvérsia jurídica e jurisprudencial, uma vez que muitos consideram que o limite de 1/4 do salário mínimo é insuficiente para aferir a real condição socioeconômica do requerente.

O Supremo Tribunal Federal, no julgamento da Reclamação 4.374 e dos Recursos Extraordinários 567.985 e 580.963, declarou a inconstitucionalidade parcial do §3º do artigo 20 da LOAS, sem pronúncia de nulidade, reconhecendo que o critério de 1/4 do salário mínimo é defasado e insuficiente para caracterizar a situação de miserabilidade. A Corte entendeu que o critério deve ser interpretado como um parâmetro mínimo, admitindo-se outros meios de prova para demonstrar a vulnerabilidade social do requerente.

Essa decisão abriu espaço para que juízes e tribunais considerem elementos além da renda per capita, como gastos com medicamentos, tratamentos de saúde, condições de moradia e outros fatores que impactam a qualidade de vida do requerente e de sua família. A Turma Nacional de Uniformização (TNU) também tem consolidado entendimentos no sentido de ampliar a análise para além do critério puramente econômico.

A evolução jurisprudencial demonstra uma tendência à humanização na análise dos requisitos do BPC, reconhecendo que a dignidade da pessoa humana — princípio fundamental da República — não pode ser reduzida a um mero cálculo aritmético de renda familiar.`,
  },
  {
    slug: "aposentadoria-especial-agentes-nocivos",
    title: "Aposentadoria Especial e a Exposição a Agentes Nocivos no Ambiente de Trabalho",
    authors: ["Carlos Eduardo Santos", "Fernanda Lima"],
    date: "Novembro/2025",
    tags: ["Aposentadoria Especial", "Agentes Nocivos"],
    abstract:
      "Análise das controvérsias acerca da comprovação de exposição a agentes nocivos para fins de concessão de aposentadoria especial após a reforma previdenciária.",
    content: `A aposentadoria especial é uma modalidade de benefício previdenciário destinada aos segurados que exercem atividades em condições prejudiciais à saúde ou à integridade física. Prevista originalmente no artigo 57 da Lei nº 8.213/1991, essa espécie de aposentadoria permite a redução do tempo de contribuição para 15, 20 ou 25 anos, conforme o grau de exposição a agentes nocivos.

Com a promulgação da Emenda Constitucional nº 103/2019, a aposentadoria especial sofreu alterações substanciais. A principal mudança foi a introdução de uma idade mínima como requisito cumulativo ao tempo de exposição: 55 anos para atividades de 15 anos de exposição, 58 anos para 20 anos e 60 anos para 25 anos. Essa exigência representou um endurecimento significativo nas condições de acesso ao benefício.

A comprovação da exposição a agentes nocivos é feita por meio do Perfil Profissiográfico Previdenciário (PPP) e do Laudo Técnico de Condições Ambientais do Trabalho (LTCAT). Esses documentos devem ser elaborados por médico do trabalho ou engenheiro de segurança do trabalho e devem detalhar as condições ambientais às quais o segurado está exposto durante sua jornada laboral.

Uma das principais controvérsias na matéria diz respeito à utilização de Equipamentos de Proteção Individual (EPI) e sua eficácia na neutralização dos agentes nocivos. O STF, no julgamento do ARE 664.335, com repercussão geral reconhecida, estabeleceu que a utilização de EPI eficaz pode descaracterizar o tempo especial, exceto no caso de exposição ao agente nocivo ruído, em que o EPI não é considerado suficiente para eliminar os danos à saúde do trabalhador.

Outro ponto controvertido refere-se à possibilidade de conversão de tempo especial em tempo comum após a reforma. O INSS tem adotado o entendimento de que a conversão não é mais possível para períodos posteriores à EC 103/2019, posição que tem sido questionada judicialmente por advogados previdenciários que defendem a manutenção do direito à conversão.

A jurisprudência dos Tribunais Regionais Federais tem apresentado divergências significativas sobre esses temas, evidenciando a necessidade de uma uniformização por parte dos tribunais superiores. Enquanto isso, milhares de trabalhadores expostos a condições insalubres e perigosas permanecem em situação de incerteza quanto aos seus direitos previdenciários.

A análise dessas controvérsias revela que a aposentadoria especial, embora essencial para a proteção dos trabalhadores em atividades de risco, enfrenta desafios significativos tanto no plano legislativo quanto no plano interpretativo, demandando uma atuação cada vez mais especializada dos profissionais do Direito Previdenciário.`,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
