import styled from 'styled-components';

export const IngredientPickerContainer = styled.div`
  margin-top: 0.5rem;
  padding: 0.3rem;
  border: 2px solid #EF8354;
  border-radius: 0.5rem;
`;

export const FilterWrapper = styled.div`
  width: 100%;
  padding-top: 0;
  padding-bottom: 0;
`;

export const TopLine = styled.div`
  color: #BFC0C0;
  font-size: 18px;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin: 0.8em 0;
`;

export const IngredientsWrapper = styled.div`
  margin: 0.25rem 0 0.75rem 0;
  display: flex;
  flex-wrap: wrap;
`;

export const FilterTypeRadio = styled.input`
  display: none;
  &:checked + label {
    color: #0D0D0D;
    background-color: #5F5AA2;
  }
  &:hover + label {
    cursor: pointer;
    border: 2px solid #5F5AA2;
  }
`;

export const Label = styled.label`
  color: #5F5AA2;
  padding: 0.75em;
  border: 2px solid #5F5AA2;
  border-radius: 5px;
  font-size: 1.05em;
`;

export const RadioContainer = styled.div`
  line-height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  margin-top: 1em;
  padding: 0;
`;