import { Form } from "react-bootstrap"
import Kategoria from "./Kategoria"
import Tesztek from "./Tesztek"
export default function Main() {
    return (
        <>
            <Form>
                <Kategoria/>
                
            </Form>

            <Form>
                <Tesztek/>
            </Form>
        </>
    )
}