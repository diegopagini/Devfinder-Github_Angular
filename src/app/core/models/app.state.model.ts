import { User } from './user.model';

export interface AppInitialState {
  loading: boolean;
  user: User | any;
  developers: User[] | any;
  notFound: boolean;
}
