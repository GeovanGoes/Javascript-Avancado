import { Igualavel } from "./Igualavel";
import { Imprimivel } from "./Imprimivel";

export interface Objeto<T> extends Igualavel<T>, Imprimivel
{
    
}