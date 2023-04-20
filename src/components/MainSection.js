import { Asponsored } from "./mainSection/Asponsored/Asponsored"
import { RamdanOff } from "./mainSection/RamdanOff"
import { StaticBann } from "./mainSection/StaticBann"
import { Wrapper } from "./mainSection/Wrapper"

export const MainSection = () => {
    return (
        <main>
            <StaticBann />
            <Wrapper />
            <RamdanOff />
            <Asponsored />
        </main>
    )
}