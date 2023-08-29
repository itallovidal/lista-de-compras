import 'styled-components/native'
import {darkTheme} from "./theme.styled";

type MyTheme = typeof darkTheme

declare module 'styled-components/native'{
    export interface DefaultTheme extends MyTheme{}
}