import { AnyAction } from '@reduxjs/toolkit';

export interface IModel {
  id: string;
  text: string;
  isFinished: boolean;
  createdAt?: string;
  updatedAt?: string;
  isTextShowed?: boolean;
}

export type TActionSlice = Omit<IModel, 'text'>;
export type TUpdateTextShowed = Omit<TActionSlice, 'isFinished'>;

export interface IColumnLayoutProps {
  labelText?: string;
  selectorState: IModel[];
  droppableId: string;
}
