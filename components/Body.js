import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import Estilo from "../styles";

const Body = () => {
  const [mostrarRegras, setMostrarRegras] = useState(false);
  return (
    <View style={styles.container}>
      {mostrarRegras == false ? (
        <View />
      ) : (
        <View>
          <View style={styles.viewImage}>
            <Image
              source={{
                uri:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmgKA87Rjp0XJaOqDkHUQtkw6V0Urvgr50Tw&usqp=CAU",
              }}
              style={styles.image}
            />
          </View>
          <View style={styles.Text}>
            <Text style={Estilo.fonteRegras}>1. DO OBJETIVO DO GRUPO</Text>
            <Text style={Estilo.fonteRegras}>
              1.1 O FUTEBOL ENTRE AMIGOS tem por objetivo básico a prática do
              futsal e a integração social de seus componentes.
            </Text>
            <Text style={Estilo.fonteRegras}>2.DA COMPOSIÇÃO DO GRUPO</Text>
            <Text style={Estilo.fonteRegras}>
              2.1 O FUTEBOL ENTRE AMIGOS será constituído por 16 (dezesseis)
              integrantes no máximo.
            </Text>
            <Text style={Estilo.fonteRegras}>
              2.2 Quando o grupo se reduzir em função da saída definitiva de
              integrantes, outros serão recrutados para sua recomposição,
              conforme lista de espera. O mensalista que acerta o mês tem a
              preferência no mês seguinte.
            </Text>
            <Text style={Estilo.fonteRegras}>
              2.3 Caso algum mensalista não acertar o mês, outra pessoa será
              convidada para preencher esta vaga, conforme lista de espera.
            </Text>
            <Text style={Estilo.fonteRegras}>
              2.4 Caso algum mensalista faltar durante todo mês, ou seja, 4
              (quatro) semanas consecutivas, outra pessoa será convidada para
              preencher esta vaga, conforme lista de espera.
            </Text>
            <Text style={Estilo.fonteRegras}>
              2.5 No item acima, haverá exceção apenas aos mensalistas afastados
              por contusão, devendo o mesmo acertar a mensalidade normalmente, a
              fim de assegurar sua vaga no grupo.
            </Text>
            <Text style={Estilo.fonteRegras}>
              2.6 Admitir-se-á o reingresso de ex-integrantes que tenham se
              desligado, conforme lista de espera e pagamento de mensalidade(s).
            </Text>
            <Text style={Estilo.fonteRegras}>
              2.7 Integrantes avulsos só poderão participar da pelada em um
              único dia, mediante a disponibilidade de vagas no dia (havendo
              menos de 16 (dezesseis) pessoas) e pagamento da taxa avulsa.
              Pedimos atenção e prudência com os integrantes avulsos bem como o
              respeito aos demais participantes que tem a preferência por serem
              mensalistas.
            </Text>
            <Text style={Estilo.fonteRegras}>
              3. DA COORDENAÇÃO E DOS RECURSOS FINANCEIROS
            </Text>
            <Text style={Estilo.fonteRegras}>
              3.1 A Coordenação será constituída por 3 (três) componentes:
              André, Diego e Claudemir.
            </Text>

            <Text style={Estilo.fonteRegras}>
              3.2 A Coordenação caberão as tarefas inerentes à administração dos
              interesses do grupo, as quais serão distribuídas consensualmente.
            </Text>
            <Text style={Estilo.fonteRegras}>
              3.3 Mensalmente será definido um secretário da pelada, que ficará
              responsável pelos dados estatísticos e recebimento/cobrança das
              mensalidades.
            </Text>
            <Text style={Estilo.fonteRegras}>
              3.4 Semanalmente será definido um roupeiro da pelada, que ficará
              responsável de lavar os coletes. Caso o mesmo venha a faltar na
              semana seguinte, o roupeiro deve deixar os coletes limpos com
              algum integrante que com certeza virá a pelada.
            </Text>
            <Text style={Estilo.fonteRegras}>
              3.5 Os recursos financeiros do grupo serão gerados por
              contribuições mensais de seus membros, tais recursos captados
              serão destinados à cobertura das seguintes despesas, ordenadas
              pela Coordenação:
            </Text>
            <Text style={Estilo.fonteRegras}>
              3.5.1 Material esportivo como bolas e etc;
            </Text>
            <Text style={Estilo.fonteRegras}>
              3.5.2 Churrascos periódicos (datas a definir);
            </Text>
            <Text style={Estilo.fonteRegras}>
              3.5.3 Despesas gerais do interesse do grupo.
            </Text>
            <Text style={Estilo.fonteRegras}>
              3.6 O recolhimento das mensalidades dar-se-á sempre na segunda
              sexta-feira do mês.
            </Text>
            <Text style={Estilo.fonteRegras}>
              3.7 O valor cobrado será de R$ 10,00 (dez reais) para jogadores
              mensalistas na forma de mês a vencer e R$ 10,00 (dez reais) para
              os integrantes avulsos.
            </Text>
            <Text style={Estilo.fonteRegras}>
              3.8 O dinheiro será depositado na conta poupança que será aberta
              no Banco Itaú. Será divulgado um balanço financeiro mensalmente do
              grupo. Qualquer um do grupo poderá ter acesso aos valores da conta
              em qualquer momento que achar necessário. 4. REGRAS INTERNAS
            </Text>
            <Text style={Estilo.fonteRegras}>
              4.1 As regras aqui previstas para a prática do futebol têm por
              premissas básicas proporcionar a participação no maior número de
              peladas possível, bem como, fortalecer os laços de amizade entre
              os participantes.
            </Text>
            <Text style={Estilo.fonteRegras}>
              4.2 Os coordenadores André e Diego não efetuaram ligações
              telefônicas para avisar da impossibilidade de realização da
              pelada. Fica acordado que os coordenadores enviaram e-mail
              informativo no mais tardar até quinta-feira, devendo os demais
              participantes, tornar hábito a leitura de e-mail na quinta-feira à
              noite, a fim de certificar-se de algum imprevisto.
            </Text>
            <Text style={Estilo.fonteRegras}>
              4.2.1 Solicitamos que o atleta que não puder comparecer há uma das
              peladas, que avise através do e-mail
              esportes@colegioprosaberbio.com.br.
            </Text>
            <Text style={Estilo.fonteRegras}>
              4.3 A pelada terá início impreterivelmente às 20h10 na quadra
              (Bloco C) do Colégio Pró-Saber Bio e com término às 22h10. Porém,
              os jogadores deverão chegar às 19h50 para estacionar os carros,
              trocar-se e dividir os times. Os participantes devem ser pontuais
              e rápidos a aprontar-se para se perder o mínimo do tempo possível.
            </Text>
            <Text style={Estilo.fonteRegras}>
              4.4 Haverá em todas as peladas a recolha de dados que permitam
              manter uma estatística da frequência e dos gols, que será feita
              pelo secretário mensal. No final do ano haverá as seguintes
              premiações para:
            </Text>
            <Text style={Estilo.fonteRegras}>4.4.1 O artilheiro do ano;</Text>
            <Text style={Estilo.fonteRegras}>
              4.4.2 A maior participação do ano;
            </Text>
            <Text style={Estilo.fonteRegras}>
              4.4.3 O melhor goleiro do ano (mediante votação dos participantes
              e em periodicidade a se definir); e,
            </Text>
            <Text style={Estilo.fonteRegras}>
              4.4.4 O destaque do ano (mediante votação dos participantes e em
              periodicidade a se definir).
            </Text>
            <Text style={Estilo.fonteRegras}>
              4.5 Considerações sobre as premiações acima:
            </Text>
            <Text style={Estilo.fonteRegras}>
              4.5.1 Para efeito de controle da premiação de frequência o
              mensalista que estiver na quadra às 20h10 receberá um ponto na
              contagem de presença.
            </Text>
            <Text style={Estilo.fonteRegras}>
              4.5.2 Aquele que chegar atrasado, ou seja, após às 20h10, receberá
              meio ponto na contagem de presença.
            </Text>
            <Text style={Estilo.fonteRegras}>
              4.5.3 Nas votações de goleiro e destaque do ano, não será
              permitido o voto na própria pessoa.
            </Text>
            <Text style={Estilo.fonteRegras}>
              4.5.4 No final do ano, ocasião que ocorrerá a entrega das
              premiações acima, não será permitido que uma mesma pessoa recebe
              mais do que um prêmio. Tal medida, visa incentivar e premiar os
              demais participantes da pelada.
            </Text>

            <Text style={Estilo.fonteRegras}>
              4.6 No evento esportivo as peladas terão duração total de 2 (duas)
              horas, sendo cada jogo terminará no momento que uma das equipes
              fazer 3 (três) gols primeiro.
            </Text>
            <Text style={Estilo.fonteRegras}>
              4.7 Os "próximos" participarão da pelada mediante a saída dos
              substituídos por derrota, na pelada anterior.
            </Text>
            <Text style={Estilo.fonteRegras}>
              4.8 Os "próximos" poderão, ainda, ter acesso à pelada em
              andamento, em quaisquer casos de desistência/contusão de um ou
              mais de um de seus participantes, respeitada sempre a ordem de
              jogo das equipes ou chegada.
            </Text>
            <Text style={Estilo.fonteRegras}>
              4.8.1 É importante dizer que todo o participante que decidir de
              livre e espontânea vontade abandonar uma partida durante o
              decorrer da mesma, ficará impedido de jogar qualquer outra nesse
              dia.
            </Text>
            <Text style={Estilo.fonteRegras}>
              4.9 Se a bola tocar na rede superior, será considerado bola fora,
              dando a equipe adversária o direito do arremesso lateral.
            </Text>
            <Text style={Estilo.fonteRegras}>
              4.10 A reposição da bola em jogo, em lateral, será efetuada com os
              pés. No tiro de meta, a bola deverá ser reposta em jogo pelas mãos
              do goleiro.
            </Text>
            <Text style={Estilo.fonteRegras}>
              4.11 Nas cobranças de laterais e escanteio deve-se respeitar a
              distância da linha pontilhada.
            </Text>
            <Text style={Estilo.fonteRegras}>
              4.12 As infrações/faltas serão feitas em comum acordo entre as
              equipes participantes do jogo.
            </Text>
            <Text style={Estilo.fonteRegras}>
              4.13 Só poderá pedir falta o jogador que supostamente a tenha
              sofrido. Deverá ser respeitada a distância de 5 (cinco) passos na
              cobrança da falta.
            </Text>
            <Text style={Estilo.fonteRegras}>
              4.14 Pede-se aos integrantes da pelada, que sejam comedidos nos
              palavrões, a fim de evitar reclamações dos vizinhos.
            </Text>
            <Text style={Estilo.fonteRegras}>
              4.15 Eventuais brigas/discussões, descumprimento das regras
              internas, manipulação de dados estatísticos ou desvio de verbas,
              estarão os participantes sujeitos a punições e até mesmo a
              exclusão do grupo.
            </Text>
          </View>
        </View>
      )}
      {mostrarRegras == false ? (
        <TouchableHighlight
          onPress={() => setMostrarRegras(true)}
          style={styles.btnMostrar}
        >
          <Text style={styles.txt}>Mostrar Regras</Text>
        </TouchableHighlight>
      ) : (
        <TouchableHighlight
          onPress={() => setMostrarRegras(false)}
          style={styles.btnEsconder}
        >
          <Text style={styles.txt}>Esconder Regras</Text>
        </TouchableHighlight>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  Text: {
    borderWidth: 2,
    borderRadius: 5,
    padding: 5,
    width: "100%",
    marginLeft: 2,
    color: "#000",
  },
  viewImage: {
    backgroundColor: "#000",
  },
  btnMostrar: {
    marginTop: 10,
    backgroundColor: "rgb(84,50,168)",
    padding: 15,
    alignItems: "center",
    width: "100%",
  },
  btnEsconder: {
    marginTop: 15,
    backgroundColor: "rgb(84,50,168)",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  txt: {
    color: "#fff",
    fontSize: 20,
  },
});

export default Body;
