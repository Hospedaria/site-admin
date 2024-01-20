import { Navigate, createBrowserRouter } from "react-router-dom";

import { PaginaInicial } from "./pages/PaginaInicial";
import { CheckoutSucesso } from "./components/Checkout/CheckoutSucesso";
import { CheckoutErro } from "./components/Checkout/CheckoutErro";
import { CheckoutBricks } from "./components/Checkout/CheckoutBricks";

function RouterApp() {
    return createBrowserRouter([
        {
            path: "/",
            element: <Navigate to="/pagina-inicial" />
        },
        {
            path: "/pagina-inicial",
            element: <PaginaInicial />,
        },
        // {
        //     path: "/bootcamp-aws-cloud-practitioner",
        //     element: <AwsBootcamp />
        // },
        // {
        //     path: "/bootcamp-aws-cloud-practitioner-sucesso",
        //     element: <AwsInscricaoSucesso />
        // },
        {
            path: "/checkout-curso-javascript",
            element: <CheckoutBricks />
        },
        {
            path: "/checkout-curso-javascript/aprovado",
            element: <CheckoutSucesso />,
        },
        {
            path: "/checkout-curso-javascript/recusado",
            element: <CheckoutErro />
        }
    ]);
}

export { RouterApp }