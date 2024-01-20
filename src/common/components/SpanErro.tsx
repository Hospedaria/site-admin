import { ReactNode } from "react";
import { Row } from "react-bootstrap";

interface SpanErroProps {
    children: ReactNode;
}

export function SpanErro({ children }: SpanErroProps) {
    return (
        <Row className="w-100 m-1 text-danger">{children}
        </Row>
    );
}