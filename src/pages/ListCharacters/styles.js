import styled from 'styled-components/native';
import Platform from 'react-native';

export const StyledContainer = styled.SafeAreaView`
  display: flex;
  flex: 1;
  background: #fff;
`;

// ---- Title
export const StyledContainerTitle = styled.View`
  display: flex;
  flex-direction: row;
  background: #fff;
`;

export const StyledTitleBold = styled.Text`
  margin-top: 12px;
  margin-left: 10%;
  color: #d42026;
  font-size: 16px;
  font-weight: bold;
  font-family: ${Platform.OS === 'android' ? 'Roboto' : 'Arial'};
`;

export const StyledTitle = styled.Text`
  margin-top: 12px;
  color: #d42026;
  font-size: 16px;
  font-family: ${Platform.OS === 'android' ? 'Roboto' : 'Arial'};
`;

export const StyledSeparatorMini = styled.View`
  margin-left: 10%;
  width: 14%;
  height: 2px;
  background: #d42026;
`;

// ---- End Title

// ---- Input
export const StyledContainerInput = styled.View`
  display: flex;
  background: #fff;
`;

export const StyledTitleInput = styled.Text`
  display: flex;
  margin-top: 12px;
  margin-left: 10%;
  color: #d42026;
  font-size: 16px;
  font-family: ${Platform.OS === 'android' ? 'Roboto' : 'Arial'};
`;

export const StyledInput = styled.TextInput`
  height: 40px;
  width: 80%;
  border-color: #9c9c9c;
  border-radius: 6px;
  border-width: 1;
  margin-left: 10%;
`;
// ---- End Input

// ---- Table
export const StyledTable = styled.ScrollView.attrs({
  showsHorizontalScrollIndicator: false,
})``;

export const StyledHeaderTable = styled.View`
  margin-top: 12px;
  background: #d42026;
  height: 45px;
  padding-left: 30%;
  display: flex;
  justify-content: center;
`;

export const StyledTextHeader = styled.Text`
  font-size: 16px;
  color: #fff;
  font-family: ${Platform.OS === 'android' ? 'Roboto' : 'Arial'};
`;

export const StyledListItem = styled.View`
  padding-top: 18px;
  padding-left: 10%;
  padding-bottom: 18px;
  /* display: flex; */
  /* align-items: center; */
  flex-direction: row;
`;

export const StyledAvatarItem = styled.Image`
  width: 75px;
  height: 75px;
  border-radius: 75px;
`;

export const StyledNameAvatar = styled.Text`
  margin-left: 25px;
  font-size: 24px;
  color: #9c9c9c;
`;

export const StyledSeparator = styled.View`
  height: 1px;
  width: 100%;
  background: #d42026;
  margin-left: 3px;
`;
// ---- End Table

// ---- Pagination
export const StyledContainerPages = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding-bottom: 24px;
  height: 14%;
  width: 100%;
  padding-top: 18px;
  padding-right: 30px;
  padding-left: 30px;
`;

export const StyledContainerPageItem = styled.ScrollView.attrs({
  showsHorizontalScrollIndicator: false,
  horizontal: true,
})``;

export const StyledPageItem = styled.TouchableOpacity`
  height: 35px;
  width: 35px;
  border-radius: 35px;
  background: ${props => (props.selected ? '#d42026' : 'transparent')};
  border-color: #d42026;
  border-width: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 15px;
`;

export const StyledTextPageItem = styled.Text`
  font-size: 16px;
  color: ${props => (props.selected ? '#FFF' : '#d42026')};
`;

export const StyledArrowItemLeft = styled.TouchableOpacity`
  height: 35px;
  width: 35px;
  border-radius: 35px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  margin-right: 35px;
`;

export const StyledArrowItemRight = styled.TouchableOpacity`
  height: 35px;
  width: 35px;
  border-radius: 35px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  margin-left: 35px;
`;
// ---- End Pagination

// ---- Footer

export const StyledFooter = styled.View`
  margin-bottom: 0px;
  height: 12px;
  background: #d42026;
`;

// ---- End Footer
