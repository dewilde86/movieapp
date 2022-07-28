import { IMovie } from './movie';

export interface ITv extends IMovie {
  name: string;
}

export interface ITvDto {
  page: number;
  results: ITv[];
  total_results: number;
  total_pages: number;
}
