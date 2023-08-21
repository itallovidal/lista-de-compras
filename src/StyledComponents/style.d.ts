import 'styled-components/native'
import {darkTheme} from "./theme.styled";

type MyTheme = darkTheme

declare module 'styled-components/native'{
    export interface DefaultTheme extends MyTheme{}
}