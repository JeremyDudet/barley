import styled from 'styled-components'
import { TiDeleteOutline } from 'react-icons/ti';
import { Button } from '../../globalStyles'


export const CocktailListFilter = styled.div`
  padding: 0;
  margin: 0;
  display: grid;
`;

export const FilterWrapper = styled.div`
  max-width: 350px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 0;
  } 
`;

export const SearchByIngredientButton = styled(Button)`
  outline: none;
  appearance: none;
  color: #BB46F0;
  background: transparent;
  border: 1px solid;
  border-radius: 0.25em;
  padding: 0.25em 0.5em;
  margin: 1rem 0;
  width: 100%;
  font-family: inherit;
  font-size: 1.15rem;
  cursor: pointer;
  line-height: 1.05;
`;

export const SelectedIngredientsWrapper = styled.div`
  margin: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
`;

export const SelectedIngredient = styled.button`
  outline: none;
  display: flex;
  justify-self: flex-start;
  color: #BFC0C0;
  background: rgb(95, 99, 189);
  border: 1px solid #5F5AA2;
  border-radius: 1.5em;
  padding: 0.25em 0.5em;
  margin: 0;
  font-family: inherit;
  font-size: 0.75rem;
  cursor: pointer;
  &:hover {
    transform: scale(1.01);
    transition: all 0.2s ease;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
`;

export const SelectedIngredientDeleteIcon = styled(TiDeleteOutline)`
  color: #BFC0C0;
  background: transparent;
  margin-right: 0.2rem;
  padding: 0;
  min-width: 10px;
  height: auto;
  align-self: center;
  font-size: 1.25rem;
`;

export const Label = styled.label`
  font-size: 16px;
  width: 100%;
`;

export const NameInput = styled.input`
  background-color: transparent;
  border: 1px solid;
  border-radius: 0.25em;
  padding: 0.25em 0.5em;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-size: 1.15rem;
  cursor: pointer;
  line-height: 1.05;
`;

export const FormSelect = styled.select`
  background-color: transparent;
  border: 1px solid;
  border-radius: 0.25em;
  padding: 0.25em 0.5em;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-size: 1.15rem;
  cursor: pointer;
  line-height: 1.05;
`;
