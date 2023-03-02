import { ROLES } from './roles.enum';
import { User } from './user.class';

let usuario = new User(
    'Javier', 'javier@example.com', '123a', ROLES.ADMIN
);
