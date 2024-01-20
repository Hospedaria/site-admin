import { ReactNode } from "react";
import { Row } from "react-bootstrap";

interface RowPadraoProps {
    children: ReactNode;
}

export function RowPadrao({ children }: RowPadraoProps) {
    return <Row className="mb-3">{children}</Row>;
}