import React, {useEffect, useState, Fragment} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

import {
  actionListCharactersRequest,
  actionListCharactersByNameRequest,
} from '~/store/modules/character/actions';

import {
  StyledContainer,
  StyledContainerTitle,
  StyledTitleBold,
  StyledTitle,
  StyledSeparatorMini,
  StyledContainerInput,
  StyledTitleInput,
  StyledInput,
  StyledTable,
  StyledHeaderTable,
  StyledTextHeader,
  StyledListItem,
  StyledAvatarItem,
  StyledNameAvatar,
  StyledSeparator,
  StyledContainerPages,
  StyledContainerPageItem,
  StyledPageItem,
  StyledTextPageItem,
  StyledArrowItemLeft,
  StyledArrowItemRight,
  StyledFooter,
} from './styles';

let arr = [];

export default function ListCharacters() {
  const data = useSelector(state => state.character.data);
  const [apikey] = useState('COLOCAR A API_KEY');
  const [hash] = useState('COLOCAR O HASH');
  const [totalPages, setTotalPages] = useState(0); // Total de páginas
  const [offset, setOffset] = useState(0); // Após qual item será listado na tela
  const [limit] = useState(4); // Limite de itens por página
  const [pageSelected, setPageSelected] = useState(1); // Página selecionada
  const [initialIndexPage, setInitialIndexPage] = useState(1); // Primeira pagina a ser mostrada no paginador
  const [name, setName] = useState('');

  const dispatch = useDispatch();

  // Função que atribui ao array de itens da paginação, as páginas corretas
  function handleRenderPagesItems() {
    if (totalPages && totalPages > 0) {
      arr = [];
      for (let i = initialIndexPage; i <= initialIndexPage + 2; i += 1) {
        arr.push(i);
      }
    }
  }

  // Função que chama a próxima página
  function handleNextPage() {
    if (pageSelected <= totalPages) {
      setPageSelected(pageSelected + 1);
    }
  }

  // Função que chama a página anterior
  function handlePreviousPage() {
    if (pageSelected > 1) {
      setPageSelected(pageSelected - 1);
    }
  }

  // Effect que valida se o name foi alterado, se sim e se nao for vazio ele pesquisa na api valores que contenham esse name
  useEffect(() => {
    if (!name) {
      dispatch(actionListCharactersRequest(apikey, hash, offset, limit));
      return;
    }

    dispatch(
      actionListCharactersByNameRequest(apikey, hash, offset, limit, name),
    );
    handleRenderPagesItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  // Effect que avalia se a pagina foi selecionada, se foi ele seta o OFFSET e também valida se tem que trocar de paginadores
  useEffect(() => {
    setOffset(limit * pageSelected - limit);
    const pageExistsInPagination = arr.filter(item => item === pageSelected);
    if (pageExistsInPagination.length === 0) {
      setInitialIndexPage((limit * pageSelected) / limit);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageSelected]);

  // Effect que avalia se o offset foi alterado, se sim ele chama novamente os dados da API
  useEffect(() => {
    dispatch(actionListCharactersRequest(apikey, hash, offset, limit));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset]);

  // Carrego as informações da API
  useEffect(() => {
    dispatch(actionListCharactersRequest(apikey, hash, offset, limit));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Toda vez que o valor de data mudar eu jogo o total de paginas no state
  useEffect(() => {
    if (data && data.results && data.results.length > 0) {
      setTotalPages(Math.round(data.total / limit));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <StyledContainer>
      <StyledContainerTitle>
        <StyledTitleBold>BUSCA MARVEL</StyledTitleBold>
        <StyledTitle>TEST FRONT-END</StyledTitle>
      </StyledContainerTitle>
      <StyledSeparatorMini />
      <StyledContainerInput>
        <StyledTitleInput>Nome do Personagem</StyledTitleInput>
        <StyledInput onChangeText={text => setName(text)} value={name} />
      </StyledContainerInput>
      <StyledHeaderTable>
        <StyledTextHeader>Nome</StyledTextHeader>
      </StyledHeaderTable>
      <StyledTable>
        {data &&
          data.results &&
          data.results.length > 0 &&
          data.results.map(character => (
            <Fragment key={character.id}>
              <StyledListItem>
                <StyledAvatarItem
                  source={{
                    uri: `${character.thumbnail.path}/portrait_small.jpg`,
                  }}
                />
                <StyledNameAvatar>{character.name}</StyledNameAvatar>
              </StyledListItem>
              <StyledSeparator />
            </Fragment>
          ))}
      </StyledTable>
      <StyledContainerPages>
        {handleRenderPagesItems()}
        <StyledArrowItemLeft onPress={() => handlePreviousPage()}>
          <AntDesignIcon name="caretleft" color="#d42026" size={20} />
        </StyledArrowItemLeft>
        <StyledContainerPageItem>
          {arr &&
            arr.length > 0 &&
            arr.map(i => (
              <StyledPageItem
                selected={pageSelected === i}
                key={i}
                // eslint-disable-next-line no-loop-func
                onPress={() => setPageSelected(i)}>
                <StyledTextPageItem selected={pageSelected === i}>
                  {i}
                </StyledTextPageItem>
              </StyledPageItem>
            ))}
        </StyledContainerPageItem>
        <StyledArrowItemRight onPress={() => handleNextPage()}>
          <AntDesignIcon name="caretright" color="#d42026" size={20} />
        </StyledArrowItemRight>
      </StyledContainerPages>
      <StyledFooter />
    </StyledContainer>
  );
}
