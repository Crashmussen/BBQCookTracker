import { Button } from "@mui/material";
import { useState } from "react";

export default function Toggler(text) {
    const [show, setShow] = useState(true)

    return (
        <div>
           {show ? <h2>Test!</h2> : null}
        <Button onClick={() => setShow(!show)}>
            {text}
        </Button>
        </div>
    )
}