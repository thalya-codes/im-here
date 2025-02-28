## Dúvidas

- Como trabalhar com tokens no RN?

## Notas
- As tabs são as 'páginas' do app
- Export default: apenas exporto um item por arquivo
- Export nomeada: exporto diversos itens por arquivo
- TouchableOpacity: cria regiões/elementos clicáveis
- No RN por padrão não usamos uma unidade de medida específica na estilização, isso tem relação com a forma como os diversos dispositivos lidam com os pixels da tela. Essa abordagem permite uma maior flexibilidade e que em cada ambiente as proporções sejam adaptadas
- ScrollView: é um componente para a construção de listas e torna um container scrollável
- FlatList: permite criar listas
    - data: dados que serão renderizados
    - keyExtractor: item que será utilizado para gerar as keys para cada item da lista. Sintaxe: (item) => item
    - renderItem: conteúdo a ser rederizado. Sintaxe ({item}) => (<></>)
    - showsVerticalScrollIndicator: define se o scroll vertical deve estar habilitado ou não
    - ListEmptyComponent: permite definir um componente a ser renderizado, caso a lista de dados esteja vazia

- ScrollView X FlatList
    - A scrollview renderiza todos os componentes filhos de uma só vez independentemente deles estarem visíveis ou não

    - Já a flatlist renderiza os itens aos poucos, ou seja, o conteúdo é exibido de forma incremental, conforme o usuário vai scrollando. 


- StatusBar: permite configurar a barra superior do celular do usuário
    - barStyle: define o tema/cor do ícones da barra

    - backgroundColor: define a cor do bg da barra

    - translucent: define se barra deve sobrepor ou não a aplicação




<!--NÃO É COMPONENTE-->
- Alert: permite exibir alertas(estilo modal)
 - .alert: exibir um alerta. Possui 3 parâmetros:
    - título do alerta
    - descrição do alerta
    - lista de botões a serem exibidos no alerta
    - sintaxe: Alert.alert('Título', 'Descrição', [{text: 'Botão', onPress: () =>{}
    }])